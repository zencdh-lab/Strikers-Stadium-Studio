// Bringing props across stadiums: every prop kind of every stadium can be gathered (models,
// textures, skeleton and animations), the texture list is rewritten in the game's own layout, and
// a prop added to The Palace leaves both files readable. GAME=<files folder> node tests/propimport.test.mjs
import fs from 'fs';
import { unpackZlib, packZlib, parseWorld } from '../src/stadium.js';
import { boneNames, readTextures } from '../src/formats.js';
import { parseScene, KIND } from '../src/scene.js';
import { tree } from '../src/anim.js';
import { propKinds, propNeeds, addProp, addTextures } from '../src/propimport.js';
const G = (process.env.GAME || '') + '/';
const names = boneNames(new Uint8Array(fs.readFileSync(G + 'Art/hashid.bin')));
const load = (st) => { const world = parseWorld(new Uint8Array(fs.readFileSync(G + `Art/environments/${st}/gameworld.tmp.zlib`)), names), res = unpackZlib(new Uint8Array(fs.readFileSync(G + `Art/environments/${st}/gameworld.res.zlib`))); return { world, res, scene: parseScene(res, names), names }; };
const all = fs.readdirSync(G + 'Art/environments').filter((s) => fs.existsSync(G + `Art/environments/${s}/gameworld.res.zlib`));
let kinds = 0;
for (const st of all) {
  const s = load(st), t = s.world.textures, o = addTextures(t, new Map());
  if (o.length !== t.length || o.some((x, i) => x !== t[i])) throw new Error(`${st}: texture list not rewritten byte for byte`);
  for (const k of propKinds(s.scene)) { const n = propNeeds(s, k.i); if (!n.skeleton || !n.models.length) throw new Error(`${st} ${k.kind}: missing skeleton or model`); kinds++; }
}
const tgt = load('thepalace'), src = load('kongacoliseum'), k = propKinds(src.scene).find((x) => /catgrass/.test(x.kind));
const r = addProp(tgt, src, k.i, src.scene.recs[k.i].m);
const w2 = parseWorld(packZlib(r.tmp), names), s2 = parseScene(r.res, names), tx = readTextures(w2.textures).map((e) => e.hash);
if (w2.models.length !== tgt.world.models.length + r.added.models) throw new Error('model not added');
if (tx.some((h, i) => i && tx[i - 1] >= h)) throw new Error('texture list not sorted');
if (s2.recs.length !== s2.count || !s2.recs.some((x) => x.name === r.name && x.kind === KIND.PROXY)) throw new Error('prop not in the object list');
if (new DataView(r.res.buffer).getUint32(4) + 8 !== r.res.length || tree(r.res)[0].children.filter((c) => c.type === 0x80018000).length !== tree(tgt.res)[0].children.filter((c) => c.type === 0x80018000).length + 1) throw new Error('skeleton not added');
console.log(`ok   ${kinds} prop kinds in ${all.length} stadiums can be brought across; ${r.name} added to The Palace with ${r.added.models} model, ${r.added.textures} textures, ${r.added.animations} animations`);
