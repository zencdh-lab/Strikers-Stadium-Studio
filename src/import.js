// A rigged GLB (exported by this app or rlg2glb.py, edited in Blender or any glTF tool) back into
// the game's .rlg (mesh, weights, face shapes) and .rlt (textures). The original model is the
// template: its skeleton, its pieces' materials and its face-shape slots are kept.
// A port of scripts/modkit/glb2rlg.py, which was tested in game.
import { chunks, walkLevel, chunk, concat, readTextures, texHeader, decodeTex, encodeCmpr, encodeTex, decodePng, resizeBilinear, nlHash, lowerHash, hex8, be, stripTris } from './formats.js';

export const MAX_BONES = 9, MAX_INFL = 3;
const canon = (t) => { const k = t.indexOf(Math.min(...t)); return [...t.slice(k), ...t.slice(0, k)]; };
const triKey = (t) => canon(t).join(',');

// ------------------------------------------------------------------ triangle strips
function triSet(strip, startParity = 0) {
  const out = [];
  for (let i = 0; i + 2 < strip.length; i++) {
    const a = strip[i], b = strip[i + 1], c = strip[i + 2];
    if (a !== b && b !== c && a !== c) out.push(triKey((i + startParity) % 2 === 0 ? [a, b, c] : [b, a, c]));
  }
  return out.sort().join('|');
}
function rng(seed) { let s = seed >>> 0; return () => { s = (s + 0x6D2B79F5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
function stripifyOnce(tris, rand) {
  // greedy: start at a triangle with the fewest free neighbours (near where the last strip ended),
  // take the longest run, join it on as cheaply as it goes
  const K = (p, q) => p * 65536 + q, edge = new Map();
  tris.forEach(([a, b, c], n) => { for (const k of [K(a, b), K(b, c), K(c, a)]) { const l = edge.get(k); if (l) l.push(n); else edge.set(k, [n]); } });
  const used = new Uint8Array(tris.length);
  const take = (p, q) => { const l = edge.get(K(p, q)); if (l) for (const n of l) if (!used[n]) return n; return -1; };
  const third = (m, p, q) => { const t = tris[m]; return t[0] !== p && t[0] !== q ? t[0] : t[1] !== p && t[1] !== q ? t[1] : t[2]; };
  function run(n, rot, commit) {
    const t = tris[n], fwd = [t[rot], t[(rot + 1) % 3], t[(rot + 2) % 3]], back = [], got = [n]; used[n] = 1;
    for (;;) {
      const p = fwd[fwd.length - 2], q = fwd[fwd.length - 1];
      const m = fwd.length % 2 ? take(q, p) : take(p, q);
      if (m < 0) break; fwd.push(third(m, p, q)); got.push(m); used[m] = 1;
    }
    let par = 0;
    for (;;) {
      const p = back.length ? back[back.length - 1] : fwd[0], q = back.length > 1 ? back[back.length - 2] : back.length ? fwd[0] : fwd[1];
      const m = par ? take(p, q) : take(q, p);
      if (m < 0) break; back.push(third(m, p, q)); got.push(m); used[m] = 1; par ^= 1;
    }
    if (!commit) for (const m of got) used[m] = 0;
    return { seq: back.reverse().concat(fwd), par, got };
  }
  const free = (n) => { const t = tris[n]; return (take(t[1], t[0]) >= 0) + (take(t[2], t[1]) >= 0) + (take(t[0], t[2]) >= 0); };
  const degenerate = (a, b, c) => a === b || b === c || a === c;
  function joinCost(out, seq, par) {
    // the shortest bridge between out and seq (valid from parity par): its extra indices, or null
    if (!out.length) return par === 0 ? [] : null;
    const last = out[out.length - 1], prev = out.length > 1 ? out[out.length - 2] : null;
    const bridges = [[last, seq[0]]]; if (seq[0] === last) bridges.push([last], []);
    let best = null;
    for (const bridge of bridges) for (const pad of [[], [seq[0]]]) {
      const start = out.length + bridge.length + pad.length;
      if ((start - par) % 2 !== 0) continue;
      const mid = bridge.concat(pad), win = (prev !== null ? [prev] : []).concat([last], mid, seq.slice(0, 2));
      let ok = true;
      // every window that starts before seq does must be degenerate
      const first = prev !== null ? 0 : 0, nwin = (prev !== null ? 1 : 0) + 1 + mid.length;
      for (let i = first; i < nwin && ok; i++) if (i + 2 < win.length && !degenerate(win[i], win[i + 1], win[i + 2])) ok = false;
      if (ok && (!best || mid.length < best.length)) best = mid;
    }
    return best;
  }
  const out = []; const left = new Set(tris.map((t, i) => i));
  while (left.size) {
    const last = out.length ? out[out.length - 1] : null;
    let bestF = 9, pool = [];
    for (const m of left) { const f = free(m); if (f < bestF) { bestF = f; pool = [m]; } else if (f === bestF) pool.push(m); }
    pool.sort((a, b) => a - b);
    if (last !== null) { const near = pool.filter((m) => tris[m].includes(last)); if (near.length) pool = near; }
    pool = pool.slice(0, 8);
    const n = rand ? pool[Math.floor(rand() * pool.length)] : pool[0];
    let bestC = null;
    for (let r = 0; r < 3; r++) {
      const { seq, par, got } = run(n, r, false);
      // reversed, a run is valid from parity (par + length) % 2
      for (const [sq, pr] of [[seq, par], [seq.slice().reverse(), (par + seq.length) % 2]]) {
        const mid = joinCost(out, sq, pr);
        if (mid) { const c = [-got.length, mid.length, r, sq, mid]; if (!bestC || c[0] < bestC[0] || (c[0] === bestC[0] && c[1] < bestC[1])) bestC = c; }
      }
    }
    const { got } = run(n, bestC[2], true);
    for (const x of bestC[4]) out.push(x); for (const x of bestC[3]) out.push(x);
    for (const m of got) left.delete(m);
  }
  return out;
}
export function stripify(tris, tries = 6) {
  tris = tris.filter((t) => new Set(t).size === 3);
  let best = stripifyOnce(tris, null);
  if (tris.length > 2) for (let k = 0; k < tries; k++) { const s = stripifyOnce(tris, rng(k + 1)); if (s.length < best.length) best = s; }
  if (triSet(best) !== tris.map(triKey).sort().join('|')) throw new Error('strip check failed');
  return best;
}

// ------------------------------------------------------------------ GLB reading
export class GLB {
  constructor(u8) {
    const dv = new DataView(u8.buffer, u8.byteOffset, u8.byteLength);
    if (dv.getUint32(0, true) !== 0x46546C67) throw new Error('Not a .glb file: in Blender, export as glTF Binary (.glb).');
    let o = 12; this.bin = new Uint8Array(0);
    while (o < u8.length) {
      const n = dv.getUint32(o, true), t = dv.getUint32(o + 4, true);
      if (t === 0x4E4F534A) this.j = JSON.parse(new TextDecoder().decode(u8.subarray(o + 8, o + 8 + n)));
      else if (t === 0x004E4942) this.bin = u8.subarray(o + 8, o + 8 + n);
      o += 8 + n;
    }
  }
  view(i) { const v = this.j.bufferViews[i], o = v.byteOffset || 0; return { raw: this.bin.subarray(o, o + v.byteLength), stride: v.byteStride }; }
  acc(i) {
    const a = this.j.accessors[i];
    const T = { 5120: Int8Array, 5121: Uint8Array, 5122: Int16Array, 5123: Uint16Array, 5125: Uint32Array, 5126: Float32Array }[a.componentType];
    const nc = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT4: 16 }[a.type], n = a.count, isz = T.BYTES_PER_ELEMENT;
    const out = new Float64Array(n * nc);
    const rd = (raw, off, k) => { const dv = new DataView(raw.buffer, raw.byteOffset + off, isz); switch (a.componentType) { case 5120: return dv.getInt8(0); case 5121: return dv.getUint8(0); case 5122: return dv.getInt16(0, true); case 5123: return dv.getUint16(0, true); case 5125: return dv.getUint32(0, true); default: return dv.getFloat32(0, true); } };
    if (a.bufferView !== undefined) {
      const { raw, stride } = this.view(a.bufferView), st = stride || isz * nc, off = a.byteOffset || 0;
      for (let k = 0; k < n; k++) for (let c = 0; c < nc; c++) out[k * nc + c] = rd(raw, off + k * st + c * isz);
    }
    if (a.sparse) {
      const s = a.sparse, c = s.count, it = s.indices.componentType, isz2 = { 5121: 1, 5123: 2, 5125: 4 }[it];
      const ir = this.view(s.indices.bufferView).raw, io = s.indices.byteOffset || 0, vr = this.view(s.values.bufferView).raw, vo = s.values.byteOffset || 0;
      const idv = new DataView(ir.buffer, ir.byteOffset, ir.byteLength);
      for (let k = 0; k < c; k++) {
        const ix = isz2 === 1 ? idv.getUint8(io + k) : isz2 === 2 ? idv.getUint16(io + 2 * k, true) : idv.getUint32(io + 4 * k, true);
        for (let q = 0; q < nc; q++) out[ix * nc + q] = rd(vr, vo + (k * nc + q) * isz);
      }
    }
    if (a.normalized) { const d = { 5121: 255, 5123: 65535, 5120: 127, 5122: 32767 }[a.componentType]; for (let k = 0; k < out.length; k++) out[k] /= d; }
    return { data: out, n, nc };
  }
  worldMatrices() {
    // column vectors, row-major storage (M[r*4+c])
    const nodes = this.j.nodes || [], local = nodes.map((nd) => {
      if (nd.matrix) { const m = nd.matrix, o = new Float64Array(16); for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) o[r * 4 + c] = m[c * 4 + r]; return o; }
      const [tx, ty, tz] = nd.translation || [0, 0, 0], [x, y, z, w] = nd.rotation || [0, 0, 0, 1], [sx, sy, sz] = nd.scale || [1, 1, 1];
      return Float64Array.from([
        (1 - 2 * (y * y + z * z)) * sx, (2 * (x * y - z * w)) * sy, (2 * (x * z + y * w)) * sz, tx,
        (2 * (x * y + z * w)) * sx, (1 - 2 * (x * x + z * z)) * sy, (2 * (y * z - x * w)) * sz, ty,
        (2 * (x * z - y * w)) * sx, (2 * (y * z + x * w)) * sy, (1 - 2 * (x * x + y * y)) * sz, tz, 0, 0, 0, 1]);
    });
    const parent = new Map(); nodes.forEach((nd, i) => (nd.children || []).forEach((c) => parent.set(c, i)));
    const world = new Array(nodes.length).fill(null);
    const mm = (a, b) => { const o = new Float64Array(16); for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) { let s = 0; for (let k = 0; k < 4; k++) s += a[i * 4 + k] * b[k * 4 + j]; o[i * 4 + j] = s; } return o; };
    const get = (i) => { if (!world[i]) world[i] = parent.has(i) ? mm(get(parent.get(i)), local[i]) : local[i]; return world[i]; };
    nodes.forEach((n, i) => get(i));
    return { world, parent, mm };
  }
}
const baseName = (s) => (s || '').replace(/\.\d{3}$/, '');

