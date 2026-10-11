// The settings writer keeps every line it doesn't change. GAME=<files folder> node tests/ini.test.mjs
import fs from 'fs';
import { parseIni, iniGet, iniSet } from '../src/ini.js';
const dir = (process.env.GAME || '') + '/ini/Stadiums/';
let n = 0;
for (const f of fs.readdirSync(dir)) {
  const t = fs.readFileSync(dir + f, 'latin1');
  if (iniSet(t, []) !== t) throw new Error('changed with no edits: ' + f);
  const out = iniSet(t, [['Render/Fog', 'Fog Start', '12.5'], ['Render/Crowd/Layout', 'Distance Between Crowd Rows', '1.10']]);
  const p = parseIni(out);
  if (iniGet(p, 'Render/Fog', 'Fog Start') !== '12.5' || iniGet(p, 'render/crowd/layout', 'distance between crowd rows') !== '1.10') throw new Error('not set: ' + f);
  const a = t.split(/\r?\n/), b = out.split(/\r?\n/);
  if (!a.filter((l) => !/^\s*(Fog Start|Distance Between Crowd Rows)\s*=/i.test(l)).every((l) => b.includes(l))) throw new Error('lost a line: ' + f);
  n++;
}
console.log(`ok   ${n} stadium settings files: edits keep every other line`);
