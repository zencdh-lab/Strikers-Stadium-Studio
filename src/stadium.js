// Stadiums: Art/environments/<name>/gameworld.tmp.zlib (a texture bundle and the stadium's models:
// the stadium itself, then props such as flags and signs) and gameworld.res.zlib (the props'
// skeletons and animations). Each file is a big-endian u32 size, then zlib data, then an NL chunk tree.
import { unzlibSync, zlibSync } from 'fflate';
import { walk, walkLevel, chunk, concat, be, loadRlg, readTextures, decodeTex, encodePng, stripTris, hex8, chunks } from './formats.js';
import { writeGlb } from './export.js';

export function unpackZlib(u8) {
  const size = be(u8).getUint32(0), out = unzlibSync(u8.subarray(4));
  if (out.length !== size) throw new Error(`size ${out.length}, header says ${size}`);
  return out;
}
export function packZlib(u8) {
  const z = zlibSync(u8, { level: 9 }), out = new Uint8Array(4 + z.length);
  be(out).setUint32(0, u8.length); out.set(z, 4);
  return out;
}

// -> { tmp, textures (PTLG bytes), models: [{ id, name, off, size, rlg }] }
export function parseWorld(tmpZ, names = new Map()) {
  const tmp = unpackZlib(tmpZ);
  const rows = walk(tmp, 0, tmp.length);
  const texRow = rows.find((r) => r.id === 0x24100);
  const textures = texRow ? tmp.subarray(texRow.payload, texRow.payload + texRow.size) : null;
  const models = rows.filter((r) => r.rawid === 0x8001B000).map((r) => {
    const rlg = tmp.subarray(r.off, r.off + 8 + r.size), ch = chunks(rlg);
    const id = ch.has(0x1B003) ? be(rlg).getUint32(ch.get(0x1B003)[0][0]) : 0;
    const ref = ch.has(0x1B002) ? [...Array(16)].map((_, i) => be(rlg).getFloat32(ch.get(0x1B002)[0][0] + 4 * i)) : null;
    const nm = names.get(id) || hex8(id);
    // its objects (0x1B003 after the id... : hash, packet count, 0x0012fb18), in packet order; the scene places them by hash
    const objects = []; if (ch.has(0x1B003)) { const [o, sz] = ch.get(0x1B003)[0]; let first = 0; for (let k = o; k + 12 <= o + sz; k += 12) { const n = be(rlg).getUint32(k + 4); objects.push({ hash: be(rlg).getUint32(k), first, count: n }); first += n; } }
    return { id, objects, name: nm, short: nm.replace(/^_[^/]+\//, '').replace(/\/[^/]+$/, (m) => (nm.split('/').length > 2 ? '' : m)), off: r.off, size: r.size, rlg, ref };
  });
  return { tmp, textures, models };
}

// Animated textures: '_lfi' (an IFL image list), a count, then (frame texture hash, seconds) pairs
export function readIfl(blob) {
  if (blob.length < 36 || blob[0] !== 0x5f || blob[1] !== 0x6c || blob[2] !== 0x66 || blob[3] !== 0x69) return null;
  const dv = be(blob), n = dv.getUint32(8), frames = [];
  for (let i = 0; i < n && 36 + 8 * i + 8 <= blob.length; i++) frames.push({ hash: dv.getUint32(36 + 8 * i), seconds: dv.getFloat32(40 + 8 * i) });
  return { frames };
}

// The stadium (and its props) as a static GLB: positions, normals, every UV set, the baked vertex
// colours, the main textures. Z up (game) -> Y up (glTF). Each model is a node; each piece a mesh.
export function exportStadiumGlb({ world, names = new Map(), only = null }) {
  const texMap = new Map(); if (world.textures) for (const { hash, blob } of readTextures(world.textures)) texMap.set(hash, blob);
  const parts = []; let blen = 0; const views = [], accessors = [];
  const addView = (data, target) => { const pad = (-blen) & 3; if (pad) { parts.push(new Uint8Array(pad)); blen += pad; } const v = { buffer: 0, byteOffset: blen, byteLength: data.byteLength }; if (target) v.target = target; views.push(v); parts.push(new Uint8Array(data.buffer, data.byteOffset, data.byteLength)); blen += data.byteLength; return views.length - 1; };
  const addAcc = (arr, nc, ctype, type, target, minmax, normalized) => {
    const v = addView(arr, target), count = arr.length / nc, a = { bufferView: v, componentType: ctype, count, type };
    if (normalized) a.normalized = true;
    if (minmax) { const mn = Array(nc).fill(Infinity), mx = Array(nc).fill(-Infinity); for (let i = 0; i < count; i++) for (let k = 0; k < nc; k++) { const x = arr[i * nc + k]; if (x < mn[k]) mn[k] = x; if (x > mx[k]) mx[k] = x; } a.min = mn; a.max = mx; }
    accessors.push(a); return accessors.length - 1;
  };
  const images = [], glTex = [], materials = [], matOf = new Map(), stats = { pieces: 0, tris: 0, verts: 0, textures: 0, models: 0 };
  const mat = (tid) => {
    if (matOf.has(tid)) return matOf.get(tid);
    const nm = names.get(tid) || hex8(tid), m = { name: nm, extras: { texture_hash: hex8(tid) }, pbrMetallicRoughness: { metallicFactor: 0, roughnessFactor: 1 }, alphaMode: 'MASK', alphaCutoff: 0.5, doubleSided: false };
    let blob = texMap.get(tid);
    const ifl = blob && readIfl(blob);
    if (ifl && ifl.frames.length && texMap.has(ifl.frames[0].hash)) blob = texMap.get(ifl.frames[0].hash);   // animated: its first picture
    if (blob) {
      try {
        const d = decodeTex(blob);
        // soft transparency (glass, light shafts, glows) is blended; on/off transparency is a cut-out
        let soft = 0; for (let i = 3; i < d.px.length; i += 4) if (d.px[i] > 12 && d.px[i] < 243) soft++;
        if (soft > d.px.length / 4 * 0.1) { m.alphaMode = 'BLEND'; delete m.alphaCutoff; }
        images.push({ bufferView: addView(encodePng(d.px, d.w, d.h)), mimeType: 'image/png', name: nm.replace(/\//g, '_') });
        glTex.push({ source: images.length - 1, sampler: 0 }); m.pbrMetallicRoughness.baseColorTexture = { index: glTex.length - 1 };
      } catch (e) { m.pbrMetallicRoughness.baseColorFactor = [0.8, 0.8, 0.8, 1]; }
    } else m.pbrMetallicRoughness.baseColorFactor = [0.8, 0.8, 0.8, 1];
    materials.push(m); matOf.set(tid, materials.length - 1); return materials.length - 1;
  };
  const rot = (v, n, normalize) => { const o = new Float32Array(n * 3); for (let i = 0; i < n; i++) { let x = v[3 * i], y = v[3 * i + 2], z = -v[3 * i + 1]; if (normalize) { const l = Math.hypot(x, y, z); if (l < 1e-6) { x = 0; y = 1; z = 0; } else { x /= l; y /= l; z /= l; } } o[3 * i] = x; o[3 * i + 1] = y; o[3 * i + 2] = z; } return o; };
  const meshes = [], nodes = [], roots = [];
  world.models.forEach((md, mi) => {
    if (only && !only.includes(mi)) return;
    const { packets } = loadRlg(md.rlg), kids = [];
    packets.forEach((pk, n) => {
      const tris = pk.prim === 1 ? stripTris(pk.idx) : (() => { const o = []; for (let i = 0; i + 2 < pk.idx.length; i += 3) o.push(pk.idx.slice(i, i + 3)); return o; })();
      if (!tris.length) return;
      const nv = pk.nv, attrs = { POSITION: addAcc(rot(pk.pos, nv), 3, 5126, 'VEC3', 34962, true) };
      if (pk.nrm) attrs.NORMAL = addAcc(rot(pk.nrm, nv, true), 3, 5126, 'VEC3', 34962);
      pk.uvs.forEach((uv, k) => { attrs['TEXCOORD_' + k] = addAcc(Float32Array.from(uv), 2, 5126, 'VEC2', 34962); });
      if (pk.col) attrs.COLOR_0 = addAcc(Uint8Array.from(pk.col), 4, 5121, 'VEC4', 34962, false, true);
      const ind = addAcc(nv > 65535 ? Uint32Array.from(tris.flat()) : Uint16Array.from(tris.flat()), 1, nv > 65535 ? 5125 : 5123, 'SCALAR', 34963);
      meshes.push({ name: `m${mi}_piece${String(n).padStart(3, '0')}`, primitives: [{ attributes: attrs, indices: ind, mode: 4, material: mat(pk.tex) }] });
      nodes.push({ name: meshes[meshes.length - 1].name, mesh: meshes.length - 1 }); kids.push(nodes.length - 1);
      stats.pieces++; stats.tris += tris.length; stats.verts += nv;
    });
    // the model's reference matrix (props: their pose in the prop's own space), Z up -> Y up
    nodes.push({ name: `model${mi}_${md.short || md.name}`, children: kids, extras: { model_id: hex8(md.id), model: md.name } });
    roots.push(nodes.length - 1); stats.models++;
  });
  nodes.push({ name: 'stadium', children: roots, matrix: [1, 0, 0, 0, 0, 0, -1, 0, 0, 1, 0, 0, 0, 0, 0, 1].map((x, i) => x) });
  // the root turns Z up into Y up; meshes above were already turned, so the root stays identity
  nodes[nodes.length - 1].matrix = undefined;
  const gltf = { asset: { version: '2.0', generator: 'Strikers Stadium Studio' }, scene: 0, scenes: [{ nodes: [nodes.length - 1] }], nodes, meshes, materials, accessors, bufferViews: views, buffers: [{ byteLength: 0 }] };
  if (images.length) Object.assign(gltf, { images, textures: glTex, samplers: [{ magFilter: 9729, minFilter: 9987, wrapS: 10497, wrapT: 10497 }] });
  const pad = (-blen) & 3; if (pad) { parts.push(new Uint8Array(pad)); blen += pad; }
  gltf.buffers[0].byteLength = blen; stats.textures = images.length;
  return { glb: writeGlb(gltf, concat(parts)), stats };
}

// gameworld.tmp with a new texture bundle (the 0x24100 chunk), every other chunk as it was
export function rebuildTmp(tmp, newTextures) {
  const [rootId, ro, rs] = walkLevel(tmp, 0, tmp.length)[0];
  const body = walkLevel(tmp, ro, ro + rs).map(([cid, o, sz]) => chunk(cid, cid === 0x24100 ? newTextures : tmp.subarray(o, o + sz)));
  return chunk(rootId, concat(body));
}

// The pitch, when it's tiles named <stadium>/fieldNN laid flat at z = 0 with u along x and v
// along -y (The Palace: 3 x 2 tiles): -> { tiles: [{ hash, name, col, row, flipX, flipY, w, h }], cols, rows }
export function findPitch(world, names) {
  const { packets } = loadRlg(world.models[0].rlg), tex = new Map(readTextures(world.textures).map((e) => [e.hash, e.blob]));
  const tiles = new Map();
  for (const pk of packets) {
    const nm = names.get(pk.tex) || '';
    if (!/\/field\d+$/i.test(nm) || !tex.has(pk.tex) || !pk.uvs.length) continue;
    const T = tiles.get(pk.tex) || { hash: pk.tex, name: nm, x0: 1e9, x1: -1e9, y0: 1e9, y1: -1e9, pts: [] };
    for (let i = 0; i < pk.nv; i++) { const x = pk.pos[3 * i], y = pk.pos[3 * i + 1]; T.x0 = Math.min(T.x0, x); T.x1 = Math.max(T.x1, x); T.y0 = Math.min(T.y0, y); T.y1 = Math.max(T.y1, y); T.pts.push([x, y, pk.uvs[0][2 * i], pk.uvs[0][2 * i + 1]]); }
    tiles.set(pk.tex, T);
  }
  if (tiles.size < 1) return null;
  const fit = (pts, k) => {   // least squares: value = a x + b y + c
    const S = [[0, 0, 0], [0, 0, 0], [0, 0, 0]], r = [0, 0, 0];
    for (const p of pts) { const a = [p[0], p[1], 1]; for (let i = 0; i < 3; i++) { r[i] += a[i] * p[k]; for (let j = 0; j < 3; j++) S[i][j] += a[i] * a[j]; } }
    const M = S.map((row, i) => [...row, r[i]]);
    for (let c = 0; c < 3; c++) { let p = c; for (let q = c + 1; q < 3; q++) if (Math.abs(M[q][c]) > Math.abs(M[p][c])) p = q; [M[c], M[p]] = [M[p], M[c]]; if (Math.abs(M[c][c]) < 1e-12) return null; for (let q = 0; q < 3; q++) if (q !== c) { const f = M[q][c] / M[c][c]; for (let j = c; j < 4; j++) M[q][j] -= f * M[c][j]; } }
    return [0, 1, 2].map((i) => M[i][3] / M[i][i]);
  };
  const list = [];
  for (const T of tiles.values()) {
    const u = fit(T.pts, 2), v = fit(T.pts, 3);
    if (!u || !v || Math.abs(u[1]) > Math.abs(u[0]) * 0.05 || Math.abs(v[0]) > Math.abs(v[1]) * 0.05) return null;   // not axis-aligned
    const h = decodeTex(tex.get(T.hash));
    list.push({ hash: T.hash, name: T.name, cx: (T.x0 + T.x1) / 2, cy: (T.y0 + T.y1) / 2, flipX: u[0] < 0, flipY: v[1] > 0, w: h.w, h: h.h });
  }
  const cluster = (vals) => { const s = [...vals].sort((a, b) => a - b), out = []; for (const x of s) if (!out.length || x - out[out.length - 1] > 1) out.push(x); return out; };
  const xs = cluster(list.map((t) => t.cx)), ys = cluster(list.map((t) => t.cy)).reverse();
  for (const t of list) { t.col = xs.findIndex((x) => Math.abs(x - t.cx) <= 1); t.row = ys.findIndex((y) => Math.abs(y - t.cy) <= 1); }
  const cols = xs.length, rows = ys.length;
  if (list.length !== cols * rows || list.some((t) => t.w !== list[0].w || t.h !== list[0].h)) return null;
  return { tiles: list, cols, rows, tw: list[0].w, th: list[0].h };
}
export function stitchPitch(pitch, getTex) {
  const W = pitch.cols * pitch.tw, H = pitch.rows * pitch.th, px = new Uint8ClampedArray(W * H * 4);
  for (const t of pitch.tiles) {
    const d = getTex(t.hash);
    for (let y = 0; y < pitch.th; y++) for (let x = 0; x < pitch.tw; x++) {
      const sx = t.flipX ? pitch.tw - 1 - x : x, sy = t.flipY ? pitch.th - 1 - y : y, s = (sy * pitch.tw + sx) * 4, o = ((t.row * pitch.th + y) * W + t.col * pitch.tw + x) * 4;
      px[o] = d.px[s]; px[o + 1] = d.px[s + 1]; px[o + 2] = d.px[s + 2]; px[o + 3] = d.px[s + 3];
    }
  }
  return { w: W, h: H, px };
}
export function splitPitch(pitch, img) {
  const out = new Map(), W = pitch.cols * pitch.tw;
  for (const t of pitch.tiles) {
    const px = new Uint8ClampedArray(pitch.tw * pitch.th * 4);
    for (let y = 0; y < pitch.th; y++) for (let x = 0; x < pitch.tw; x++) {
      const sx = t.flipX ? pitch.tw - 1 - x : x, sy = t.flipY ? pitch.th - 1 - y : y, o = (sy * pitch.tw + sx) * 4, s = ((t.row * pitch.th + y) * W + t.col * pitch.tw + x) * 4;
      px[o] = img.px[s]; px[o + 1] = img.px[s + 1]; px[o + 2] = img.px[s + 2]; px[o + 3] = img.px[s + 3];
    }
    out.set(t.hash, { w: pitch.tw, h: pitch.th, px });
  }
  return out;
}

// gameworld.res: the props' skeletons and their animations (names), and the scene's object count
export function parseRes(resZ) {
  const res = unpackZlib(resZ), rows = walk(res, 0, res.length);
  const skeletons = rows.filter((r) => r.id === 0x18002).map((r) => { let e = r.payload; while (e < r.payload + r.size && res[e]) e++; return new TextDecoder().decode(res.subarray(r.payload, e)); });
  const scene = rows.find((r) => r.id === 0x26000);
  const objects = scene ? be(res).getUint32(scene.payload) : 0;
  return { res, skeletons, objects };
}
