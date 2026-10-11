// A remodelled stadium from Blender (.glb) -> the stadium's model (model 0 in gameworld.tmp), its
// textures, and the object list entries (gameworld.res) that place its pieces.
//
// Pieces exported from Stadium Studio (named m0_pieceNNN) that come back where they were are kept
// exactly as the game had them (their shader, textures and all). Everything else is built new with
// the game's plain stadium shader ("stadiumdiffuse": one texture, the baked light in the vertex
// colours). Each new Blender object becomes one object of the model, placed by its own record.
import { be, chunks, concat, readTextures, nlHash, hex8, walkLevel, chunk, loadRlg, encodeCmpr, encodeTex, resizeBilinear } from './formats.js';
import { GLB, stripify } from './import.js';
import { parseScene, KIND, insertRecords } from './scene.js';
import { addTextures } from './propimport.js';

const SHADER_DIFFUSE = nlHash('stadiumdiffuse');            // 0x2169db5c
const PACKET_FLAGS = 0x000D0007;
const MAX_VERTS = 1500;                                      // the game's own pieces stay under ~1200
const SKY_HEIGHT = 230;                                        // The Palace's sky reaches 234 m, other stadiums' 300-600 m
export const SIZE_LIMIT = 3.55e6;                            // the biggest stadium the game ships (Crater Field, 3.53 MB)

const f32 = (dv, o, v) => dv.setFloat32(o, v);
class Buf { constructor() { this.parts = []; this.length = 0; } push(u8) { this.parts.push(u8); this.length += u8.length; return this.length - u8.length; } out() { return concat(this.parts); } }

// ------------------------------------------------------------------ read the .glb
function readGlb(u8) {
  const g = new GLB(u8), j = g.j, { world } = g.worldMatrices();
  const meshes = [];
  const scene = j.scenes ? j.scenes[j.scene || 0] : { nodes: (j.nodes || []).map((_, i) => i) };
  const visit = (ni) => {
    const nd = j.nodes[ni];
    if (nd.mesh != null) meshes.push({ node: ni, name: nd.name || (j.meshes[nd.mesh].name) || `mesh${ni}`, mesh: j.meshes[nd.mesh], M: world[ni] });
    for (const c of nd.children || []) visit(c);
  };
  for (const n of scene.nodes || []) visit(n);
  return { g, j, meshes };
}
// glTF (Y up) -> game (Z up): (x, y, z) -> (x, -z, y)
const toGame = (x, y, z) => [x, -z, y];

