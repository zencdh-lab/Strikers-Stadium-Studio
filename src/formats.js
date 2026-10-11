// Mario Strikers Charged file formats: NL chunk trees (.rlg models, .shier skeletons), PTLG texture
// bundles (.rlt), GX textures (CMPR / C8), name hashes. A port of scripts/modkit (Python), which was
// checked against the game's files and in game.
import { zlibSync, unzlibSync } from 'fflate';

// ------------------------------------------------------------------ bytes
export const be = (u8) => new DataView(u8.buffer, u8.byteOffset, u8.byteLength);
export const u32 = (u8, o) => be(u8).getUint32(o);
export const hex8 = (h) => (h >>> 0).toString(16).padStart(8, '0');

// ------------------------------------------------------------------ hashes
// nlStringHash: h = h * 33 + c from 0xFFFFFFFF; lower_hash: the same on the lower-cased string.
export function nlHash(s) {
  let h = 0xFFFFFFFF;
  const b = new TextEncoder().encode(s);
  for (const c of b) h = (Math.imul(h, 33) + c) >>> 0;
  return h >>> 0;
}
export const lowerHash = (s) => nlHash(s.toLowerCase());

// hashid.bin: the game's string table; every printable run is a name.
export function boneNames(u8) {
  const names = new Map();
  if (!u8) return names;
  let start = -1;
  const add = (s) => {
    for (const h of [nlHash(s), lowerHash(s)]) if (!names.has(h)) names.set(h, s);
  };
  for (let i = 0; i <= u8.length; i++) {
    const c = i < u8.length ? u8[i] : 0;
    if (c >= 0x20 && c <= 0x7e) { if (start < 0) start = i; }
    else if (start >= 0) {
      if (i - start >= 2) add(String.fromCharCode(...u8.subarray(start, i)));
      start = -1;
    }
  }
  return names;
}

// ------------------------------------------------------------------ chunk trees
// Each chunk: u32 id, u32 size, payload. Ids with the top bit set hold child chunks; bits 24..30
// give the payload's alignment. Charged starts each chunk on 4 bytes.
export function walk(d, off, end, depth = 0, out = []) {
  const dv = be(d);
  while (off + 8 <= end) {
    const cid = dv.getUint32(off), size = dv.getUint32(off + 4);
    const idx = (cid & ~0x7F000000 & 0x7FFFFFFF) >>> 0;
    const container = (cid & 0x80000000) !== 0;
    const alignBits = (cid >>> 24) & 0x7F;
    let payload = off + 8;
    if (alignBits) { const a = 2 ** alignBits; payload = Math.ceil(payload / a) * a; }
    out.push({ depth, rawid: cid >>> 0, id: idx & 0xFFFFFF, off, payload, size });
    if (container) walk(d, off + 8, off + 8 + size, depth + 1, out);
    let nxt = off + 8 + size;
    if (nxt & 3 && nxt + 8 <= end) {
      const cid2 = dv.getUint32(nxt);
      if (((cid2 & 0xFFFFFF) >>> 12) !== 0x1B) nxt = (nxt + 3) & ~3;
    }
    off = nxt;
  }
  return out;
}
export function chunks(d) {
  const ch = new Map();
  for (const r of walk(d, 0, d.length)) {
    if (!ch.has(r.id)) ch.set(r.id, []);
    ch.get(r.id).push([r.payload, r.size]);
  }
  return ch;
}
// one level, as glb2rlg.py's walk: (id, payload offset, size), 4-byte aligned
export function walkLevel(d, o, end) {
  const dv = be(d), out = [];
  while (o + 8 <= end) {
    const cid = dv.getUint32(o) >>> 0, sz = dv.getUint32(o + 4);
    out.push([cid, o + 8, sz]); o += 8 + sz; o += (-o) & 3;
  }
  return out;
}
export function chunk(cid, payload) {
  const n = 8 + payload.length, pad = (-n) & 3;
  const out = new Uint8Array(n + pad);
  const dv = be(out); dv.setUint32(0, cid >>> 0); dv.setUint32(4, payload.length);
  out.set(payload, 8);
  return out;
}
export function concat(parts) {
  let n = 0; for (const p of parts) n += p.length;
  const out = new Uint8Array(n); let o = 0;
  for (const p of parts) { out.set(p, o); o += p.length; }
  return out;
}

