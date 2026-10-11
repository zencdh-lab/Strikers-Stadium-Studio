// Bring a prop from one stadium into another: its models and their textures (gameworld.tmp), its
// skeleton and animations (gameworld.res), and its records in the object list (renamed when the
// name is taken).
import { be, readTextures, nlHash, concat, walkLevel, chunk } from './formats.js';
import { tree } from './anim.js';
import { KIND, propRecords, insertRecords, freeName, parseScene } from './scene.js';

// the prop kinds a stadium has: [{ kind (name without its number), i (its first prop), count }]
export function propKinds(scene) {
  const by = new Map();
  for (const r of scene.recs) if (r.kind === KIND.PROXY && r.name && r.parent == null) {
    const k = r.name.replace(/\d+$/, '').replace(/_+$/, '');
    if (!by.has(k)) by.set(k, { kind: k, i: r.i, count: 0 }); by.get(k).count++;
  }
  return [...by.values()];
}

// what a prop needs from its stadium's files
export function propNeeds(src, i) {
  const { world, scene, res } = src, p = scene.recs[i];
  const kids = []; const go = (j) => { for (const k of scene.recs[j].kids || []) { kids.push(k); go(k); } }; go(i);
  const objOf = new Map(); world.models.forEach((m, mi) => { for (const o of m.objects || []) objOf.set(o.hash, mi); });
  const models = new Set();
  for (const k of kids) { const r = scene.recs[k]; if (r.kind === KIND.PIECE) { const mi = objOf.get(r.piece); if (mi === 0) throw new Error(`${p.name} is drawn as part of the stadium itself, so it can't be taken out.`); if (mi != null) models.add(mi); } }
  // textures: any texture hash the models' material data mention (and an animated texture's frames)
  const tex = new Map(readTextures(world.textures).map((e) => [e.hash, e.blob])), want = new Map();
  const addTex = (h) => {
    if (want.has(h) || !tex.has(h)) return; const b = tex.get(h); want.set(h, b);
    if (b.length >= 36 && b[0] === 0x5f && b[1] === 0x6c && b[2] === 0x66 && b[3] === 0x69) { const dv = be(b), n = dv.getUint32(8); for (let f = 0; f < n && 44 + 8 * f <= b.length; f++) addTex(dv.getUint32(36 + 8 * f)); }
  };
  for (const mi of models) { const rlg = world.models[mi].rlg, dv = be(rlg); for (let o = 0; o + 4 <= rlg.length; o += 4) addTex(dv.getUint32(o)); }
  // skeleton: the one whose bones are the prop's parts (the binding's short names)
  const short = new Set();
  if (p.binding != null) { const b = scene.recs[p.binding], dv = be(res); for (let o = b.off + 32; o + 8 <= b.end; o += 8) short.add(dv.getUint32(o + 4)); }
  for (const k of kids) { const n = scene.recs[k].name; if (n) short.add(nlHash(n.slice(n.lastIndexOf('/') + 1))); }
  const top = tree(res)[0].children, chunks = [];
  let skel = null, best = 0;
  top.forEach((c, ci) => {
    if (c.type !== 0x80018000) return;
    const hs = c.children.find((x) => x.type === 0x18003); if (!hs) return;
    const dv = be(hs.data), bones = new Set(); for (let o = 0; o + 4 <= hs.data.length; o += 4) bones.add(dv.getUint32(o));
    let hit = 0; for (const h of short) if (bones.has(h)) hit++;
    if (hit > best) { best = hit; skel = ci; }
  });
  let skelName = null;
  if (skel != null) {
    const raw = (c) => res.subarray(c.off, (c.off + 8 + be(res).getUint32(c.off + 4) + 3) & ~3);
    chunks.push(raw(top[skel]));
    const nm = top[skel].children.find((x) => x.type === 0x18002); if (nm) skelName = new TextDecoder('latin1').decode(nm.data).split('\0')[0];
    for (let ci = skel + 1; ci < top.length && top[ci].type === 0x80017000; ci++) chunks.push(raw(top[ci]));
  }
  return { models: [...models].map((mi) => world.models[mi]), textures: want, skeleton: skelName, resChunks: chunks };
}