// ------------------------------------------------------------------ the original model
function loadOriginal(t) {
  const ch = chunks(t), dv = be(t);
  const [po, ps] = ch.get(0x1B004)[0], [so] = ch.get(0x1B005)[0], [pdo] = ch.get(0x1B016)[0];
  const pks = [];
  for (let p = 0; p < ps / 0x30; p++) {
    const b = po + p * 0x30, f = [dv.getUint32(b), dv.getUint32(b + 4), dv.getUint16(b + 8), t[b + 10], t[b + 11]];
    for (let k = 0; k < 9; k++) f.push(dv.getUint32(b + 12 + 4 * k));
    const streams = []; for (let s = 0; s < f[4]; s++) { const e = so + f[5] + s * 8; streams.push([dv.getUint32(e), t[e + 4], t[e + 5], t[e + 6], t[e + 7]]); }
    const params = t.slice(pdo + f[10], pdo + f[10] + 104);
    pks.push({ f, streams, params, tex: be(params).getUint32(0) });
  }
  const [bo, bs] = ch.get(0x1B00A)[0], bind = new Map();
  for (let i = 0; i < bs / 0x44; i++) bind.set(dv.getUint32(bo + i * 0x44), i);
  let morphIds = [];
  if (ch.has(0x1B00C)) { const [o] = ch.get(0x1B00C)[0], nm = dv.getUint32(o); for (let i = 0; i < nm; i++) morphIds.push(dv.getUint32(o + 4 + 4 * i)); }
  const maps = (ch.get(0x1B00B) || []).reduce((s, [o, sz]) => s + sz / 4, 0);
  return { ch, pks, bind, morphIds, maps };
}