// ------------------------------------------------------------------ skeleton (.shier)
export function loadShier(d) {
  const ch = chunks(d), dv = be(d);
  const [ho, hs] = ch.get(0x18003)[0], [po, ps] = ch.get(0x18009)[0];
  const hashes = [], parents = [];
  for (let i = 0; i < hs / 4; i++) hashes.push(dv.getUint32(ho + 4 * i));
  for (let i = 0; i < ps / 4; i++) parents.push(dv.getInt32(po + 4 * i));
  let name = '';
  if (ch.has(0x18002)) {
    const [no, ns] = ch.get(0x18002)[0]; let e = no;
    while (e < no + ns && d[e]) e++;
    name = new TextDecoder().decode(d.subarray(no, e));
  }
  let offsets = null;
  if (ch.has(0x18010)) {
    const [oo, os] = ch.get(0x18010)[0];
    if (os === 12 * hashes.length) {
      offsets = [];
      for (let i = 0; i < hashes.length; i++) offsets.push([0, 1, 2].map((k) => dv.getFloat32(oo + 12 * i + 4 * k)));
    }
  }
  return { name, hashes, parents, offsets };
}

// ------------------------------------------------------------------ texture bundles (.rlt)
export function readTextures(d) {
  const dv = be(d), n = dv.getUint32(4), base = 16 + n * 16, out = [];
  for (let i = 0; i < n; i++) {
    const e = 16 + 16 * i;
    const hash = dv.getUint32(e), off = dv.getUint32(e + 4), size = dv.getUint32(e + 8);
    out.push({ hash, blob: d.subarray(base + off, base + off + size) });
  }
  return out;
}