function primitives(G, mesh) {
  const out = [];
  for (const p of mesh.mesh.primitives) {
    if ((p.mode ?? 4) !== 4) continue;
    const A = p.attributes; if (A.POSITION == null) continue;
    const pos = G.acc(A.POSITION), n = pos.n, M = mesh.M;
    const P = new Float64Array(n * 3), N = new Float64Array(n * 3), C = new Float64Array(n * 4).fill(-1), UV = new Float64Array(n * 2);
    const nrm = A.NORMAL != null ? G.acc(A.NORMAL) : null, col = A.COLOR_0 != null ? G.acc(A.COLOR_0) : null, uv = A.TEXCOORD_0 != null ? G.acc(A.TEXCOORD_0) : null;
    for (let i = 0; i < n; i++) {
      const x = pos.data[3 * i], y = pos.data[3 * i + 1], z = pos.data[3 * i + 2];
      const wx = M[0] * x + M[1] * y + M[2] * z + M[3], wy = M[4] * x + M[5] * y + M[6] * z + M[7], wz = M[8] * x + M[9] * y + M[10] * z + M[11];
      P.set(toGame(wx, wy, wz), 3 * i);
      if (nrm) {
        const a = nrm.data[3 * i], b = nrm.data[3 * i + 1], c = nrm.data[3 * i + 2];
        let nx = M[0] * a + M[1] * b + M[2] * c, ny = M[4] * a + M[5] * b + M[6] * c, nz = M[8] * a + M[9] * b + M[10] * c;
        const l = Math.hypot(nx, ny, nz) || 1; N.set(toGame(nx / l, ny / l, nz / l), 3 * i);
      } else N.set([0, 0, 1], 3 * i);
      if (col) for (let k = 0; k < 4; k++) C[4 * i + k] = k < col.nc ? col.data[col.nc * i + k] : 1;
      if (uv) { UV[2 * i] = uv.data[2 * i]; UV[2 * i + 1] = uv.data[2 * i + 1]; }
    }
    let idx;
    if (p.indices != null) idx = Array.from(G.acc(p.indices).data); else idx = [...Array(n).keys()];
    // a mirrored (negative-scale) object turns its faces inside out
    const det = M[0] * (M[5] * M[10] - M[6] * M[9]) - M[1] * (M[4] * M[10] - M[6] * M[8]) + M[2] * (M[4] * M[9] - M[5] * M[8]);
    const tris = []; for (let i = 0; i + 2 < idx.length; i += 3) tris.push(det < 0 ? [idx[i], idx[i + 2], idx[i + 1]] : [idx[i], idx[i + 1], idx[i + 2]]);
    // merge vertices that come out the same in the game's formats (glTF files often repeat them)
    const key = new Map(), remap = new Int32Array(n);
    for (let i = 0; i < n; i++) {
      const k = [P[3 * i].toFixed(3), P[3 * i + 1].toFixed(3), P[3 * i + 2].toFixed(3), Math.round(N[3 * i] * 64), Math.round(N[3 * i + 1] * 64), Math.round(N[3 * i + 2] * 64),
        uv ? Math.round(UV[2 * i] * 1024) : 0, uv ? Math.round(UV[2 * i + 1] * 1024) : 0, col ? [0, 1, 2, 3].map((c) => Math.round(C[4 * i + c] * 255)).join(':') : ''].join(',');
      if (key.has(k)) remap[i] = key.get(k); else { key.set(k, i); remap[i] = i; }
    }
    const mtris = tris.map((t) => t.map((v) => remap[v])).filter(([a, b, c]) => a !== b && b !== c && a !== c);
    out.push({ P, N, C: col ? C : null, UV: uv ? UV : null, tris: mtris, material: p.material, n });
  }
  return out;
}

// ------------------------------------------------------------------ the original model
function original(model) {
  const t = model.rlg, ch = chunks(t), dv = be(t);
  const [po, ps] = ch.get(0x1B004)[0], [so] = ch.get(0x1B005)[0], [vo] = ch.get(0x1B006)[0], [io] = ch.get(0x1B007)[0], [mo, msz] = ch.get(0x1B016)[0];
  const n = ps / 0x30, pk = [];
  const offs = []; for (let p = 0; p < n; p++) offs.push(dv.getUint32(po + p * 0x30 + 32));
  const sorted = [...new Set(offs)].sort((a, b) => a - b), sizeOf = (o) => { const i = sorted.indexOf(o); return (i + 1 < sorted.length ? sorted[i + 1] : msz) - o; };
  const { packets } = loadRlg(t);
  for (let p = 0; p < n; p++) {
    const b = po + p * 0x30, head = t.slice(b, b + 0x30), ns = t[b + 11], stoff = dv.getUint32(b + 12), nv = dv.getUint16(b + 8);
    const ib = dv.getUint32(b), ni = dv.getUint32(b + 4);
    const streams = []; for (let s = 0; s < ns; s++) { const e = so + stoff + s * 8; streams.push({ addr: dv.getUint32(e), e4: t[e + 4], stride: t[e + 5], kind: t[e + 6], e7: t[e + 7] }); }
    const verts = streams.map((s) => t.slice(vo + s.addr, vo + s.addr + s.stride * nv));
    const idx = t.slice(io + ib, io + ib + 2 * ni), params = t.slice(mo + offs[p], mo + offs[p] + sizeOf(offs[p]));
    const P = packets[p].pos, mn = [Infinity, Infinity, Infinity], mx = [-Infinity, -Infinity, -Infinity];
    for (let i = 0; i < nv; i++) for (let k = 0; k < 3; k++) { mn[k] = Math.min(mn[k], P[3 * i + k]); mx[k] = Math.max(mx[k], P[3 * i + k]); }
    pk.push({ head, streams, verts, idx, params, nv, ni, mn, mx, pos: P, tex: be(params).getUint32(0) });
  }
  const objOf = []; model.objects.forEach((o, oi) => { for (let k = 0; k < o.count; k++) objOf.push(oi); });
  const ref = ch.get(0x1B002) ? t.slice(ch.get(0x1B002)[0][0], ch.get(0x1B002)[0][0] + ch.get(0x1B002)[0][1]) : null;
  return { pk, objOf, ref };
}