// ------------------------------------------------------------------ main
// glb, rlg, rlt: Uint8Array. decodeImage(bytes, mime) -> {w,h,px} for non-PNG pictures (optional).
// Returns { rlg, rlt, report, notes, reencoded, over, stats }.
// teamBundles: Map(name -> .rlt) of kits the game swaps in per team; a repainted kit goes there.
export function importGlb({ glb, rlg: t, rlt: orlt, modelName = 'model', decodeImage = null, onProgress = () => {}, teamBundles = new Map() }) {
  const { ch, pks: opks, bind, morphIds, maps: tMaps } = loadOriginal(t);
  const g = new GLB(glb), j = g.j, { world, parent, mm } = g.worldMatrices(), nodes = j.nodes || [];
  const notes = [];
  const isHex = (s) => /^[0-9a-fA-F]{8}$/.test(s);
  const hashOf = (name) => {
    name = baseName(name);
    const c = [nlHash(name), lowerHash(name), nlHash(name.replace(/_/g, ' ')), lowerHash(name.replace(/_/g, ' '))];
    if (isHex(name)) c.unshift(parseInt(name, 16));
    for (const h of c) if (bind.has(h)) return h;
    return null;
  };
  const otex = readTextures(orlt), tex = new Map(otex.map((e) => [e.hash, e.blob])), order = otex.map((e) => e.hash);
  const matHash = (m) => {
    const nm = baseName(m.name || ''), ex = (m.extras || {}).texture_hash;
    const c = (ex ? [parseInt(ex, 16)] : []).concat([nlHash(nm), lowerHash(nm)], isHex(nm) ? [parseInt(nm, 16)] : []);
    for (const h of c) if (opks.some((p) => p.tex === h) || tex.has(h)) return h;
    return null;
  };

  const teamTex = new Map();   // hash -> bundle name
  for (const [bn, b] of teamBundles) for (const e of readTextures(b)) teamTex.set(e.hash, bn);
  const teamHash = (m) => {
    const nm = baseName(m.name || ''), ex = (m.extras || {}).texture_hash;
    for (const h of (ex ? [parseInt(ex, 16)] : []).concat([nlHash(nm), lowerHash(nm)])) if (teamTex.has(h)) return h;
    return null;
  };
  const groups = [], texChanged = new Map(), teamChanged = new Map();
  const apply3 = (M, x, y, z, w) => [M[0] * x + M[1] * y + M[2] * z + w * M[3], M[4] * x + M[5] * y + M[6] * z + w * M[7], M[8] * x + M[9] * y + M[10] * z + w * M[11]];
  const toGame = (v) => [v[0], -v[2], v[1]];   // Y up -> Z up
  nodes.forEach((nd, ni) => {
    if (nd.mesh === undefined) return;
    const mesh = j.meshes[nd.mesh], skin = nd.skin !== undefined ? j.skins[nd.skin] : null;
    let skinMats = null, jh = null;
    if (skin) {
      let ibm;
      if (skin.inverseBindMatrices !== undefined) {
        const a = g.acc(skin.inverseBindMatrices).data;
        ibm = skin.joints.map((jn, k) => { const o = new Float64Array(16); for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) o[r * 4 + c] = a[k * 16 + c * 4 + r]; return o; });
      } else ibm = skin.joints.map(() => Float64Array.from([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]));
      skinMats = skin.joints.map((jn, k) => mm(world[jn], ibm[k]));
      jh = skin.joints.map((jn) => { let n = jn, h = null; while (n !== undefined && h === null) { h = hashOf((nodes[n] || {}).name || ''); n = parent.get(n); } return h; });
    }
    const namesT = (mesh.extras || {}).targetNames || [];
    const pname = baseName(mesh.name || nd.name);
    mesh.primitives.forEach((prim) => {
      if ((prim.mode ?? 4) !== 4) { notes.push(`${pname}: not triangles, skipped`); return; }
      const at = prim.attributes, P = g.acc(at.POSITION), n = P.n;
      const N = at.NORMAL !== undefined ? g.acc(at.NORMAL).data : null;
      const UV = [0, 1, 2, 3, 4, 5].map((k) => (at['TEXCOORD_' + k] !== undefined ? g.acc(at['TEXCOORD_' + k]).data : null));
      const idx = prim.indices !== undefined ? g.acc(prim.indices).data : Float64Array.from({ length: n }, (_, i) => i);
      let tris = []; for (let i = 0; i + 2 < idx.length; i += 3) { const tr = [idx[i], idx[i + 1], idx[i + 2]]; if (new Set(tr).size === 3) tris.push(tr); }
      // rest-pose positions: skinned (sum of w * joint world * inverse bind), else the node's own
      const Ms = new Array(n);
      let J = null, W = null, nInf = 0;
      if (skin && at.JOINTS_0 !== undefined) {
        const jk = Object.keys(at).filter((k) => k.startsWith('JOINTS_')).sort(), wk = Object.keys(at).filter((k) => k.startsWith('WEIGHTS_')).sort();
        const Js = jk.map((k) => g.acc(at[k]).data), Ws = wk.map((k) => g.acc(at[k]).data);
        nInf = 4 * Js.length; J = new Int32Array(n * nInf); W = new Float64Array(n * nInf);
        for (let v = 0; v < n; v++) for (let s = 0; s < Js.length; s++) for (let k = 0; k < 4; k++) { J[v * nInf + s * 4 + k] = Js[s][v * 4 + k]; W[v * nInf + s * 4 + k] = Ws[s] ? Ws[s][v * 4 + k] : 0; }
        for (let v = 0; v < n; v++) {
          const M = new Float64Array(16); let s = 0;
          for (let k = 0; k < nInf; k++) { const w = W[v * nInf + k]; if (!w) continue; s += w; const S = skinMats[J[v * nInf + k]]; for (let q = 0; q < 16; q++) M[q] += w * S[q]; }
          if (s > 0) { for (let q = 0; q < 16; q++) M[q] /= Math.max(s, 1e-9); Ms[v] = M; } else Ms[v] = world[ni];
        }
      } else for (let v = 0; v < n; v++) Ms[v] = world[ni];
      const Pg = new Float64Array(n * 3), Ng = N ? new Float64Array(n * 3) : null;
      for (let v = 0; v < n; v++) {
        const p = toGame(apply3(Ms[v], P.data[3 * v], P.data[3 * v + 1], P.data[3 * v + 2], 1)); Pg.set(p, 3 * v);
        if (N) { let q = apply3(Ms[v], N[3 * v], N[3 * v + 1], N[3 * v + 2], 0); const l = Math.max(Math.hypot(...q), 1e-9); q = q.map((x) => x / l); Ng.set(toGame(q), 3 * v); }
      }
      const VW = [];
      for (let v = 0; v < n; v++) {
        const acc = new Map();
        if (J) for (let k = 0; k < nInf; k++) { const w = W[v * nInf + k], h = jh[J[v * nInf + k]]; if (w > 0 && h !== null && h !== undefined) acc.set(h, (acc.get(h) || 0) + w); }
        VW.push(acc);
      }
      // material -> texture / template piece
      const mat = prim.material !== undefined ? j.materials[prim.material] : {};
      let th = prim.material !== undefined ? matHash(mat) : null, tmpl = null;
      const m_ = /^piece(\d+)$/.exec(pname || ''), pnum = m_ ? +m_[1] : -1;
      if (m_ && pnum < opks.length && (th === null || opks[pnum].tex === th)) tmpl = pnum;
      if (tmpl === null && th !== null) { const k = opks.findIndex((p) => p.tex === th); tmpl = k >= 0 ? k : null; }
      let img = null;
      const bct = ((mat.pbrMetallicRoughness || {}).baseColorTexture);
      if (bct) {
        const src = (j.textures[bct.index] || {}).source;
        if (src !== undefined) {
          const im = j.images[src];
          if (im.bufferView !== undefined) {
            const data = g.view(im.bufferView).raw;
            if (data[0] === 0x89 && data[1] === 0x50) img = decodePng(data);
            else if (decodeImage) img = decodeImage(data, im.mimeType);
            else notes.push(`${pname}: picture ${im.name || ''} is not a PNG; skipped (export textures as PNG)`);
          } else notes.push(`${pname}: picture ${im.uri || ''} is a separate file; export as glTF Binary (.glb) so it's packed in`);
        }
      }
      if (th === null && m_ && pnum < opks.length) {
        // a kit the game swaps in per team: the piece keeps the game's texture, so every team's kit
        // still goes on it; a repainted kit goes into that team's bundle
        th = opks[pnum].tex; tmpl = pnum;
        const kh = teamHash(mat);
        if (kh !== null && img) { const bn = teamTex.get(kh); if (!teamChanged.has(bn)) teamChanged.set(bn, new Map()); if (!teamChanged.get(bn).has(kh)) teamChanged.get(bn).set(kh, img); }
        else notes.push(`${pname}: kit texture "${mat.name}" is chosen by the game per team; kept the game's`);
        img = null;
      }
      if (th === null) {
        th = nlHash(`glb2rlg/${modelName}/${baseName(mat.name || 'piece')}`);
        if (!img) notes.push(`${pname}: material "${mat.name}" has no picture and isn't one of the model's`);
      }
      if (tmpl === null) {
        const counts = new Map(); for (const p of opks) counts.set(p.tex, (counts.get(p.tex) || 0) + 1);
        let top = null; for (const [k, v] of counts) if (top === null || v > counts.get(top)) top = k;
        tmpl = opks.findIndex((p) => p.tex === top);
        notes.push(`${pname}: new piece, drawn like piece${String(tmpl).padStart(2, '0')} with texture ${hex8(th)}`);
      }
      if (img && !texChanged.has(th)) texChanged.set(th, img);
      const morphs = new Map();
      (prim.targets || []).forEach((tg, k) => {
        if (tg.POSITION === undefined) return;
        const nm = namesT[k] || '', mmatch = /^morph(\d+)$/.exec(baseName(nm));
        if (!mmatch) { notes.push(`${pname}: shape key "${nm}" isn't a game face shape (morphNN), skipped`); return; }
        const D = g.acc(tg.POSITION).data, Dg = new Float64Array(n * 3);
        for (let v = 0; v < n; v++) Dg.set(toGame(apply3(Ms[v], D[3 * v], D[3 * v + 1], D[3 * v + 2], 0)), 3 * v);
        morphs.set(+mmatch[1], Dg);
      });
      const noW = VW.filter((w) => !w.size).length;
      if (noW) notes.push(`${pname}: ${noW} vertices have no weights on the game's bones; they follow the nearest weighted vertex`);
      groups.push({ name: pname, tmpl, tex: th, P: Pg, N: Ng, UV, VW, tris, morphs, n });
    });
  });
  if (!groups.length) throw new Error('The GLB has no meshes.');
  onProgress('weights');

  // unweighted vertices: the nearest weighted vertex's weights; then the top 3 per vertex
  const hp = [], hw = [];
  for (const gr of groups) gr.VW.forEach((w, v) => { if (w.size) { hp.push(gr.P[3 * v], gr.P[3 * v + 1], gr.P[3 * v + 2]); hw.push(w); } });
  if (!hw.length) throw new Error('No vertex is weighted to the skeleton (is the mesh parented to the armature, with vertex groups named after its bones?)');
  for (const gr of groups) {
    gr.VW = gr.VW.map((w, v) => {
      if (!w.size) {
        let bi = 0, bd = Infinity; const x = gr.P[3 * v], y = gr.P[3 * v + 1], z = gr.P[3 * v + 2];
        for (let k = 0; k < hw.length; k++) { const d = (hp[3 * k] - x) ** 2 + (hp[3 * k + 1] - y) ** 2 + (hp[3 * k + 2] - z) ** 2; if (d < bd) { bd = d; bi = k; } }
        w = hw[bi];
      }
      const best = [...w.entries()].sort((a, b) => b[1] - a[1]).slice(0, MAX_INFL), s = best.reduce((a, b) => a + b[1], 0);
      return best.map(([h, x]) => [h, x / s]);
    });
  }

  // vertices Blender split only by rounding (its stored normals): merged back
  for (const gr of groups) {
    const n = gr.P.length / 3, key = new Map(), remap = new Int32Array(n), keep = [];
    const r = (x, d) => Math.round(x * 10 ** d);
    const morphK = [...gr.morphs.keys()].sort((a, b) => a - b);
    for (let v = 0; v < n; v++) {
      const k = [[0, 1, 2].map((q) => r(gr.P[3 * v + q], 5)), gr.N ? [0, 1, 2].map((q) => r(gr.N[3 * v + q], 2)) : [],
        gr.UV.filter(Boolean).map((uv) => [Math.round(uv[2 * v] * 1024), Math.round(uv[2 * v + 1] * 1024)]),
        gr.VW[v].map(([h, w]) => [h, r(w, 3)]), morphK.map((m) => [0, 1, 2].map((q) => r(gr.morphs.get(m)[3 * v + q], 5)))].map((x) => JSON.stringify(x)).join(';');
      if (!key.has(k)) { key.set(k, keep.length); keep.push(v); }
      remap[v] = key.get(k);
    }
    if (keep.length < n) {
      const pick = (a, c) => { const o = new Float64Array(keep.length * c); keep.forEach((v, i) => { for (let q = 0; q < c; q++) o[i * c + q] = a[v * c + q]; }); return o; };
      gr.P = pick(gr.P, 3); if (gr.N) gr.N = pick(gr.N, 3);
      gr.UV = gr.UV.map((uv) => (uv ? pick(uv, 2) : null)); gr.VW = keep.map((v) => gr.VW[v]);
      for (const m of morphK) gr.morphs.set(m, pick(gr.morphs.get(m), 3));
      gr.tris = gr.tris.map((tr) => tr.map((c) => remap[c])).filter((tr) => new Set(tr).size === 3);
    }
  }

  // pieces: each group's triangles, split so each uses at most MAX_BONES bones
  const built = [];
  groups.forEach((gr, gi) => {
    const mine = [];
    const need = (tr) => new Set(tr.flatMap((c) => gr.VW[c].map(([h]) => h)));
    const keyOf = (tr) => [...need(tr)].sort((a, b) => a - b);
    const tris = gr.tris.map((tr) => [keyOf(tr), tr]).sort((a, b) => { for (let i = 0; i < Math.min(a[0].length, b[0].length); i++) if (a[0][i] !== b[0][i]) return a[0][i] - b[0][i]; return a[0].length - b[0].length; }).map((x) => x[1]);
    for (const tr of tris) {
      const nd = need(tr);
      const fit = mine.filter((b) => new Set([...b.bones, ...nd]).size <= MAX_BONES);
      let cur;
      if (fit.length) cur = fit.reduce((best, b) => { const a = [[...nd].filter((h) => !b.bones.has(h)).length, -b.tris.length], c = best && [[...nd].filter((h) => !best.bones.has(h)).length, -best.tris.length]; return !best || a[0] < c[0] || (a[0] === c[0] && a[1] < c[1]) ? b : best; }, null);
      else { cur = { g: gi, bones: new Set(), tris: [] }; mine.push(cur); built.push(cur); }
      for (const h of nd) cur.bones.add(h); cur.tris.push(tr);
    }
    if (mine.length > 1) notes.push(`${gr.name}: needs ${mine.length} bone maps, split into ${mine.length} pieces`);
  });
  onProgress('strips');

  // strips (tried harder when they come out longer than the original's index data)
  const oIdx = ch.get(0x1B007)[0][1];
  const doStrips = (tries) => {
    let total = 0;
    for (const b of built) {
      const local = new Map(), verts = [];
      for (const tr of b.tris) for (const c of tr) if (!local.has(c)) { local.set(c, verts.length); verts.push(c); }
      b.verts = verts; b.strip = stripify(b.tris.map((tr) => tr.map((c) => local.get(c))), tries);
      total += Math.floor((2 * b.strip.length + 3) / 4) * 4;
    }
    return total;
  };
  if (doStrips(6) > oIdx) { onProgress('strips-harder'); doStrips(40); }

  // the mesh data
  const vtx = new Bytes(), index = new Bytes(), streams = new Bytes(), packets = new Bytes(), params = new Bytes();
  const maps = [], morphRows = [];
  for (const b of built) {
    const gr = groups[b.g], tp = opks[gr.tmpl];
    const bones = [...b.bones].sort((x, y) => bind.get(x) - bind.get(y)), bidx = new Map(bones.map((h, i) => [h, i]));
    const verts = b.verts, strip = b.strip;
    if (verts.length > 0xFFFF) throw new Error(`${gr.name}: over 65535 vertices in one piece`);
    let uvk = 0; const addrs = [];
    for (const [, , stride, kind] of tp.streams) {
      vtx.align(4); addrs.push(vtx.length);
      if (kind === 1) for (const v of verts) vtx.f32(gr.P[3 * v], gr.P[3 * v + 1], gr.P[3 * v + 2]);
      else if (kind === 2) for (const v of verts) gr.N ? vtx.f32(gr.N[3 * v], gr.N[3 * v + 1], gr.N[3 * v + 2]) : vtx.f32(0, 0, 1);
      else if (kind === 4) {
        const uv = gr.UV[uvk] || gr.UV[0];
        for (const v of verts) for (let q = 0; q < 2; q++) vtx.i16(uv ? Math.max(-32768, Math.min(32767, Math.round(uv[2 * v + q] * 1024))) : 0);
        uvk++;
      } else if (kind === 7) for (const v of verts) { const ws = gr.VW[v]; vtx.bytes([...ws.map(([h]) => bidx.get(h)), ...Array(4 - ws.length).fill(0)]); }
      else if (kind === 5) for (const v of verts) { const ws = gr.VW[v]; vtx.f32(...ws.map(([, w]) => w), ...Array(4 - ws.length).fill(0)); }
      else vtx.bytes(new Uint8Array(stride * verts.length));
    }
    const stoff = streams.length;
    tp.streams.forEach(([, sIdx, stride, kind, unk], i) => { streams.u32(addrs[i]); streams.bytes([sIdx, stride, kind, unk]); });
    const ib = index.length;
    for (const c of strip) index.u16(c);
    index.align(4);
    const poff = params.length, blk = tp.params.slice();
    if (gr.tex !== tp.tex) { be(blk).setUint32(0, gr.tex); be(blk).setUint32(24, gr.tex); }   // main texture, Mega Strike glow
    params.bytes(blk);
    const f = tp.f;
    packets.u32(ib, strip.length); packets.u16(verts.length); packets.bytes([f[3], tp.streams.length]);
    packets.u32(stoff, f[6], f[7], f[8], f[9], poff, f[11], f[12], f[13]);
    maps.push(bones);
    const row = new Map();
    for (const [m, D] of gr.morphs) {
      const r = [];
      verts.forEach((v, k) => { const d = [D[3 * v], D[3 * v + 1], D[3 * v + 2]]; if (Math.max(...d.map(Math.abs)) > 1e-6) r.push([d, k]); });
      if (r.length) row.set(m, r);
    }
    morphRows.push(row);
  }
  // face shapes: n, ids, 16, pieces, then per piece per slot: count + (dx, dy, dz, vertex)
  const md = new Bytes();
  if (morphIds.length) {
    md.u32(morphIds.length, ...morphIds, 16, built.length);
    for (const row of morphRows) for (let m = 0; m < morphIds.length; m++) { const r = row.get(m) || []; md.u32(r.length); for (const [d, v] of r) { md.f32(...d); md.u32(v); } }
    const lost = new Set(); for (const gr of groups) for (const m of gr.morphs.keys()) if (m >= morphIds.length) lost.add(m);
    if (lost.size) notes.push(`shape keys morph${[...lost].join(', ')}: the model has only ${morphIds.length} face-shape slots, skipped`);
  } else md.u32(0, 16, built.length);

  // the new file: the original's chunks in order, the mesh ones rebuilt
  const [rootId, ro, rs] = walkLevel(t, 0, t.length)[0];
  const neu = new Map([[0x1B016, params.out()], [0x1B007, index.out()], [0x1B006, vtx.out()], [0x1B005, streams.out()], [0x1B004, packets.out()]]);
  const body = [];
  for (const [cid, o, sz] of walkLevel(t, ro, ro + rs)) {
    if (neu.has(cid)) body.push(chunk(cid, neu.get(cid)));
    else if (cid === 0x1B003) { const p = t.slice(o, o + sz); be(p).setUint32(4, maps.length); body.push(chunk(cid, p)); }
    else if (cid === 0x8001B008) {
      const skin = []; let done = false;
      for (const [c2, o2, s2] of walkLevel(t, o, o + sz)) {
        if (c2 === 0x1B00B) { if (!done) { for (const mp of maps) { const b = new Bytes(); b.u32(...mp); skin.push(chunk(0x1B00B, b.out())); } done = true; } }
        else if (c2 === 0x1B00C) skin.push(chunk(0x1B00C, md.out()));
        else skin.push(chunk(c2, t.subarray(o2, o2 + s2)));
      }
      body.push(chunk(cid, concat(skin)));
    } else body.push(chunk(cid, t.subarray(o, o + sz)));
  }
  const outRlg = chunk(rootId, concat(body));

  // textures: re-encode the pictures that changed (in the model's bundle and in team bundles)
  const main = reencodeBundle(orlt, texChanged, otex);
  const outRlt = main.out, reencoded = main.reencoded.map((r) => ({ ...r, bundle: 'model' }));
  const teamOut = new Map();
  for (const [bn, ch2] of teamChanged) {
    const r = reencodeBundle(teamBundles.get(bn), ch2, otex);
    if (r.reencoded.length) { teamOut.set(bn, r.out); reencoded.push(...r.reencoded.map((x) => ({ ...x, bundle: bn }))); }
  }

  // report and the memory check
  const entries = maps.reduce((s, m) => s + m.length, 0), oPk = ch.get(0x1B004)[0][1] / 0x30;
  const report = [
    ['Pieces', oPk, built.length, true], ['Bone-map entries', tMaps, entries, true],
    ['Index data (bytes)', oIdx, index.length, false], ['Vertex data (bytes)', ch.get(0x1B006)[0][1], vtx.length, false],
    ['Face shapes (bytes)', ch.has(0x1B00C) ? ch.get(0x1B00C)[0][1] : 0, md.length, false], ['Model file (bytes)', t.length, outRlg.length, false]];
  const over = built.length > oPk || entries > tMaps;
  const stats = { triangles: built.reduce((s, b) => s + b.tris.length, 0), vertices: built.reduce((s, b) => s + b.verts.length, 0), morphPieces: morphRows.filter((r) => r.size).length };
  return { rlg: outRlg, rlt: outRlt, teamRlts: teamOut, report, notes, reencoded, over, stats };
}