// ------------------------------------------------------------------ GX textures
export function texHeader(blob) {
  const dv = be(blob);
  return { mips: dv.getUint32(0), fmt: dv.getUint32(4), w: dv.getUint16(14), h: dv.getUint16(16) };
}
const rgb565 = (c) => [Math.floor(((c >> 11) & 31) * 255 / 31), Math.floor(((c >> 5) & 63) * 255 / 63), Math.floor((c & 31) * 255 / 31)];
const to565 = (r, g, b) => (Math.min(31, Math.floor((r * 31 + 127) / 255)) << 11) | (Math.min(63, Math.floor((g * 63 + 127) / 255)) << 5) | Math.min(31, Math.floor((b * 31 + 127) / 255));
function cmprPalette(c0, c1) {
  const a = rgb565(c0), b = rgb565(c1);
  if (c0 > c1) return [[...a, 255], [...b, 255], [0, 1, 2].map((k) => Math.floor((2 * a[k] + b[k]) / 3)).concat(255), [0, 1, 2].map((k) => Math.floor((a[k] + 2 * b[k]) / 3)).concat(255)];
  return [[...a, 255], [...b, 255], [0, 1, 2].map((k) => Math.floor((a[k] + b[k]) / 2)).concat(255), [0, 0, 0, 0]];
}
function rgb5a3(c) {
  if (c & 0x8000) return [Math.floor(((c >> 10) & 31) * 255 / 31), Math.floor(((c >> 5) & 31) * 255 / 31), Math.floor((c & 31) * 255 / 31), 255];
  return [((c >> 8) & 15) * 17, ((c >> 4) & 15) * 17, (c & 15) * 17, Math.floor(((c >> 12) & 7) * 255 / 7)];
}
// -> { w, h, px: Uint8ClampedArray RGBA } (level 0)
export function decodeTex(blob) {
  const { fmt, w, h } = texHeader(blob), dv = be(blob), px = new Uint8ClampedArray(w * h * 4);
  if (fmt === 8) {
    const pal = []; for (let i = 0; i < 256; i++) pal.push(rgb5a3(dv.getUint16(blob.length - 512 + 2 * i)));
    let o = 32;
    for (let ty = 0; ty < h; ty += 4) for (let tx = 0; tx < w; tx += 8)
      for (let y = 0; y < 4; y++) for (let x = 0; x < 8; x++) {
        const c = pal[blob[o++]], p = ((ty + y) * w + tx + x) * 4; px.set(c, p);
      }
  } else if (fmt === 2) {
    let o = 32;
    for (let ty = 0; ty < h; ty += 8) for (let tx = 0; tx < w; tx += 8)
      for (const sy of [0, 4]) for (const sx of [0, 4]) {
        const c0 = dv.getUint16(o), c1 = dv.getUint16(o + 2), bits = dv.getUint32(o + 4); o += 8;
        const pal = cmprPalette(c0, c1);
        for (let i = 0; i < 16; i++) {
          const y = ty + sy + (i >> 2), x = tx + sx + (i & 3);
          if (y < h && x < w) px.set(pal[(bits >>> (30 - 2 * i)) & 3], (y * w + x) * 4);
        }
      }
  } else if (fmt === 1) {   // RGB5A3, 4x4 tiles
    let o = 32;
    for (let ty = 0; ty < h; ty += 4) for (let tx = 0; tx < w; tx += 4)
      for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) {
        const c = rgb5a3(dv.getUint16(o)); o += 2;
        if (ty + y < h && tx + x < w) px.set(c, ((ty + y) * w + tx + x) * 4);
      }
  } else if (fmt === 3) {   // RGBA8, 4x4 tiles: 16 AR pairs, then 16 GB pairs
    let o = 32;
    for (let ty = 0; ty < h; ty += 4) for (let tx = 0; tx < w; tx += 4) {
      for (let i = 0; i < 16; i++) {
        const y = ty + (i >> 2), x = tx + (i & 3);
        if (y < h && x < w) { const p = (y * w + x) * 4; px[p + 3] = blob[o + 2 * i]; px[p] = blob[o + 2 * i + 1]; px[p + 1] = blob[o + 32 + 2 * i]; px[p + 2] = blob[o + 33 + 2 * i]; }
      }
      o += 64;
    }
  } else throw new Error('texture format ' + fmt);
  return { w, h, px };
}
const toRgb5a3 = (r, g, b, a) => a >= 0xE0
  ? 0x8000 | (Math.round(r * 31 / 255) << 10) | (Math.round(g * 31 / 255) << 5) | Math.round(b * 31 / 255)
  : (Math.round(a * 7 / 255) << 12) | (Math.round(r * 15 / 255) << 8) | (Math.round(g * 15 / 255) << 4) | Math.round(b * 15 / 255);
