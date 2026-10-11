// A stadium's scene: the object list in gameworld.res (chunk 0x4026000). Every placed thing, with
// its name hash, kind and a 4x4 transform (Z up, metres, the game's row-vector layout: rows 0-2 the
// axes, row 3 the position). Children are named "<parent>/<child>" and their transform is relative
// to the parent.
//
// A record: class u32, name hash u32, kind u32, (5 words the game fills in at run time), then the
// transform (16 f32), then data for that kind:
//   0x000 physics plane      0x002 a model piece: radius, the piece's hash (its model's object list), box
//   0x003 sun light          0x008 net        0x009 shadow volume      0x00a special model (sky, lights)
//   0x010 animation binding  (class 0x45d1d0; word 3 is its size): pairs (full-name hash, short-name
//         hash) for "<proxy>/root object01" and each child, then the animation's name hash (Idle)
//   0x104 particle view      0x106 a prop (a "proxy": its pieces are its children)
//   0x107 a box (helperNN / crowdNN: where the crowd stands): its size (3 f32) after the transform
//   0x108 a point (flag_dummyNN: where a big flag goes, riotguardNN)    0x109 an effect emitter
// The high half of the kind word holds flags (0x10000 on model pieces).
import { nlHash } from './formats.js';

const be = (u8) => new DataView(u8.buffer, u8.byteOffset, u8.byteLength);
const CLASSES = new Set([0x45e19c, 0x45e1b4, 0x45e1dc, 0x45d1e4, 0x45d1d0, 0x45d754]);
const BINDING = 0x45d1d0;
export const KIND = { PLANE: 0x0, PIECE: 0x2, SUN: 0x3, NET: 0x8, SHADOW: 0x9, SPECIAL: 0xa, BINDING: 0x10, PVIEW: 0x104, PROXY: 0x106, BOX: 0x107, POINT: 0x108, EMITTER: 0x109 };

// the scene chunk inside the res file: -> { start (payload), end, idOff (its header) }
function locate(res) {
  const dv = be(res);
  const rootSize = dv.getUint32(4);
  let off = 8;
  while (off + 8 <= 8 + rootSize) {
    const id = dv.getUint32(off), size = dv.getUint32(off + 4);
    if (((id & 0x80FFFFFF) >>> 0) === 0x26000) {
      const a = (id >>> 24) & 0x0F, al = a ? 1 << a : 1, body = off + 8, start = Math.ceil(body / al) * al;
      return { idOff: off, start, end: body + size, last: body + size >= 8 + rootSize - 3 };
    }
    off = (off + 8 + size + 3) & ~3;
  }
  return null;
}

export function parseScene(res, names = new Map()) {
  const loc = locate(res); if (!loc) return null;
  const dv = be(res), count = dv.getUint32(loc.start), starts = [];
  for (let o = loc.start + 16; o + 32 <= loc.end; o += 16) {
    const cls = dv.getUint32(o); if (!CLASSES.has(cls)) continue;
    if (cls === BINDING) { const sz = dv.getUint32(o + 12); if (dv.getUint32(o + 8) === 0x10 && sz >= 32 && sz <= 0x4000 && !(sz & 15)) starts.push(o); }
    else if (dv.getUint32(o + 20) === 0xFFFFFFFF) starts.push(o);
  }
  const recs = starts.map((o, i) => {
    let end = i + 1 < starts.length ? starts[i + 1] : loc.end;
    // a stray non-object record (e.g. an "objectproxy" name) between two objects: keep it with the one before
    const cls = dv.getUint32(o), hash = dv.getUint32(o + 4), kindWord = dv.getUint32(o + 8), kind = kindWord & 0xFFFF;
    const r = { i, off: o, end, cls, hash, kind, flags: kindWord >>> 16, name: names.get(hash) || null };
    if (cls === BINDING) { r.kind = KIND.BINDING; r.size = dv.getUint32(o + 12); return r; }
    r.m = [...Array(16)].map((_, k) => dv.getFloat32(o + 32 + 4 * k));
    if (kind === KIND.BOX && end - o >= 108) r.box = [0, 1, 2].map((k) => dv.getFloat32(o + 96 + 4 * k));
    if (kind === KIND.PIECE && end - o >= 104) { r.radius = dv.getFloat32(o + 96); r.piece = dv.getUint32(o + 100); }
    return r;
  });
  // parents: "a/b" is a's child
  const byName = new Map(); for (const r of recs) if (r.name) byName.set(r.name, r);
  for (const r of recs) if (r.name && r.name.includes('/')) { const p = byName.get(r.name.slice(0, r.name.lastIndexOf('/'))); if (p) { r.parent = p.i; (p.kids || (p.kids = [])).push(r.i); } }
  // a binding goes with the prop after it
  recs.forEach((r, i) => { if (r.kind === KIND.BINDING && recs[i + 1] && recs[i + 1].kind === KIND.PROXY) recs[i + 1].binding = i; });
  return { count, recs, loc };
}