// ------------------------------------------------------------------ textures for new pieces
const pow2 = (v, max) => { let p = 8; while (p * 2 <= Math.min(v, max)) p *= 2; return p; };
function makeTexture(img, maxSize, soft) {
  let { w, h, px } = img; const W = pow2(w, maxSize), H = pow2(h, maxSize);
  if (W !== w || H !== h) { px = resizeBilinear(px, w, h, W, H); w = W; h = H; }
  let mips = 1, s = Math.min(w, h); while (s > 8) { s >>= 1; mips++; }
  const hdr = new Uint8Array(32), dv = be(hdr);
  if (soft) { dv.setUint32(4, 1); hdr.set([5, 5, 5, 3], 8); return encodeTex(px, w, h, hdr, mips); }          // RGB5A3: smooth see-through
  dv.setUint32(4, 2); hdr.set([5, 6, 5, 0], 8); return encodeCmpr(px, w, h, hdr, mips);                      // CMPR (on/off see-through)
}

// ------------------------------------------------------------------ main
// glb: Uint8Array; world: parseWorld() of the stadium; res: its decompressed gameworld.res;
// images: Map(glTF image index -> {w,h,px}) (decoded by the caller); names: hash -> name.
// opts: { stadium: 'thepalace', brightness: 'auto' | number, maxTexture: 512 }
export function importStadium({ glb, world, res, images, names, opts = {} }) {
  const stadium = opts.stadium || 'stadium', maxTex = opts.maxTexture || 512, notes = [];
  const { g, j, meshes } = readGlb(glb);
  // the records that place the old stadium's objects (a sky is placed by a "special" record with its own offset)
  const sc = parseScene(res, { get: (h) => names.get(h) }), dvr = be(res);
  const old0 = new Set(world.models[0].objects.map((o) => o.hash)), recOf = new Map();
  for (const r of sc.recs) if ((r.kind === KIND.PIECE || r.kind === KIND.SPECIAL) && r.end - r.off >= 104) { const h = dvr.getUint32(r.off + 100); if (old0.has(h) && !recOf.has(h)) recOf.set(h, r); }
  const skyRec = sc.recs.find((r) => r.kind === KIND.SPECIAL && r.end - r.off >= 104 && old0.has(dvr.getUint32(r.off + 100)));
  if (!meshes.length) throw new Error('No meshes in that .glb.');
  const orig = original(world.models[0]);
  const kept = new Set(), newPieces = [];
  // 1. kept pieces: m0_pieceNNN back where it was (to 2 cm)
  for (const m of meshes) {
    const k = /^m0_piece(\d+)/.exec(m.name || '');
    const prims = primitives(g, m);
    if (k && +k[1] < orig.pk.length) {
      const o = orig.pk[+k[1]], mn = [Infinity, Infinity, Infinity], mx = [-Infinity, -Infinity, -Infinity];
      for (const p of prims) for (let i = 0; i < p.n; i++) for (let c = 0; c < 3; c++) { mn[c] = Math.min(mn[c], p.P[3 * i + c]); mx[c] = Math.max(mx[c], p.P[3 * i + c]); }
      if (!opts.rebuildAll && prims.length && [0, 1, 2].every((c) => Math.abs(mn[c] - o.mn[c]) < 0.02 && Math.abs(mx[c] - o.mx[c]) < 0.02)) { kept.add(+k[1]); continue; }
    }
    if (prims.some((p) => p.tris.length)) newPieces.push({ name: m.name, prims, wasPiece: k ? +k[1] : null });
  }
  // 1b. objects the game finds by name for its own use (the goal nets, which bulge when a goal goes in) have no
  // piece record: they always stay exactly as they were, even if Blender changed or deleted them
  const locked = new Set(world.models[0].objects.map((o, oi) => (recOf.has(o.hash) ? -1 : oi)).filter((oi) => oi >= 0));
  let lockedChanged = 0;
  orig.pk.forEach((_, k) => { if (locked.has(orig.objOf[k])) { if (!kept.has(k)) lockedChanged++; kept.add(k); } });
  for (let i = newPieces.length - 1; i >= 0; i--) if (newPieces[i].wasPiece != null && locked.has(orig.objOf[newPieces[i].wasPiece])) newPieces.splice(i, 1);
  if (lockedChanged && !opts.rebuildAll) notes.push(`The goal nets (and other pieces the game moves itself) stay as the game had them: ${lockedChanged} changed or missing part(s) were put back.`);
  // the flags the game's own pieces use with each of its textures (stadiumdiffuse words 4..8)
  const flagsOf = new Map();
  { const count = new Map();
    for (const o of orig.pk) {
      if (be(o.head).getUint32(16) !== SHADER_DIFFUSE || o.params.length !== 36) continue;
      const key = Array.from({ length: 5 }, (_, q) => be(o.params).getUint32(16 + 4 * q)).join(','), tex = o.tex;
      if (!count.has(tex)) count.set(tex, new Map());
      count.get(tex).set(key, (count.get(tex).get(key) || 0) + 1);
    }
    for (const [tex, m] of count) flagsOf.set(tex, [...m].sort((a, b) => b[1] - a[1])[0][0].split(',').map(Number));
  }
  // 2. brightness of the new pieces' baked light: Sports Mix (and most Wii games) store half brightness
  let bright = opts.brightness ?? 'auto';
  if (bright === 'auto') {
    const lum = []; for (const np of newPieces) for (const p of np.prims) if (p.C) for (let i = 0; i < p.n; i += 7) lum.push((p.C[4 * i] + p.C[4 * i + 1] + p.C[4 * i + 2]) / 3);
    lum.sort((a, b) => a - b); const med = lum.length ? lum[lum.length >> 1] : 1;
    bright = med < 0.56 ? 2 : 1;
    if (lum.length) notes.push(`Baked light: the new pieces' vertex colours are ${bright === 2 ? 'at half brightness (as Wii games store them), so they are doubled' : 'used as they are'}.`);
  }
  // 3. materials -> texture + flags
  const mats = j.materials || [], texOf = new Map(), newTex = new Map(), byName = new Map();
  for (const [h, n] of names) if (n.startsWith('_' + stadium + '/')) byName.set(n, h);
  const existing = new Map(readTextures(world.textures).map((e) => [e.hash, e.blob]));
  const material = (mi) => {
    if (texOf.has(mi)) return texOf.get(mi);
    const m = mi != null ? mats[mi] : null, mode = m ? m.alphaMode || 'OPAQUE' : 'OPAQUE', name = (m && m.name) || 'untextured';
    let hash = null;
    // the game's own texture, by name (materials exported by Stadium Studio are named after them)
    const base = name.replace(/\.\d{3}$/, '');
    if (byName.has(base) && existing.has(byName.get(base))) hash = byName.get(base);
    const ti = m && m.pbrMetallicRoughness && m.pbrMetallicRoughness.baseColorTexture ? m.pbrMetallicRoughness.baseColorTexture.index : null;
    if (hash == null && ti != null && j.textures[ti] && images.has(j.textures[ti].source)) {
      const src = j.textures[ti].source, key = `${src}/${mode}`;
      const imgName = (j.images[src].name || `image${src}`).replace(/[^A-Za-z0-9_.-]+/g, '_');
      hash = nlHash(`_${stadium}/new_${imgName}${mode === 'BLEND' ? '_a' : ''}`);
      if (!newTex.has(hash)) {
        let img = images.get(src);
        if (mode === 'OPAQUE') { const px = new Uint8ClampedArray(img.px); for (let i = 3; i < px.length; i += 4) px[i] = 255; img = { ...img, px }; }
        newTex.set(hash, { blob: makeTexture(img, maxTex, mode === 'BLEND'), name: `_${stadium}/new_${imgName}`, key });
      }
    }
    if (hash == null) {   // no picture: a plain white one
      hash = nlHash(`_${stadium}/new_white`);
      if (!newTex.has(hash) && !existing.has(hash)) newTex.set(hash, { blob: makeTexture({ w: 8, h: 8, px: new Uint8ClampedArray(256).fill(255) }, 8, false), name: `_${stadium}/new_white` });
    }
    // a game texture keeps the flags the game uses with it; a new one: plain (word 4 for see-through, word 6 as most pieces).
    // (word 5 marks the game's own pitch tiles, drawn from a picture the game makes during the match: never for new ones)
    const flags = flagsOf.get(hash) || [mode === 'BLEND' ? 1 : 0, 0, 1, 0, 0];
    const r = { hash, blend: mode === 'BLEND', flags, name, double: !!(m && m.doubleSided) && mode !== 'OPAQUE', matHash: nlHash(name) };
    texOf.set(mi, r); return r;
  };
  // 3b. a sky from another game can be too low for this game's match camera, which looks down from high up and
  // would see the dome from outside (covering the whole stadium): raise it to the height of the game's own skies
  const isSky = (np) => np.wasPiece == null && skyRec && /sky/i.test(np.name || '');
  { let top = -Infinity; for (const np of newPieces) if (isSky(np)) for (const p of np.prims) for (let i = 0; i < p.n; i++) top = Math.max(top, p.P[3 * i + 2]);
    if (top > 1 && top < SKY_HEIGHT) {
      const k = SKY_HEIGHT / top;
      for (const np of newPieces) if (isSky(np)) np.prims = np.prims.map((p) => { const P = Float32Array.from(p.P); for (let i = 0; i < p.n; i++) P[3 * i + 2] *= k; return { ...p, P }; });
      notes.push(`The sky was only ${top.toFixed(0)} m high, so it is stretched to ${SKY_HEIGHT} m (the match camera would see over it).`);
    } }
  // 4. build new packets: per Blender object, per material, chunks of <= MAX_VERTS vertices
  const built = [];   // { object: index into newObjects, ... }
  const newObjects = [];
  for (const np of newPieces) {
    const objIdx = newObjects.length, packets = [];
    for (const p of np.prims) {
      if (!p.tris.length) continue;
      const mt = material(p.material);
      let tris = p.tris; if (mt.double) tris = tris.concat(p.tris.map(([a, b, c]) => [a, c, b]));
      // split into groups of triangles using at most MAX_VERTS vertices
      let i = 0;
      while (i < tris.length) {
        const map = new Map(), local = [];
        while (i < tris.length) {
          const t = tris[i], add = t.filter((v) => !map.has(v)).length;
          if (map.size + add > MAX_VERTS) break;
          local.push(t.map((v) => { if (!map.has(v)) map.set(v, map.size); return map.get(v); })); i++;
        }
        const verts = [...map.keys()];
        packets.push({ verts, local, p, mt });
      }
    }
    // placed like the old object it came from (a piece moved or edited), or like the sky if it's named so
    // (exported pieces are in the model's own space, so they keep no offset; a new sky is where Blender has it)
    let template = null, offset = false;
    if (np.wasPiece != null) template = recOf.get(world.models[0].objects[orig.objOf[np.wasPiece]].hash) || null;
    else if (isSky(np)) { template = skyRec; offset = true; }
    if (packets.length) newObjects.push({ name: np.name, packets, template, offset });
  }
  // 5. write the model
  const V = new Buf(), I = new Buf(), S = new Buf(), Pm = new Buf(), Pk = [], objects = [];
  const emitKept = (o) => {
    const head = o.head.slice(), hv = be(head), base = [];
    for (let s = 0; s < o.streams.length; s++) base.push(V.push(o.verts[s]));
    const st = new Uint8Array(8 * o.streams.length), sv = be(st);
    o.streams.forEach((s, k) => { sv.setUint32(8 * k, base[k]); st[8 * k + 4] = s.e4; st[8 * k + 5] = s.stride; st[8 * k + 6] = s.kind; st[8 * k + 7] = s.e7; });
    hv.setUint32(12, S.push(st)); hv.setUint32(0, I.push(o.idx)); hv.setUint32(32, Pm.push(o.params));
    Pk.push(head);
  };
  // kept pieces, in their original objects (object hashes stay, so their records stay valid)
  const keptObjects = new Map();
  world.models[0].objects.forEach((ob, oi) => {
    const list = []; for (let k = ob.first; k < ob.first + ob.count; k++) if (kept.has(k)) list.push(k);
    if (list.length) keptObjects.set(ob.hash, { hash: ob.hash, packets: list });
  });
  for (const [h, ob] of keptObjects) { const first = Pk.length; for (const k of ob.packets) emitKept(orig.pk[k]); objects.push({ hash: h, first, count: ob.packets.length, kept: true }); }
  // new pieces
  let tris = 0, verts = 0;
  const usedNames = new Set(world.models[0].objects.map((o) => o.hash));
  newObjects.forEach((ob, n) => {
    let oname = `_${stadium}/newpiece${String(n + 1).padStart(3, '0')}`; while (usedNames.has(nlHash(oname))) oname += '_';
    usedNames.add(nlHash(oname));
    const first = Pk.length, mn = [Infinity, Infinity, Infinity], mx = [-Infinity, -Infinity, -Infinity]; let radius = 0;
    const off = ob.template && ob.offset ? ob.template.m.slice(12, 15) : [0, 0, 0];   // vertices are relative to their record's position
    for (const pc of ob.packets) {
      const { p, mt, verts: vs, local } = pc, nv = vs.length;
      const pos = new Uint8Array(12 * nv), nrm = new Uint8Array(3 * nv), uv = new Uint8Array(4 * nv), col = new Uint8Array(4 * nv);
      const pdv = be(pos), udv = be(uv), ndv = be(nrm);
      // texture coordinates as s16/1024 (+-32): move each piece's into range by whole repeats
      let u0 = 0, v0 = 0;
      if (p.UV) { let mu = Infinity, mv = Infinity; for (const v of vs) { mu = Math.min(mu, p.UV[2 * v]); mv = Math.min(mv, p.UV[2 * v + 1]); } u0 = Math.floor(mu); v0 = Math.floor(mv); if (u0 > -16 && u0 < 0) u0 = 0; if (v0 > -16 && v0 < 0) v0 = 0; }
      vs.forEach((v, i) => {
        const x = p.P[3 * v] - off[0], y = p.P[3 * v + 1] - off[1], z = p.P[3 * v + 2] - off[2];
        f32(pdv, 12 * i, x); f32(pdv, 12 * i + 4, y); f32(pdv, 12 * i + 8, z);
        const q = [x, y, z]; for (let c = 0; c < 3; c++) { mn[c] = Math.min(mn[c], q[c]); mx[c] = Math.max(mx[c], q[c]); }
        radius = Math.max(radius, Math.hypot(x, y, z));
        for (let c = 0; c < 3; c++) ndv.setInt8(3 * i + c, Math.max(-64, Math.min(64, Math.round(p.N[3 * v + c] * 64))));
        const cu = p.UV ? p.UV[2 * v] - u0 : 0, cv = p.UV ? p.UV[2 * v + 1] - v0 : 0;
        udv.setInt16(4 * i, Math.max(-32768, Math.min(32767, Math.round(cu * 1024)))); udv.setInt16(4 * i + 2, Math.max(-32768, Math.min(32767, Math.round(cv * 1024))));
        for (let c = 0; c < 4; c++) {
          let val = p.C ? p.C[4 * v + c] : 1; if (c < 3) val *= bright;
          col[4 * i + c] = Math.max(0, Math.min(255, Math.round(val * 255)));
        }
      });
      const strip = stripify(local, nv > 600 ? 1 : 3);
      const ib = new Uint8Array(2 * strip.length), idv = be(ib); strip.forEach((x, k) => idv.setUint16(2 * k, x));
      const st = new Uint8Array(32), sv = be(st);
      const addrs = [V.push(pos), V.push(nrm), V.push(uv), V.push(col)];
      [[103, 12, 1], [254, 3, 2], [38, 4, 4], [182, 4, 3]].forEach(([e4, stride, kind], k) => { sv.setUint32(8 * k, addrs[k]); st[8 * k + 4] = e4; st[8 * k + 5] = stride; st[8 * k + 6] = kind; });
      const params = new Uint8Array(36), mv = be(params);
      mv.setUint32(0, mt.hash); mv.setUint32(4, 0xFFFF0000);
      mt.flags.forEach((f, q) => mv.setUint32(16 + 4 * q, f));
      const head = new Uint8Array(0x30), hv = be(head);
      hv.setUint32(0, I.push(ib)); hv.setUint32(4, strip.length); hv.setUint16(8, nv); head[10] = 1; head[11] = 4;
      hv.setUint32(12, S.push(st)); hv.setUint32(16, SHADER_DIFFUSE); hv.setUint32(20, mt.matHash); hv.setUint32(24, 0); hv.setUint32(28, PACKET_FLAGS); hv.setUint32(32, Pm.push(params));
      Pk.push(head); tris += local.length; verts += nv;
    }
    objects.push({ hash: nlHash(oname), name: oname, first, count: ob.packets.length, mn, mx, radius, source: ob.name, template: ob.template });
  });
  if (!objects.length) throw new Error('Nothing left to draw: the .glb has no pieces.');
  // chunks, in the game's order: params, indices, vertices, streams, packets, reference matrices, objects
  const pad4 = (u8) => { if (!(u8.length & 3)) return u8; const o = new Uint8Array((u8.length + 3) & ~3); o.set(u8); return o; };
  const objList = new Uint8Array(12 * objects.length), ov = be(objList);
  objects.forEach((o, k) => { ov.setUint32(12 * k, o.hash); ov.setUint32(12 * k + 4, o.count); ov.setUint32(12 * k + 8, 0x0012FB18); });
  const body = [
    chunk(0x1B016, Pm.out()), chunk(0x1B007, I.out()), chunk(0x1B006, V.out()), chunk(0x1B005, S.out()), chunk(0x1B004, concat(Pk)),
    ...(orig.ref ? [chunk(0x1B002, orig.ref)] : []), chunk(0x1B003, objList),
  ].map(pad4);
  const rlg = chunk(0x8001B000, concat(body));
  // 6. textures: drop the stadium's own pictures that only its old pieces used; add the new ones
  const usedBy = (pkList) => { const s = new Set(); for (const params of pkList) { const dv = be(params); for (let o = 0; o + 4 <= params.length; o += 4) s.add(dv.getUint32(o)); } return s; };
  const oldModel0 = usedBy(orig.pk.map((o) => o.params));
  const nowUsed = usedBy([...Pm.parts]);
  for (let mi = 1; mi < world.models.length; mi++) { const t = world.models[mi].rlg, ch = chunks(t); if (ch.has(0x1B016)) { const [o, sz] = ch.get(0x1B016)[0]; for (const h of usedBy([t.subarray(o, o + sz)])) nowUsed.add(h); } }
  const ifl = (blob) => blob.length >= 36 && blob[0] === 0x5f && blob[1] === 0x6c && blob[2] === 0x66 && blob[3] === 0x69;
  for (const [h, b] of existing) if (nowUsed.has(h) && ifl(b)) { const dv = be(b); for (let f = 0; f < dv.getUint32(8); f++) nowUsed.add(dv.getUint32(36 + 8 * f)); }
  const drop = new Set([...existing.keys()].filter((h) => oldModel0.has(h) && !nowUsed.has(h)));
  let bundle = dropTextures(world.textures, drop);
  bundle = addTextures(bundle, new Map([...newTex].map(([h, t]) => [h, t.blob])));
  // 7. the new gameworld.tmp: model 0 and the texture list replaced
  const tmp = rebuild(world.tmp, rlg, bundle);
  // 8. the object list: records of objects that are gone come out, new objects get a record
  const keep0 = new Set(objects.filter((o) => o.kept).map((o) => o.hash));
  const placed = sc.recs.filter((r) => (r.kind === KIND.PIECE || r.kind === KIND.SPECIAL) && r.end - r.off >= 104 && old0.has(dvr.getUint32(r.off + 100)));
  const gone = placed.filter((r) => !keep0.has(dvr.getUint32(r.off + 100)));
  const template = placed.find((r) => r.kind === KIND.PIECE && r.end - r.off === 144) || placed[0];
  if (!template) throw new Error("This stadium's object list has no stadium pieces to copy.");
  let res2 = removeRecs(res, sc, gone.map((r) => r.i));
  const sc2 = parseScene(res2, { get: (h) => names.get(h) });
  const parts = objects.filter((o) => !o.kept).map((o, k) => {
    const tp = o.template || template, b = res.slice(tp.off, tp.end), dv = be(b);
    dv.setUint32(4, nlHash(`newpiece${String(k + 1).padStart(3, '0')}_${stadium}`));
    if (!o.template) {
      for (let q = 0; q < 16; q++) dv.setFloat32(32 + 4 * q, q % 5 === 0 ? 1 : 0);
      // the record is the piece's object in the game's memory: +136 its flags (0x10 = only shown in replays and
      // cut-scenes, for stand pieces in front of the match camera), +140 how see-through it is (1 = solid)
      if (b.length >= 144) { dv.setUint32(136, 0); f32(dv, 140, 1); }
    }
    f32(dv, 96, o.radius); dv.setUint32(100, o.hash); dv.setUint32(104, 0); dv.setUint32(108, 0);
    [...o.mn, ...o.mx].forEach((v, c) => f32(dv, 112 + 4 * c, v));
    return b;
  });
  if (parts.length) res2 = insertRecords(res2, sc2, parts, parts.length);
  const kc = [...kept].length;
  const stats = { keptPieces: kc, newObjects: newObjects.length, newPackets: Pk.length - kc, tris, verts, newTextures: newTex.size, droppedTextures: drop.size, removedRecords: gone.length, tmpSize: tmp.length, modelSize: rlg.length, textureSize: bundle.length, brightness: bright };
  if (tmp.length > SIZE_LIMIT) notes.push(`The stadium is ${(tmp.length / 1e6).toFixed(2)} MB; the biggest the game ships is 3.53 MB. It may not fit in the game's memory: use smaller textures or fewer pieces.`);
  return { tmp, res: res2, stats, notes, objects, newTextureNames: [...newTex].map(([h, t]) => [h, t.name]) };
}

