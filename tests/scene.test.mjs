// Every stadium's object list reads (one record per object the file counts), and a moved and a
// copied prop write back with nothing else changed. GAME=<files folder> node tests/scene.test.mjs
import fs from 'fs';
import { unpackZlib } from '../src/stadium.js';
import { boneNames, nlHash } from '../src/formats.js';
import { parseScene, setMatrix, withPlace, copyProp, freeName, KIND } from '../src/scene.js';
const G = (process.env.GAME || '') + '/';
const names = boneNames(new Uint8Array(fs.readFileSync(G + 'Art/hashid.bin')));
let n = 0;
for (const st of fs.readdirSync(G + 'Art/environments')) {
  const p = G + `Art/environments/${st}/gameworld.res.zlib`; if (!fs.existsSync(p)) continue;
  const res = unpackZlib(new Uint8Array(fs.readFileSync(p))), s = parseScene(res, names);
  if (s.recs.length !== s.count) throw new Error(`${st}: ${s.recs.length} records, the file counts ${s.count}`);
  const prop = s.recs.find((r) => r.kind === KIND.PROXY && r.name && r.binding != null);
  if (prop) {
    const w = res.slice(); setMatrix(w, prop, withPlace(prop, { x: 1, y: 2, z: 3, turn: 30 }));
    const name = freeName(s, prop.name), m = prop.m.slice(); m[12] += 2;
    const out = copyProp(w, s, prop.i, name, m), s2 = parseScene(out, { get: (h) => names.get(h) || (h === nlHash(name) ? name : undefined) });
    const kids = (prop.kids || []).length;
    if (s2.count !== s.count + 2 + kids || s2.recs.length !== s2.count) throw new Error(`${st}: copy has ${s2.recs.length}/${s2.count} records`);
    const c = s2.recs.find((r) => r.name === name); if (!c || Math.abs(c.m[12] - (prop.m[12] + 2)) > 1e-4) throw new Error(`${st}: copy not found`);
    for (const r of s.recs) { if (r.i === prop.i || r.kind === KIND.BINDING) continue; const q = s2.recs.find((x) => x.hash === r.hash && x.kind === r.kind); const a = res.subarray(r.off, r.end), b = out.subarray(q.off, q.end); if (a.length !== b.length || a.some((x, i) => x !== b[i])) throw new Error(`${st}: ${r.name} changed`); }
  }
  n++;
}
console.log(`ok   ${n} stadium object lists read; moving and copying a prop keeps everything else`);