// A bundle with some pictures re-encoded (only those that changed), keeping the bundle's layout:
// its index order and its pictures' order in the data. Unchanged: the bundle as it was.
export function reencodeBundle(orlt, changes, templates) {
  const otex = readTextures(orlt), tex = new Map(otex.map((e) => [e.hash, e.blob])), order = otex.map((e) => e.hash), reencoded = [];
  for (const [th, im0] of changes) {
    const old = tex.get(th); let { w, h, px } = im0;
    if (w % 8 || h % 8) { const W = Math.max(8, w - (w % 8)), H = Math.max(8, h - (h % 8)); px = resizeBilinear(px, w, h, W, H); w = W; h = H; }
    if (old) {
      const oh = texHeader(old);
      if (oh.w === w && oh.h === h) {
        const o = decodeTex(old).px; let vis = 0, diff = 0, same = 0;
        for (let i = 0; i < w * h; i++) {
          const a = o[4 * i + 3] > 127, b = px[4 * i + 3] > 127;
          if (a === b) same++;
          if (a || b) { vis++; for (let k = 0; k < 3; k++) diff += Math.abs(o[4 * i + k] - px[4 * i + k]); }
        }
        if ((vis ? diff / (3 * vis) : 0) < 1.5 && same / (w * h) > 0.999) continue;
      }
    }
    const tmpl = old || (otex.find((e) => texHeader(e.blob).fmt === 2) || (templates || []).find((e) => texHeader(e.blob).fmt === 2)).blob;
    let mips = 1, s = Math.min(w, h); while (s > 8) { s = s >> 1; mips++; }
    if (old) mips = Math.min(mips, Math.max(1, texHeader(old).mips));
    tex.set(th, (old ? encodeTex : encodeCmpr)(px, w, h, tmpl.subarray(0, 32), mips));
    if (!order.includes(th)) order.push(th);
    reencoded.push({ hash: th, w, h });
  }
  if (!reencoded.length) return { out: orlt, reencoded };
  const dv = be(orlt), n0 = dv.getUint32(4), ent = [];
  for (let i = 0; i < n0; i++) ent.push([dv.getUint32(16 + 16 * i), dv.getUint32(20 + 16 * i)]);
  const have = new Set(ent.map((e) => e[0]));
  const dataOrder = ent.slice().sort((a, b) => a[1] - b[1]).map((e) => e[0]).concat(order.filter((h) => !have.has(h)));
  const data = new Bytes(), offs = new Map();
  for (const th of dataOrder) { data.align(32); offs.set(th, data.length); data.bytes(tex.get(th)); }
  const dict = new Bytes(); for (const th of order) dict.u32(th, offs.get(th), tex.get(th).length, 0);
  const head = new Bytes(); head.bytes(orlt.subarray(0, 4)); head.u32(order.length); head.bytes(orlt.subarray(8, 16));
  return { out: concat([head.out(), dict.out(), data.out()]), reencoded };
}