// Any of the formats the game's character textures use: 2 CMPR, 1 RGB5A3, 3 RGBA8 (the template
// header's format is kept, so a picture goes back as the game had it).
export function encodeTex(px, w, h, templateHeader, mips = 1) {
  const fmt = be(templateHeader).getUint32(4);
  if (fmt !== 1 && fmt !== 3) return encodeCmpr(px, w, h, templateHeader, mips);
  const parts = []; let level = px, lw = w, lh = h, levels = 0;
  while (levels < mips && lw >= 4 && lh >= 4) {
    const out = new Uint8Array(lw * lh * (fmt === 1 ? 2 : 4)), dv = be(out); let o = 0;
    for (let ty = 0; ty < lh; ty += 4) for (let tx = 0; tx < lw; tx += 4) {
      if (fmt === 1) for (let i = 0; i < 16; i++) { const p = ((ty + (i >> 2)) * lw + tx + (i & 3)) * 4; dv.setUint16(o, toRgb5a3(level[p], level[p + 1], level[p + 2], level[p + 3])); o += 2; }
      else { for (let i = 0; i < 16; i++) { const p = ((ty + (i >> 2)) * lw + tx + (i & 3)) * 4; out[o + 2 * i] = level[p + 3]; out[o + 2 * i + 1] = level[p]; out[o + 32 + 2 * i] = level[p + 1]; out[o + 33 + 2 * i] = level[p + 2]; } o += 64; }
    }
    parts.push(out); levels++;
    level = half(level, lw, lh); lw >>= 1; lh >>= 1;
  }
  const hdr = new Uint8Array(32); hdr.set(templateHeader.subarray(0, 32));
  const hv = be(hdr); hv.setUint32(0, levels); hv.setUint16(14, w); hv.setUint16(16, h);
  return concat([hdr, ...parts]);
}
function encodeBlock(block, out, o) {
  // 16 RGBA pixels -> 8 bytes of CMPR (opaque: 4 colours; any transparent pixel: 3 + alpha)
  const dv = be(out);
  const opaque = block.filter((p) => p[3] >= 128);
  if (!opaque.length) { dv.setUint16(o, 0); dv.setUint16(o + 2, 0); dv.setUint32(o + 4, 0xFFFFFFFF); return; }
  let axis = 0, best = -1;
  for (let k = 0; k < 3; k++) {
    let mn = 255, mx = 0; for (const p of opaque) { mn = Math.min(mn, p[k]); mx = Math.max(mx, p[k]); }
    if (mx - mn > best) { best = mx - mn; axis = k; }
  }
  const key = (p) => [p[axis], p[0] + p[1] + p[2]];
  const cmp = (a, b) => { const x = key(a), y = key(b); return x[0] - y[0] || x[1] - y[1]; };
  let lo = opaque[0], hi = opaque[0];
  for (const p of opaque) { if (cmp(p, lo) < 0) lo = p; if (cmp(p, hi) > 0) hi = p; }
  let cHi = to565(hi[0], hi[1], hi[2]), cLo = to565(lo[0], lo[1], lo[2]);
  const transparent = opaque.length < 16;
  let c0, c1;
  if (transparent) [c0, c1] = cLo <= cHi ? [cLo, cHi] : [cHi, cLo];
  else {
    if (cHi === cLo) { cLo = cLo > 0 ? cLo - 1 : cLo; if (cHi === cLo) cHi += 1; }
    [c0, c1] = cHi > cLo ? [cHi, cLo] : [cLo, cHi];
  }
  const pal = cmprPalette(c0, c1);
  let bits = 0;
  for (let i = 0; i < 16; i++) {
    const p = block[i]; let idx;
    if (p[3] < 128 && transparent) idx = 3;
    else {
      const n = transparent ? 3 : 4; let bd = Infinity; idx = 0;
      for (let k = 0; k < n; k++) {
        const d = (p[0] - pal[k][0]) ** 2 + (p[1] - pal[k][1]) ** 2 + (p[2] - pal[k][2]) ** 2;
        if (d < bd) { bd = d; idx = k; }
      }
    }
    bits = (bits | (idx << (30 - 2 * i))) >>> 0;
  }
  dv.setUint16(o, c0); dv.setUint16(o + 2, c1); dv.setUint32(o + 4, bits);
}
function half(px, w, h) {
  const W = w >> 1, H = h >> 1, out = new Uint8ClampedArray(W * H * 4);
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) for (let k = 0; k < 4; k++) {
    let s = 0;
    for (const dy of [0, 1]) for (const dx of [0, 1]) s += px[((2 * y + dy) * w + 2 * x + dx) * 4 + k];
    out[(y * W + x) * 4 + k] = s >> 2;
  }
  return out;
}
// A CMPR texture with `mips` levels; header (first 32 bytes) taken from a game texture.
export function encodeCmpr(px, w, h, templateHeader, mips = 1) {
  const parts = []; let level = px, lw = w, lh = h, levels = 0;
  while (levels < mips && lh >= 8 && lw >= 8) {
    const out = new Uint8Array((lw / 8) * (lh / 8) * 32); let o = 0;
    for (let ty = 0; ty < lh; ty += 8) for (let tx = 0; tx < lw; tx += 8)
      for (const sy of [0, 4]) for (const sx of [0, 4]) {
        const block = [];
        for (let i = 0; i < 16; i++) { const p = ((ty + sy + (i >> 2)) * lw + tx + sx + (i & 3)) * 4; block.push([level[p], level[p + 1], level[p + 2], level[p + 3]]); }
        encodeBlock(block, out, o); o += 8;
      }
    parts.push(out); levels++;
    level = half(level, lw, lh); lw >>= 1; lh >>= 1;
  }
  const hdr = new Uint8Array(32); hdr.set(templateHeader.subarray(0, 32));
  const dv = be(hdr); dv.setUint32(0, levels); dv.setUint32(4, 2); dv.setUint16(14, w); dv.setUint16(16, h);
  return concat([hdr, ...parts]);
}

