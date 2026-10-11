// A character model (.rlg + .rlt bundles + .shier skeleton) as a rigged GLB: every piece, the
// skeleton with the game's bone names, skin weights, all six UV sets, face shapes (morph targets)
// and the main textures. A port of scripts/modkit/rlg2glb.py.
import { loadRlg, loadShier, readTextures, decodeTex, encodePng, stripTris, mul4, inv4, eye4, ZUP_TO_YUP, nlHash, hex8, concat } from './formats.js';

function clean(m) {
  // affine row-vector matrix: last column exactly (0, 0, 0, 1); float noise rounded away
  const o = Float64Array.from(m); o[3] = o[7] = o[11] = 0; o[15] = 1;
  for (let i = 0; i < 16; i++) if (Math.abs(o[i]) < 1e-9) o[i] = 0;
  return o;
}

// swaps: Map(texture hash -> hash) drawn instead (a sidekick's or goalie's kit for one team)
export function exportGlb({ rlg, rlts, shier, names = new Map(), name = 'model', shierName = 'skeleton.shier', swaps = new Map() }) {
  const { packets, bones: bind } = loadRlg(rlg);
  const sk = loadShier(shier), hashes = sk.hashes, parents = sk.parents, offsets = sk.offsets;
  const notes = [];
  const jointOf = new Map(hashes.map((h, i) => [h, i]));
  const missing = [...bind.keys()].filter((h) => !jointOf.has(h));
  if (missing.length) throw new Error('This skeleton does not fit the model: bones ' + missing.map(hex8).join(', ') + ' are missing.');

  // world bind matrices (row vectors): the model's own, else the parent's plus the .shier offset
  let world = hashes.map((h) => (bind.has(h) ? bind.get(h) : null));
  for (let i = 0; i < hashes.length; i++) {
    if (world[i] === null) {
      const local = eye4(); if (offsets) { local[12] = offsets[i][0]; local[13] = offsets[i][1]; local[14] = offsets[i][2]; }
      world[i] = parents[i] >= 0 ? mul4(local, world[parents[i]]) : local;
    }
  }
  world = world.map((w) => mul4(w, ZUP_TO_YUP));

  // textures from every bundle given; placeholders the game swaps per team ("toad/toad_mario" drawn
  // with "toad_mario/toad_mario") take the bundle's "<name>/<name>"
  const textures = new Map();
  for (const r of rlts) for (const { hash, blob } of readTextures(r)) textures.set(hash, blob);
  const origTex = packets.map((p) => p.tex);
  for (const pk of packets) {
    if (swaps.has(pk.tex) && textures.has(swaps.get(pk.tex))) pk.tex = swaps.get(pk.tex);
    const t = pk.tex;
    if (!textures.has(t) && (names.get(t) || '').includes('/')) {
      const b = names.get(t).split('/').pop(), h = nlHash(b + '/' + b);
      if (textures.has(h)) pk.tex = h;
    }
    if (!textures.has(pk.tex) && pk.tex) notes.push(`texture ${names.get(pk.tex) || hex8(pk.tex)} is not in the texture files: that piece is untextured`);
  }
  const texOrder = [];
  for (const pk of packets) if (textures.has(pk.tex) && !texOrder.includes(pk.tex)) texOrder.push(pk.tex);

  // buffers
  const parts = []; let blen = 0; const views = [], accessors = [];
  const addView = (data, target) => {
    const pad = (-blen) & 3; if (pad) { parts.push(new Uint8Array(pad)); blen += pad; }
    const v = { buffer: 0, byteOffset: blen, byteLength: data.byteLength }; if (target) v.target = target;
    views.push(v); parts.push(new Uint8Array(data.buffer, data.byteOffset, data.byteLength)); blen += data.byteLength;
    return views.length - 1;
  };
  const addAcc = (arr, ncomp, ctype, type, target, minmax) => {
    const v = addView(arr, target), count = arr.length / ncomp;
    const a = { bufferView: v, componentType: ctype, count, type };
    if (minmax) {
      const mn = Array(ncomp).fill(Infinity), mx = Array(ncomp).fill(-Infinity);
      for (let i = 0; i < count; i++) for (let k = 0; k < ncomp; k++) { const x = arr[i * ncomp + k]; if (x < mn[k]) mn[k] = x; if (x > mx[k]) mx[k] = x; }
      a.min = mn; a.max = mx;
    }
    accessors.push(a); return accessors.length - 1;
  };

  const images = [], glTextures = [], materials = [], matOf = new Map(), pngs = [];
  for (const tid of texOrder) {
    const { w, h, px } = decodeTex(textures.get(tid)), png = encodePng(px, w, h), nm = names.get(tid) || hex8(tid);
    pngs.push({ hash: tid, name: nm, png, w, h });
    images.push({ bufferView: addView(png), mimeType: 'image/png', name: nm.replace(/\//g, '_') });
    glTextures.push({ source: images.length - 1, sampler: 0 });
    materials.push({ name: nm, pbrMetallicRoughness: { baseColorTexture: { index: glTextures.length - 1 }, metallicFactor: 0, roughnessFactor: 1 },
      alphaMode: 'MASK', alphaCutoff: 0.5, extras: { texture_hash: hex8(tid) } });
    matOf.set(tid, materials.length - 1);
  }
  for (const pk of packets) if (!matOf.has(pk.tex)) {
    materials.push({ name: names.get(pk.tex) || hex8(pk.tex), extras: { texture_hash: hex8(pk.tex) }, pbrMetallicRoughness: { baseColorFactor: [0.8, 0.8, 0.8, 1] } });
    matOf.set(pk.tex, materials.length - 1);
  }

  // pieces
  const rot = (v, n, out, normalize) => {     // v @ ZUP_TO_YUP[:3,:3]: (x, y, z) -> (x, z, -y)
    for (let i = 0; i < n; i++) {
      let x = v[3 * i], y = v[3 * i + 2], z = -v[3 * i + 1];
      if (normalize) { const l = Math.max(Math.hypot(x, y, z), 1e-9); x /= l; y /= l; z /= l; }
      out[3 * i] = x; out[3 * i + 1] = y; out[3 * i + 2] = z;
    }
    return out;
  };
  const meshes = [], stats = { tris: 0, verts: 0, weighted: 0 };
  packets.forEach((pk, n) => {
    const tris = pk.prim === 1 ? stripTris(pk.idx) : (() => { const o = []; for (let i = 0; i + 2 < pk.idx.length; i += 3) o.push(pk.idx.slice(i, i + 3)); return o; })();
    if (!tris.length) return;
    const nv = pk.nv, attrs = {};
    attrs.POSITION = addAcc(rot(pk.pos, nv, new Float32Array(nv * 3)), 3, 5126, 'VEC3', 34962, true);
    if (pk.nrm) attrs.NORMAL = addAcc(rot(pk.nrm, nv, new Float32Array(nv * 3), true), 3, 5126, 'VEC3', 34962);
    pk.uvs.forEach((uv, k) => { attrs['TEXCOORD_' + k] = addAcc(Float32Array.from(uv), 2, 5126, 'VEC2', 34962); });
    if (pk.bi && pk.bw && pk.map.length) {
      const J = new Uint16Array(nv * 4), W = new Float32Array(nv * 4);
      for (let v = 0; v < nv; v++) {
        let s = 0;
        for (let k = 0; k < 4; k++) if (pk.bw[v * 4 + k] > 0) { J[v * 4 + k] = jointOf.get(pk.map[pk.bi[v * 4 + k]]); s += pk.bw[v * 4 + k]; }
        for (let k = 0; k < 4; k++) W[v * 4 + k] = pk.bw[v * 4 + k] > 0 ? (s > 0 ? pk.bw[v * 4 + k] / s : pk.bw[v * 4 + k]) : 0;
      }
      attrs.JOINTS_0 = addAcc(J, 4, 5123, 'VEC4', 34962);
      attrs.WEIGHTS_0 = addAcc(W, 4, 5126, 'VEC4', 34962);
      stats.weighted++;
    }
    const ind = addAcc(Uint16Array.from(tris.flat()), 1, 5123, 'SCALAR', 34963);
    const prim = { attributes: attrs, indices: ind, mode: 4, material: matOf.get(pk.tex) };
    const mesh = { name: 'piece' + String(n).padStart(2, '0'), primitives: [prim] };
    if (pk.morphs.size) {
      const targets = [], tnames = [];
      for (const m of [...pk.morphs.keys()].sort((a, b) => a - b)) {
        const { vi, dl } = pk.morphs.get(m), D = new Float64Array(nv * 3);
        for (let k = 0; k < vi.length; k++) for (let j = 0; j < 3; j++) D[vi[k] * 3 + j] = dl[k * 3 + j];
        targets.push({ POSITION: addAcc(rot(D, nv, new Float32Array(nv * 3)), 3, 5126, 'VEC3', 34962, true) });
        tnames.push('morph' + String(m).padStart(2, '0'));
      }
      prim.targets = targets; mesh.weights = targets.map(() => 0); mesh.extras = { targetNames: tnames };
    }
    meshes.push(mesh); stats.tris += tris.length; stats.verts += nv;
  });

  // joints: local = world * inverse(parent world); the row-vector matrix's rows are glTF's columns
  const nodes = [], jointNodes = [];
  hashes.forEach((h, i) => {
    const local = clean(parents[i] >= 0 ? mul4(world[i], inv4(world[parents[i]])) : world[i]);
    nodes.push({ name: names.get(h) || hex8(h), matrix: Array.from(local), extras: { hash: hex8(h) } });
    jointNodes.push(nodes.length - 1);
  });
  hashes.forEach((h, i) => {
    const kids = []; for (let c = 0; c < hashes.length; c++) if (parents[c] === i) kids.push(jointNodes[c]);
    if (kids.length) nodes[jointNodes[i]].children = kids;
  });
  const ibm = new Float32Array(hashes.length * 16);
  world.forEach((w, i) => ibm.set(clean(inv4(w)), i * 16));
  const roots = hashes.map((h, i) => i).filter((i) => parents[i] < 0).map((i) => jointNodes[i]);
  const skin = { name: sk.name, joints: jointNodes, inverseBindMatrices: addAcc(ibm, 16, 5126, 'MAT4'), skeleton: roots[0] };
  const meshNodes = meshes.map((m, k) => { nodes.push({ name: m.name, mesh: k, skin: 0 }); return nodes.length - 1; });
  nodes.push({ name, children: roots, extras: { source: 'Strikers Model Studio', skeleton: shierName } });
  const gltf = { asset: { version: '2.0', generator: 'Strikers Model Studio (rlg2glb)' }, scene: 0,
    scenes: [{ nodes: [nodes.length - 1, ...meshNodes] }], nodes, meshes, skins: [skin], materials, accessors, bufferViews: views, buffers: [{ byteLength: 0 }] };
  if (images.length) Object.assign(gltf, { images, textures: glTextures, samplers: [{ magFilter: 9729, minFilter: 9987, wrapS: 10497, wrapT: 10497 }] });
  const pad = (-blen) & 3; if (pad) { parts.push(new Uint8Array(pad)); blen += pad; }
  gltf.buffers[0].byteLength = blen;
  return { glb: writeGlb(gltf, concat(parts)), stats: { ...stats, pieces: meshes.length, bones: hashes.length, named: hashes.filter((h) => names.has(h)).length, textures: images.length }, notes, pngs, origTex };
}

export function writeGlb(gltf, bin) {
  let js = new TextEncoder().encode(JSON.stringify(gltf));
  const jpad = (-js.length) & 3; if (jpad) js = concat([js, new Uint8Array(jpad).fill(0x20)]);
  const head = new Uint8Array(20), dv = new DataView(head.buffer);
  dv.setUint32(0, 0x46546C67, true); dv.setUint32(4, 2, true); dv.setUint32(8, 12 + 8 + js.length + 8 + bin.length, true);
  dv.setUint32(12, js.length, true); dv.setUint32(16, 0x4E4F534A, true);
  const bh = new Uint8Array(8), bv = new DataView(bh.buffer); bv.setUint32(0, bin.length, true); bv.setUint32(4, 0x004E4942, true);
  return concat([head, js, bh, bin]);
}