// -> { tmp, res, name, names: [full names of the new records], added: { models, textures, animations } }
export function addProp(target, src, i, m) {
  const need = propNeeds(src, i), p = src.scene.recs[i];
  // models and textures into gameworld.tmp
  const haveModel = new Set(target.world.models.map((x) => x.id)), newModels = need.models.filter((x) => !haveModel.has(x.id));
  const haveTex = new Set(readTextures(target.world.textures).map((e) => e.hash)), newTex = new Map([...need.textures].filter(([h]) => !haveTex.has(h)));
  let tmp = target.world.tmp;
  if (newModels.length || newTex.size) {
    const [rootId, ro, rs] = walkLevel(tmp, 0, tmp.length)[0];
    const body = walkLevel(tmp, ro, ro + rs).map(([cid, o, sz]) => {
      if (cid === 0x24100) return chunk(cid, newTex.size ? addTextures(tmp.subarray(o, o + sz), newTex) : tmp.subarray(o, o + sz));
      if (cid === 0x8001B100) return chunk(cid, concat([tmp.subarray(o, o + sz), ...newModels.map((x) => pad4(x.rlg))]));
      return chunk(cid, tmp.subarray(o, o + sz));
    });
    tmp = chunk(rootId, concat(body));
  }
  // skeleton and animations into gameworld.res (after everything, so nothing else moves)
  let res = target.res;
  const haveSkel = new Set(tree(res)[0].children.filter((c) => c.type === 0x80018000).map((c) => { const n = c.children.find((x) => x.type === 0x18002); return n ? new TextDecoder('latin1').decode(n.data).split('\0')[0] : ''; }));
  let anims = 0;
  if (need.skeleton && !haveSkel.has(need.skeleton) && need.resChunks.length) {
    const add = concat(need.resChunks), out = new Uint8Array(res.length + add.length);
    out.set(res, 0); out.set(add, res.length); be(out).setUint32(4, be(out).getUint32(4) + add.length);
    res = out; anims = need.resChunks.length - 1;
  }
  // the records, under a free name
  const scene = parseScene(res, target.names);
  const used = new Set(scene.recs.map((r) => r.hash));
  const name = used.has(nlHash(p.name)) ? freeName(scene, p.name) : p.name;
  const g = propRecords(src.res, src.scene, i, name, m);
  res = insertRecords(res, scene, g.parts, g.count);
  return { tmp, res, name, names: g.names, added: { models: newModels.length, textures: newTex.size, animations: anims, skeleton: need.skeleton } };
}

const pad4 = (u8) => { if (!(u8.length & 3)) return u8; const o = new Uint8Array((u8.length + 3) & ~3); o.set(u8); return o; };

// a texture list with new textures added; its directory stays sorted by hash, like the game's
export function addTextures(orlt, add) {
  const ent = readTextures(orlt), all = new Map(ent.map((e) => [e.hash, e.blob]));
  for (const [h, b] of add) all.set(h, b);
  const dir = [...all.keys()].sort((a, b) => a - b), dataOrder = [...ent.map((e) => ({ h: e.hash, at: e.blob.byteOffset })).sort((a, b) => a.at - b.at).map((e) => e.h), ...[...add.keys()].filter((h) => !ent.some((e) => e.hash === h))];
  // each picture starts on a multiple of 32 from the start of the list
  const base = 16 + 16 * dir.length, offs = new Map(); let end = base;
  for (const h of dataOrder) { end = (end + 31) & ~31; offs.set(h, end - base); end += all.get(h).length; }
  end = (end + 31) & ~31;
  // the 4th word of an entry is the padding after its picture (to the next one, or the list's end)
  const pad = new Map(); dataOrder.forEach((h, k) => { const next = k + 1 < dataOrder.length ? offs.get(dataOrder[k + 1]) : end - base; pad.set(h, next - offs.get(h) - all.get(h).length); });
  const out = new Uint8Array(end), dv = be(out);
  out.set(orlt.subarray(0, 16), 0); dv.setUint32(4, dir.length);
  dir.forEach((h, k) => { dv.setUint32(16 + 16 * k, h); dv.setUint32(20 + 16 * k, offs.get(h)); dv.setUint32(24 + 16 * k, all.get(h).length); dv.setUint32(28 + 16 * k, pad.get(h)); });
  for (const h of dataOrder) out.set(all.get(h), base + offs.get(h));
  return out;
}