// column-vector world matrix (Z up) of record i, as 16 numbers (three.js Matrix4 column-major order)
export function worldMatrix(scene, i) {
  const r = scene.recs[i]; let m = r.m.slice();
  if (r.parent != null) m = mul(worldMatrix(scene, r.parent), m);
  return m;
}
// a * b with both stored column-major (= the game's row-major rows-are-axes layout)
function mul(a, b) { const o = new Array(16).fill(0); for (let c = 0; c < 4; c++) for (let r = 0; r < 4; r++) for (let k = 0; k < 4; k++) o[c * 4 + r] += a[k * 4 + r] * b[c * 4 + k]; return o; }

// ---- edits (on a copy of the decompressed res)
export function setMatrix(res, rec, m) { const dv = be(res); for (let k = 0; k < 16; k++) dv.setFloat32(rec.off + 32 + 4 * k, m[k]); }
export function setBox(res, rec, size) { const dv = be(res); for (let k = 0; k < 3; k++) dv.setFloat32(rec.off + 96 + 4 * k, size[k]); }

// position and turn (around the up axis, degrees) of a record's own transform
export function getPlace(rec) {
  const m = rec.m, sx = Math.hypot(m[0], m[1], m[2]) || 1;
  return { x: m[12], y: m[13], z: m[14], turn: Math.atan2(m[1] / sx, m[0] / sx) * 180 / Math.PI };
}
export function withPlace(rec, { x, y, z, turn }) {
  const m = rec.m.slice(), cur = getPlace(rec), d = (turn - cur.turn) * Math.PI / 180, c = Math.cos(d), s = Math.sin(d);
  for (let col = 0; col < 3; col++) { const a = m[col * 4], b = m[col * 4 + 1]; m[col * 4] = c * a - s * b; m[col * 4 + 1] = s * a + c * b; }
  m[12] = x; m[13] = y; m[14] = z;
  return m;
}

// copy a prop (its animation binding, the prop and its children) under a new name, placed at `m`.
// Name hashes of the copies are the game's hash of their new full names; short names stay.
// Returns { res, name } (a new, longer res).
export function copyProp(res, scene, i, newName, m) {
  const p = scene.recs[i]; if (p.kind !== KIND.PROXY || !p.name) throw new Error('Only props with a known name can be copied.');
  const group = [p.binding, i, ...allKids(scene, i)].filter((x) => x != null).sort((a, b) => a - b);
  const old = p.name, parts = [];
  for (const k of group) {
    const r = scene.recs[k], bytes = res.slice(r.off, r.end), dv = be(bytes);
    if (r.kind === KIND.BINDING) {
      // full-name hashes: "<old>/..." -> "<new>/..."
      const full = new Map(); full.set(nlHash(old + '/root object01'), nlHash(newName + '/root object01'));
      for (const c of allKids(scene, i)) { const n = scene.recs[c].name; if (n) full.set(scene.recs[c].hash, nlHash(newName + n.slice(old.length))); }
      for (let o = 16; o + 4 <= bytes.length; o += 4) { const v = dv.getUint32(o); if (full.has(v)) dv.setUint32(o, full.get(v)); }
    } else {
      const n = k === i ? newName : newName + r.name.slice(old.length);
      dv.setUint32(4, nlHash(n));
      if (k === i) for (let q = 0; q < 16; q++) dv.setFloat32(32 + 4 * q, m[q]);
    }
    parts.push(bytes);
  }
  const add = parts.reduce((s, b) => s + b.length, 0);
  const { loc } = scene; if (!loc.last) throw new Error("This stadium's object list isn't at the end of its file; copying isn't supported here.");
  // insert after the last record of the group
  const at = scene.recs[group[group.length - 1]].end;
  const out = new Uint8Array(res.length + add);
  out.set(res.subarray(0, at), 0); let o = at; for (const b of parts) { out.set(b, o); o += b.length; } out.set(res.subarray(at), o);
  const dv = be(out);
  dv.setUint32(loc.start, scene.count + group.length);
  dv.setUint32(loc.idOff + 4, dv.getUint32(loc.idOff + 4) + add);
  dv.setUint32(4, dv.getUint32(4) + add);
  return out;
}
function allKids(scene, i) { const out = []; const go = (j) => { for (const k of scene.recs[j].kids || []) { out.push(k); go(k); } }; go(i); return out; }
// a free name like sign_proxy22
export function freeName(scene, base) {
  const stem = base.replace(/\d+$/, ''), w = (base.match(/\d+$/) || ['00'])[0].length, used = new Set(scene.recs.map((r) => r.hash));
  for (let n = 1; n < 1000; n++) { const s = stem + String(n).padStart(w, '0'); if (!used.has(nlHash(s))) return s; }
  throw new Error('no free name');
}