// ------------------------------------------------------------------ PNG (RGBA 8-bit)
const CRC = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
export function crc32(u8, c = 0xFFFFFFFF) { for (const b of u8) c = CRC[(c ^ b) & 255] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; }
export function encodePng(px, w, h) {
  const raw = new Uint8Array((w * 4 + 1) * h);
  for (let y = 0; y < h; y++) { raw[y * (w * 4 + 1)] = 0; raw.set(px.subarray(y * w * 4, (y + 1) * w * 4), y * (w * 4 + 1) + 1); }
  const ck = (type, data) => {
    const t = new TextEncoder().encode(type), out = new Uint8Array(12 + data.length), dv = be(out);
    dv.setUint32(0, data.length); out.set(t, 4); out.set(data, 8); dv.setUint32(8 + data.length, crc32(concat([t, data]))); return out;
  };
  const ihdr = new Uint8Array(13), dv = be(ihdr); dv.setUint32(0, w); dv.setUint32(4, h); ihdr.set([8, 6, 0, 0, 0], 8);
  return concat([new Uint8Array([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]), ck('IHDR', ihdr), ck('IDAT', zlibSync(raw, { level: 6 })), ck('IEND', new Uint8Array(0))]);
}
// -> { w, h, px } RGBA; 8/16-bit grey, grey+alpha, RGB, RGBA and palette, not interlaced
export function decodePng(u8) {
  const dv = be(u8);
  if (dv.getUint32(0) !== 0x89504E47) throw new Error('not a PNG');
  let o = 8, w = 0, h = 0, depth = 8, ctype = 6, interlace = 0, pal = null, trns = null; const idat = [];
  while (o < u8.length) {
    const n = dv.getUint32(o), type = String.fromCharCode(...u8.subarray(o + 4, o + 8)), d = u8.subarray(o + 8, o + 8 + n);
    if (type === 'IHDR') { w = be(d).getUint32(0); h = be(d).getUint32(4); depth = d[8]; ctype = d[9]; interlace = d[12]; }
    else if (type === 'PLTE') pal = d; else if (type === 'tRNS') trns = d; else if (type === 'IDAT') idat.push(d);
    else if (type === 'IEND') break;
    o += 12 + n;
  }
  if (interlace) throw new Error('interlaced PNGs are not supported: save it without interlacing');
  if (depth !== 8 && depth !== 16 && !(ctype === 3 && depth <= 8)) throw new Error('PNG bit depth ' + depth + ' not supported');
  const chans = { 0: 1, 2: 3, 3: 1, 4: 2, 6: 4 }[ctype];
  const bpp = Math.max(1, (chans * depth) >> 3), stride = Math.ceil(w * chans * depth / 8);
  const raw = unzlibSync(concat(idat)), rows = new Uint8Array(stride * h);
  let prev = new Uint8Array(stride);
  for (let y = 0; y < h; y++) {
    const ft = raw[y * (stride + 1)], line = raw.subarray(y * (stride + 1) + 1, (y + 1) * (stride + 1)), cur = new Uint8Array(stride);
    for (let i = 0; i < stride; i++) {
      const a = i >= bpp ? cur[i - bpp] : 0, b = prev[i], c = i >= bpp ? prev[i - bpp] : 0; let v = line[i];
      if (ft === 1) v += a; else if (ft === 2) v += b; else if (ft === 3) v += (a + b) >> 1;
      else if (ft === 4) { const p = a + b - c, pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c); v += pa <= pb && pa <= pc ? a : pb <= pc ? b : c; }
      cur[i] = v;
    }
    rows.set(cur, y * stride); prev = cur;
  }
  const px = new Uint8ClampedArray(w * h * 4);
  const sample = (y, x, k) => {
    if (depth === 16) return rows[y * stride + (x * chans + k) * 2];
    if (depth === 8) return rows[y * stride + x * chans + k];
    const bit = x * depth, byte = rows[y * stride + (bit >> 3)]; return (byte >> (8 - depth - (bit & 7))) & ((1 << depth) - 1);
  };
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const p = (y * w + x) * 4;
    if (ctype === 6) { for (let k = 0; k < 4; k++) px[p + k] = sample(y, x, k); }
    else if (ctype === 2) { for (let k = 0; k < 3; k++) px[p + k] = sample(y, x, k); px[p + 3] = 255; }
    else if (ctype === 0) { const g = sample(y, x, 0); px[p] = px[p + 1] = px[p + 2] = g; px[p + 3] = 255; }
    else if (ctype === 4) { const g = sample(y, x, 0); px[p] = px[p + 1] = px[p + 2] = g; px[p + 3] = sample(y, x, 1); }
    else if (ctype === 3) { const i = sample(y, x, 0); px[p] = pal[3 * i]; px[p + 1] = pal[3 * i + 1]; px[p + 2] = pal[3 * i + 2]; px[p + 3] = trns && i < trns.length ? trns[i] : 255; }
  }
  return { w, h, px };
}
export function resizeBilinear(px, sw, sh, w, h) {
  const out = new Uint8ClampedArray(w * h * 4);
  for (let y = 0; y < h; y++) {
    const fy = (y + 0.5) * sh / h - 0.5, y0 = Math.max(0, Math.min(sh - 1, Math.floor(fy))), y1 = Math.min(sh - 1, y0 + 1), wy = Math.min(1, Math.max(0, fy - y0));
    for (let x = 0; x < w; x++) {
      const fx = (x + 0.5) * sw / w - 0.5, x0 = Math.max(0, Math.min(sw - 1, Math.floor(fx))), x1 = Math.min(sw - 1, x0 + 1), wx = Math.min(1, Math.max(0, fx - x0));
      for (let k = 0; k < 4; k++) {
        const g = (yy, xx) => px[(yy * sw + xx) * 4 + k];
        out[(y * w + x) * 4 + k] = Math.round((g(y0, x0) * (1 - wx) + g(y0, x1) * wx) * (1 - wy) + (g(y1, x0) * (1 - wx) + g(y1, x1) * wx) * wy);
      }
    }
  }
  return out;
}