// a growable big-endian byte buffer
class Bytes {
  constructor() { this.buf = new Uint8Array(1 << 16); this.length = 0; this.dv = new DataView(this.buf.buffer); }
  need(n) { if (this.length + n > this.buf.length) { let m = this.buf.length; while (m < this.length + n) m *= 2; const b = new Uint8Array(m); b.set(this.buf.subarray(0, this.length)); this.buf = b; this.dv = new DataView(b.buffer); } }
  u32(...xs) { this.need(4 * xs.length); for (const x of xs) { this.dv.setUint32(this.length, x >>> 0); this.length += 4; } }
  u16(...xs) { this.need(2 * xs.length); for (const x of xs) { this.dv.setUint16(this.length, x); this.length += 2; } }
  i16(...xs) { this.need(2 * xs.length); for (const x of xs) { this.dv.setInt16(this.length, x); this.length += 2; } }
  f32(...xs) { this.need(4 * xs.length); for (const x of xs) { this.dv.setFloat32(this.length, x); this.length += 4; } }
  bytes(a) { this.need(a.length); this.buf.set(a, this.length); this.length += a.length; }
  align(n) { const p = (-this.length) % n; const q = p < 0 ? p + n : p; if (q) this.bytes(new Uint8Array(q)); }
  out() { return this.buf.slice(0, this.length); }
}
export { stripTris };
