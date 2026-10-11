// Skeletal animations (.sanim.zlib, the animation chunks in .nis cutscenes and in a stadium's
// gameworld.res): one 0x80017000 chunk per animation. A port of scripts/modkit/sms/sanim.py
// (Charged format, whose decoder re-encodes the game's animations byte for byte).
import { unzlibSync } from 'fflate';
import { be } from './formats.js';

// Charged's chunk tree: payload alignment from id bits 24..27 (counted in size); the next chunk
// rounded up to 4 bytes.
export function tree(d, off = 0, end = d.length) {
  const dv = be(d), out = [];
  while (off + 8 <= end) {
    const id = dv.getUint32(off) >>> 0, size = dv.getUint32(off + 4), body = off + 8;
    const type = (id & 0x80FFFFFF) >>> 0;
    if (id & 0x80000000) out.push({ id, type, off, children: tree(d, body, body + size) });
    else {
      const a = (id >>> 24) & 0x0F; let start = body;
      if (a) { const al = 1 << a; start = Math.ceil(body / al) * al; }
      out.push({ id, type, off, data: d.subarray(start, body + size) });
    }
    off = body + size; if (off & 3) off = (off + 3) & ~3;
  }
  return out;
}
const find = (c, t) => (c.children || []).find((x) => x.type === t);

const P_ROTZ = 1, P_ROTCONST = 2, P_TRANSCONST = 4, P_SCALECONST = 8, P_ROT16 = 0x10, P_ROT12 = 0x20;
const s16 = (v) => (v & 0x8000 ? v - 0x10000 : v);
function decodeRot(data, props, count) {
  const dv = be(data);
  if (props & P_ROTZ) { const z = []; for (let i = 0; i < count; i++) z.push(dv.getUint16(2 * i)); return { rotz: z }; }
  const out = [];
  if (props & P_ROT16) for (let i = 0; i < count; i++) out.push([0, 1, 2, 3].map((k) => dv.getInt16(8 * i + 2 * k) / 32768));
  else if (props & P_ROT12) for (let i = 0; i < count; i++) {
    const b = data.subarray(6 * i, 6 * i + 6);
    out.push([s16((b[0] << 8) | (b[1] & 0xF0)), s16((b[2] << 8) | ((b[1] << 4) & 0xF0)), s16((b[3] << 8) | (b[4] & 0xF0)), s16((b[5] << 8) | ((b[4] << 4) & 0xF0))].map((x) => x / 32768));
  } else for (let i = 0; i < count; i++) out.push([0, 1, 2, 3].map((k) => dv.getInt8(4 * i + k) / 128));
  return { rot: out };
}
export function animFromChunk(ch) {
  const kids = ch.children, hdr = kids[0].data, hv = be(hdr);
  const a = { hash: hv.getUint32(4), numKeys: hv.getUint32(8), numNodes: hv.getUint32(12), numMorph: hv.getUint32(16) };
  a.numRootKeys = hv.getUint32(0x34); a.signature = hv.getUint32(0x54);
  a.name = new TextDecoder('latin1').decode(kids[1].data).split('\0')[0];
  const rr = find(ch, 0x17007), rt = find(ch, 0x17008);
  a.rootRot = []; a.rootTrans = [];
  for (let i = 0; i < a.numRootKeys; i++) { a.rootRot.push(be(rr.data).getUint16(2 * i)); a.rootTrans.push([0, 1, 2].map((k) => be(rt.data).getFloat32(12 * i + 4 * k))); }
  const pd = be(find(ch, 0x17003).data), nodes = (ch.children || []).filter((c) => c.type === 0x80017100);
  a.nodes = nodes.map((nc, i) => {
    const p = pd.getUint32(4 * i), n = { props: p, rot: null, rotz: null, trans: null, scale: null };
    for (const c of nc.children) {
      if (c.type === 0x17101) Object.assign(n, decodeRot(c.data, p, p & P_ROTCONST ? 1 : a.numKeys));
      else if (c.type === 0x17102) { const cnt = p & P_TRANSCONST ? 1 : a.numKeys, v = be(c.data); n.trans = []; for (let k = 0; k < cnt; k++) n.trans.push([0, 1, 2].map((j) => v.getFloat32(12 * k + 4 * j))); }
      else if (c.type === 0x17103) { const cnt = p & P_SCALECONST ? 1 : a.numKeys, v = be(c.data); n.scale = []; for (let k = 0; k < cnt; k++) n.scale.push([0, 1, 2].map((j) => v.getInt16(6 * k + 2 * j) / 2048)); }
    }
    return n;
  });
  return a;
}
// every animation in a file (.sanim, .sanim.zlib, .nis, gameworld.res)
export function loadAnims(u8, zlibbed = false) {
  let d = u8;
  if (zlibbed) d = unzlibSync(u8.subarray(4));
  const out = [];
  const visit = (cs) => { for (const c of cs) { if (c.type === 0x80017000) { try { out.push(animFromChunk(c)); } catch (e) { /* not an animation */ } } else if (c.children) visit(c.children); } };
  visit(tree(d));
  return out;
}
// node i's local rotation (x, y, z, w) and translation at key k (fractional keys interpolate)
export function sample(a, i, k, bindT) {
  const n = a.nodes[i];
  const at = (arr, kk) => arr[Math.min(kk, arr.length - 1)];
  const k0 = Math.floor(k), k1 = Math.min(k0 + 1, a.numKeys - 1), f = k - k0;
  let q = [0, 0, 0, 1];
  if (n && n.rot) q = slerp(at(n.rot, k0), at(n.rot, k1), f);
  else if (n && n.rotz) { const z0 = at(n.rotz, k0), z1 = at(n.rotz, k1); let d = z1 - z0; if (d > 32768) d -= 65536; if (d < -32768) d += 65536; const ang = (z0 + d * f) * 2 * Math.PI / 65536; q = [0, 0, Math.sin(ang / 2), Math.cos(ang / 2)]; }
  let t = bindT || [0, 0, 0];
  if (n && n.trans) t = lerp(at(n.trans, k0), at(n.trans, k1), f);
  let s = null; if (n && n.scale) s = lerp(at(n.scale, k0), at(n.scale, k1), f);
  return { q, t, s };
}
export function sampleRoot(a, k) {
  if (!a.rootRot.length) return { q: [0, 0, 0, 1], t: [0, 0, 0] };
  const k0 = Math.min(Math.floor(k), a.rootRot.length - 1), k1 = Math.min(k0 + 1, a.rootRot.length - 1), f = k - Math.floor(k);
  let d = a.rootRot[k1] - a.rootRot[k0]; if (d > 32768) d -= 65536; if (d < -32768) d += 65536;
  const ang = (a.rootRot[k0] + d * f) * 2 * Math.PI / 65536;
  return { q: [0, 0, Math.sin(ang / 2), Math.cos(ang / 2)], t: lerp(a.rootTrans[k0], a.rootTrans[k1], f) };
}
const lerp = (a, b, f) => a.map((x, i) => x + (b[i] - x) * f);
function slerp(a, b, f) {
  let d = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  if (d < 0) { b = b.map((x) => -x); d = -d; }
  const o = d > 0.9995 ? a.map((x, i) => x + (b[i] - x) * f) : (() => { const th = Math.acos(d), s = Math.sin(th); return a.map((x, i) => (Math.sin((1 - f) * th) * x + Math.sin(f * th) * b[i]) / s); })();
  const l = Math.hypot(...o) || 1; return o.map((x) => x / l);
}
