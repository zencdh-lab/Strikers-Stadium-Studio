// Bringing a stadium back from Blender: The Palace exported and brought straight back gives the
// game's files byte for byte; pieces renamed (so all are rebuilt) and a whole new stadium (when
// MSM=<a converted .glb> is given) give files that read back with every piece and record.
// GAME=<files folder> [MSM=<file.glb>] node tests/stadiumimport.test.mjs
import fs from 'fs';
import { parseWorld, exportStadiumGlb, unpackZlib, packZlib } from '../src/stadium.js';
import { boneNames, decodePng, readTextures, loadRlg } from '../src/formats.js';
import { GLB } from '../src/import.js';
import { importStadium } from '../src/stadiumimport.js';
import { parseScene } from '../src/scene.js';
const G = (process.env.GAME || '') + '/';
const names = boneNames(new Uint8Array(fs.readFileSync(G + 'Art/hashid.bin')));
const world = parseWorld(new Uint8Array(fs.readFileSync(G + 'Art/environments/thepalace/gameworld.tmp.zlib')), names);
const res = unpackZlib(new Uint8Array(fs.readFileSync(G + 'Art/environments/thepalace/gameworld.res.zlib')));
const images = (u8) => { const g = new GLB(u8), m = new Map(); (g.j.images || []).forEach((im, i) => m.set(i, decodePng(g.view(im.bufferView).raw))); return m; };
const same = (a, b) => a.length === b.length && a.every((x, i) => x === b[i]);
const { glb } = exportStadiumGlb({ world, names, only: [0] });
const r1 = importStadium({ glb, world, res, images: images(glb), names, opts: { stadium: 'thepalace' } });
if (!same(r1.tmp, world.tmp) || !same(r1.res, res)) throw new Error('round trip changed the files');
console.log('ok   The Palace out and straight back: both files byte for byte the same');
const check = (label, r) => {
  const w = parseWorld(packZlib(r.tmp), names), s = parseScene(r.res, names);
  if (s.recs.length !== s.count) throw new Error(label + ': object list');
  const n = loadRlg(w.models[0].rlg).packets.length, objs = w.models[0].objects;
  if (objs.reduce((a, o) => a + o.count, 0) !== n) throw new Error(label + ': objects and pieces');
  // every object is placed by a record (a piece, the sky, or one the game uses itself, like the goal nets),
  // and every record that names one of the stadium's objects finds it
  const ref = (sc, buf) => sc.recs.filter((x) => x.end - x.off >= 104).map((x) => new DataView(buf.buffer, buf.byteOffset).getUint32(x.off + 100));
  const placed = new Set(ref(s, r.res)), have = new Set(objs.map((o) => o.hash));
  const miss = objs.filter((o) => !placed.has(o.hash)); if (miss.length > 1) throw new Error(label + ': ' + miss.length + ' objects without a record');
  const old0 = new Set(world.models[0].objects.map((o) => o.hash));
  const lost = ref(s, r.res).filter((h) => old0.has(h) && !have.has(h)); if (lost.length) throw new Error(label + ': ' + lost.length + ' records name an object that is gone');
  const tx = readTextures(w.textures).map((e) => e.hash); if (tx.some((h, i) => i && tx[i - 1] >= h)) throw new Error(label + ': textures not sorted');
  console.log(`ok   ${label}: ${n} pieces in ${objs.length} objects, ${s.count} records, ${(r.tmp.length / 1e6).toFixed(2)} MB`);
};
const j = JSON.parse(JSON.stringify(new GLB(glb).j)); for (const nd of j.nodes) if (nd.name) nd.name = nd.name.replace('m0_piece', 'x_piece');
const g2 = new GLB(glb); const js = new TextEncoder().encode(JSON.stringify(j)); const pad = (4 - js.length % 4) % 4;
const bin = g2.bin, out = new Uint8Array(12 + 8 + js.length + pad + 8 + bin.length), dv = new DataView(out.buffer);
dv.setUint32(0, 0x46546C67, true); dv.setUint32(4, 2, true); dv.setUint32(8, out.length, true); dv.setUint32(12, js.length + pad, true); dv.setUint32(16, 0x4E4F534A, true); out.set(js, 20); out.fill(32, 20 + js.length, 20 + js.length + pad);
const bo = 20 + js.length + pad; dv.setUint32(bo, bin.length, true); dv.setUint32(bo + 4, 0x004E4942, true); out.set(bin, bo + 8);
check('The Palace rebuilt piece by piece', importStadium({ glb: out, world, res, images: images(out), names, opts: { stadium: 'thepalace' } }));
check('The Palace rebuilt, placed like the original pieces', importStadium({ glb, world, res, images: images(glb), names, opts: { stadium: 'thepalace', rebuildAll: true } }));
if (process.env.MSM) { const m = new Uint8Array(fs.readFileSync(process.env.MSM)); check('a Sports Mix court in The Palace', importStadium({ glb: m, world, res, images: images(m), names, opts: { stadium: 'thepalace', maxTexture: 256 } })); }