function dropTextures(orlt, drop) {
  if (!drop.size) return orlt;
  const ent = readTextures(orlt).filter((e) => !drop.has(e.hash));
  const head = orlt.slice(0, 16), dv = be(head); dv.setUint32(4, 0);
  const empty = concat([head]);
  return addTextures(empty, new Map(ent.sort((a, b) => a.blob.byteOffset - b.blob.byteOffset).map((e) => [e.hash, e.blob])));
}
function rebuild(tmp, rlg0, bundle) {
  const [rootId, ro, rs] = walkLevel(tmp, 0, tmp.length)[0];
  const body = walkLevel(tmp, ro, ro + rs).map(([cid, o, sz]) => {
    if (cid === 0x24100) return chunk(cid, bundle);
    if (cid === 0x8001B100) {
      const kids = walkLevel(tmp, o, o + sz).map(([k, ko, ksz], n) => (n === 0 ? rlg0 : chunk(k, tmp.subarray(ko, ko + ksz))));
      return chunk(cid, concat(kids.map((u8) => { if (!(u8.length & 3)) return u8; const x = new Uint8Array((u8.length + 3) & ~3); x.set(u8); return x; })));
    }
    return chunk(cid, tmp.subarray(o, o + sz));
  });
  return chunk(rootId, concat(body));
}
function removeRecs(res, sc, idxs) {
  if (!idxs.length) return res;
  const set = new Set(idxs), keepParts = []; let removed = 0, count = 0;
  const { loc } = sc;
  let pos = loc.start + 16; const head = res.subarray(0, loc.start + 16);
  const out = [head];
  for (const r of sc.recs) { if (set.has(r.i)) { removed += r.end - r.off; count++; continue; } out.push(res.subarray(r.off, r.end)); }
  out.push(res.subarray(loc.end));
  const o = concat(out), dv = be(o);
  // anything between the header and the first record (none in the game's files) is dropped with the records' layout
  dv.setUint32(loc.start, sc.count - count);
  dv.setUint32(loc.idOff + 4, dv.getUint32(loc.idOff + 4) - removed);
  dv.setUint32(4, dv.getUint32(4) - removed);
  if (o.length !== res.length - removed) throw new Error('object list layout not understood');
  return o;
}