// ------------------------------------------------------------------ models (.rlg)
export function stripTris(idx) {
  const out = [];
  for (let i = 0; i + 2 < idx.length; i++) {
    const a = idx[i], b = idx[i + 1], c = idx[i + 2];
    if (a !== b && b !== c && a !== c) out.push(i % 2 === 0 ? [a, b, c] : [b, a, c]);
  }
  return out;
}
export function loadRlg(t) {
  const ch = chunks(t), dv = be(t);
  const [po, ps] = ch.get(0x1B004)[0], [so] = ch.get(0x1B005)[0], [vo] = ch.get(0x1B006)[0], [io] = ch.get(0x1B007)[0];
  const pdo = ch.has(0x1B016) ? ch.get(0x1B016)[0][0] : null;
  const maps = (ch.get(0x1B00B) || []).map(([o, s]) => { const m = []; for (let i = 0; i < s / 4; i++) m.push(dv.getUint32(o + 4 * i)); return m; });
  const bones = new Map();
  if (ch.has(0x1B00A)) {
    const [bo, bs] = ch.get(0x1B00A)[0];
    for (let i = 0; i < bs / 0x44; i++) {
      const e = bo + i * 0x44, m = new Float64Array(16);
      for (let k = 0; k < 16; k++) m[k] = dv.getFloat32(e + 4 + 4 * k);
      bones.set(dv.getUint32(e), m);
    }
  }
  const packets = [];
  for (let p = 0; p < ps / 0x30; p++) {
    const b = po + p * 0x30;
    const ib = dv.getUint32(b), ni = dv.getUint32(b + 4), nv = dv.getUint16(b + 8), prim = t[b + 10], ns = t[b + 11], stoff = dv.getUint32(b + 12), paramOff = dv.getUint32(b + 32);
    const idx = []; for (let i = 0; i < ni; i++) idx.push(dv.getUint16(io + ib + 2 * i));
    const pk = { prim, idx, nv, uvs: [], map: maps[p] || [], morphs: new Map() };
    for (let s = 0; s < ns; s++) {
      const e = so + stoff + s * 8, a = dv.getUint32(e), stride = t[e + 5], kind = t[e + 6], base = vo + a;
      if (kind === 1 || kind === 2) {
        const arr = new Float64Array(nv * 3);
        if (stride === 12) for (let i = 0; i < nv * 3; i++) arr[i] = dv.getFloat32(base + 4 * i);
        else if (stride === 3) for (let i = 0; i < nv * 3; i++) arr[i] = dv.getInt8(base + i) / 64;      // stadiums: packed normals
        else if (stride === 6) for (let i = 0; i < nv * 3; i++) arr[i] = dv.getInt16(base + 2 * i) / 16384;
        pk[kind === 1 ? 'pos' : 'nrm'] = arr;
        if (kind === 2) pk.nrmStride = stride;
      } else if (kind === 3) {   // vertex colour, RGBA8 (stadiums: baked lighting)
        pk.col = t.slice(base, base + nv * 4);
      } else if (kind === 4) {
        const arr = new Float64Array(nv * 2); for (let i = 0; i < nv * 2; i++) arr[i] = dv.getInt16(base + 2 * i) / 1024; pk.uvs.push(arr);
      } else if (kind === 5) {
        const arr = new Float64Array(nv * 4); for (let i = 0; i < nv * 4; i++) arr[i] = dv.getFloat32(base + 4 * i); pk.bw = arr;
      } else if (kind === 7) pk.bi = t.slice(base, base + nv * 4);
    }
    pk.tex = pdo !== null ? dv.getUint32(pdo + paramOff) : 0;
    packets.push(pk);
  }
  // face shapes: n, n ids, delta size, packet count; per packet, per morph: count + (dx, dy, dz, vertex)
  if (ch.has(0x1B00C)) {
    const [o] = ch.get(0x1B00C)[0], nm = dv.getUint32(o);
    if (nm) {
      let i = o + 4 + 4 * nm; const dsz = dv.getUint32(i), npk = dv.getUint32(i + 4); i += 8;
      for (let p = 0; p < npk; p++) for (let m = 0; m < nm; m++) {
        const c = dv.getUint32(i); i += 4;
        if (c && p < packets.length) {
          const vi = new Int32Array(c), dl = new Float64Array(c * 3);
          for (let k = 0; k < c; k++) { const r = i + k * dsz; for (let j = 0; j < 3; j++) dl[k * 3 + j] = dv.getFloat32(r + 4 * j); vi[k] = dv.getUint32(r + 12); }
          packets[p].morphs.set(m, { vi, dl });
        }
        i += c * dsz;
      }
    }
  }
  return { packets, bones };
}

// ------------------------------------------------------------------ 4x4 (row-major, row vectors)
export const eye4 = () => Float64Array.from([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
export function mul4(a, b) {
  const o = new Float64Array(16);
  for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) { let s = 0; for (let k = 0; k < 4; k++) s += a[i * 4 + k] * b[k * 4 + j]; o[i * 4 + j] = s; }
  return o;
}
export function inv4(m) {
  const a = []; for (let i = 0; i < 4; i++) a.push([...m.slice(i * 4, i * 4 + 4), ...[0, 1, 2, 3].map((j) => (i === j ? 1 : 0))]);
  for (let c = 0; c < 4; c++) {
    let p = c; for (let r = c + 1; r < 4; r++) if (Math.abs(a[r][c]) > Math.abs(a[p][c])) p = r;
    [a[c], a[p]] = [a[p], a[c]];
    const pv = a[c][c]; a[c] = a[c].map((x) => x / pv);
    for (let r = 0; r < 4; r++) if (r !== c && a[r][c] !== 0) { const f = a[r][c]; a[r] = a[r].map((x, k) => x - f * a[c][k]); }
  }
  const o = new Float64Array(16); for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) o[i * 4 + j] = a[i][4 + j];
  return o;
}
// Z up (game) -> Y up (glTF), row vectors: (x, y, z) -> (x, z, -y)
export const ZUP_TO_YUP = Float64Array.from([1, 0, 0, 0, 0, 0, -1, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
