// Strikers Stadium Studio: look around the game's stadiums, repaint their textures (the pitch as one
// picture), choose which fans cheer for each team (with their idle and goal animations), and pack
// the changed files as a mod. Shares the file formats with Model Studio.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { zipSync, unzipSync } from 'fflate';
import { boneNames, readTextures, decodeTex, texHeader, encodePng, decodePng, loadShier, hex8, nlHash } from './formats.js';
import { exportGlb } from './export.js';
import { reencodeBundle } from './import.js';
import { parseWorld, exportStadiumGlb, rebuildTmp, packZlib, findPitch, stitchPitch, splitPitch, parseRes, readIfl } from './stadium.js';
import { loadAnims, sample, sampleRoot } from './anim.js';
import { parseIni, iniGet, iniSet } from './ini.js';
import { parseScene, worldMatrix, KIND, setMatrix, getPlace, withPlace, copyProp, freeName, removeProps } from './scene.js';
import { propKinds, addProp, addTextures } from './propimport.js';
import { importStadium, SIZE_LIMIT } from './stadiumimport.js';
import { GLB } from './import.js';
import { unpackZlib } from './stadium.js';

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const STADIUMS = { thepalace: 'The Palace', vice: 'The Vice', vicenight: 'The Vice (night)', wastelands: 'The Wastelands', lavapit: 'Lava Pit', sandtomb: 'Sand Tomb', thunderisland: 'Thunder Island', crystalcanyon: 'Crystal Canyon', pipelinecentral: 'Pipeline Central', galacticstadium: 'Galactic Stadium', stormship: 'Stormship Stadium', bowserstadium: 'Bowser Stadium', kongacoliseum: 'Konga Coliseum', craterfield: 'Crater Field', battledome: 'Battle Dome', dump: 'Dump', underground: 'Underground', tutorialfield: 'Tutorial Field', lowpolystadium: 'Low-poly stadium' };
const PROPS = { smallflag: 'Flags', fieldgenerator: 'Field generator (start of match)', flyingcamera1: 'Flying camera', flyingcamera2: 'Flying camera', flyingcamera3: 'Flying camera', sign_type1: 'Signs', finger: 'Foam finger', riotguard: 'Riot guards (the goal event)', windbanner: 'Wind banners' };
const TEAMS = ['Mario', 'Luigi', 'Peach', 'Daisy', 'Yoshi', 'DonkeyKong', 'DiddyKong', 'Wario', 'Waluigi', 'Bowser', 'BowserJr', 'Petey'];
const TEAM_LABEL = { DonkeyKong: 'Donkey Kong', DiddyKong: 'Diddy Kong', BowserJr: 'Bowser Jr.', Petey: 'Petey Piranha' };
const MAX_FANS = 8;

// ------------------------------------------------------------------ game files (keys relative to the files folder, lower case)
const game = { files: new Map(), names: new Map(), stadiums: [], fans: [] };
const edits = new Map();   // path -> Uint8Array (the changed files, for the mod)
let cur = null;
async function readFile(p) { const f = game.files.get(p.toLowerCase()); return f ? new Uint8Array(await f.arrayBuffer()) : null; }
const has = (p) => game.files.has(p.toLowerCase());
function setFiles(list) {
  const roots = list.filter((x) => /(^|\/)art\/hashid\.bin$/i.test(x.rel)).map((x) => x.rel.slice(0, x.rel.length - 'art/hashid.bin'.length));
  if (!roots.length) throw new Error("That folder doesn't have the game's Art folder in it. Choose the extracted game's \"files\" folder (the one with Art and ini inside).");
  roots.sort((a, b) => (/riivolution/i.test(a) - /riivolution/i.test(b)) || a.length - b.length);
  const root = roots[0].toLowerCase(); game.files.clear();
  for (const { rel, file } of list) { const r = rel.toLowerCase(); if (r.startsWith(root)) { game.files.set(r.slice(root.length), file); file._rel = rel.slice(root.length); } }
}
async function scan() {
  game.names = boneNames(await readFile('art/hashid.bin'));
  game.stadiums = Object.keys(STADIUMS).filter((s) => has(`art/environments/${s}/gameworld.tmp.zlib`));
  for (const k of game.files.keys()) { const m = /^art\/environments\/([a-z0-9_]+)\/gameworld\.tmp\.zlib$/.exec(k); if (m && !game.stadiums.includes(m[1])) game.stadiums.push(m[1]); }
  game.fans = [...game.files.keys()].map((k) => /^art\/characters\/crowd([a-z]+)\/crowd\1\.rlg$/.exec(k)).filter(Boolean).map((m) => m[1])
    .filter((f) => has(`art/animation/crowd${f}.shier`) && has(`art/animation/crowd${f}.sanim.zlib`)).sort();
}
const work = async (p) => edits.get(p) || readFile(p);
const fileName = (p) => { const f = game.files.get(p.toLowerCase()); return f && f._rel ? f._rel : p.replace(/^ini\/stadiums\//, 'ini/Stadiums/').replace(/^ini\/terrain\//, 'ini/Terrain/'); };
function setEdit(p, data, orig) {
  if (orig && orig.length === data.length && orig.every((b, i) => b === data[i])) edits.delete(p); else edits.set(p, data);
  window.onbeforeunload = edits.size ? () => 'You have changes that are not saved in a mod yet.' : null;
}

// ------------------------------------------------------------------ a stadium
async function openStadium(id) {
  busy('Loading ' + (STADIUMS[id] || id) + '…');
  await new Promise((r) => setTimeout(r, 20));
  try {
    const tmpPath = `art/environments/${id}/gameworld.tmp.zlib`, resPath = `art/environments/${id}/gameworld.res.zlib`;
    const origZ = await readFile(tmpPath);
    const orig = parseWorld(origZ, game.names);
    const res = has(resPath) ? parseRes(await readFile(resPath)) : { skeletons: [], objects: 0 };
    cur = { id, tmpPath, resPath, origZ, orig, res, view: 'work', cam: 'tv', sel: null, selSet: new Set(), undo: [], redo: [] };
    if (has(resPath)) { cur.origRes = unpackZlib(await readFile(resPath)); cur.resWork = edits.has(resPath) ? unpackZlib(edits.get(resPath)) : cur.origRes.slice(); cur.origScene = parseScene(cur.origRes, nameOf); cur.scene = parseScene(cur.resWork, nameOf); if (guessNames(cur.scene, cur.origScene)) cur.scene = parseScene(cur.resWork, nameOf); }
    cur.pitch = orig.textures ? findPitch(orig, game.names) : null;
    await loadWork(); renderSidebar(); $('welcome').hidden = true;
    await refresh(true); renderAll();
  } catch (e) { toast(e.message || String(e), true); console.error(e); }
  finally { busy(false); }
}
async function loadWork() { cur.work = edits.has(cur.tmpPath) ? parseWorld(edits.get(cur.tmpPath), nameOf) : cur.orig; }
const texMap = (w) => new Map(readTextures(w.textures).map((e) => [e.hash, e.blob]));
async function replaceTextures(changes) {
  const r = reencodeBundle(cur.work.textures, changes, []);
  if (!r.reencoded.length) return 0;
  // the new pictures, written in the game's own layout (directory sorted by hash, padding words)
  const fresh = new Map(readTextures(r.out).map((e) => [e.hash, e.blob])), changed = new Map(r.reencoded.map((x) => [x.hash, fresh.get(x.hash)]));
  const tmp = rebuildTmp(cur.work.tmp, addTextures(cur.work.textures, changed)), z = packZlib(tmp);
  setEdit(cur.tmpPath, z, null);
  cur.work = parseWorld(z, game.names);
  return r.reencoded.length;
}
function resetStadium() { edits.delete(cur.tmpPath); cur.work = cur.orig; cur.importReport = ''; if (cur.resPath) { edits.delete(cur.resPath); if (cur.origRes) { cur.resWork = cur.origRes.slice(); cur.scene = parseScene(cur.resWork, nameOf); } } window.onbeforeunload = edits.size ? () => '' : null; }

// ------------------------------------------------------------------ 3D view
const view = {};
function initView() {
  const el = $('view'), r = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
  r.setPixelRatio(Math.min(2, window.devicePixelRatio || 1)); r.outputColorSpace = THREE.SRGBColorSpace; r.localClippingEnabled = true; el.prepend(r.domElement);
  view.cutPlane = new THREE.Plane(new THREE.Vector3(0, -1, 0), 8); view.fogMax = { value: 1 };
  const scene = new THREE.Scene(); scene.background = new THREE.Color(0x6f8fb0);
  view.amb = new THREE.AmbientLight(0xffffff, 3.0); scene.add(view.amb);
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 6000), controls = new OrbitControls(camera, r.domElement); controls.enableDamping = true;
  Object.assign(view, { r, scene, camera, controls });
  const resize = () => { const w = el.clientWidth, h = el.clientHeight; r.setSize(w, h, false); camera.aspect = w / Math.max(1, h); camera.updateProjectionMatrix(); };
  new ResizeObserver(resize).observe(el); resize();
  r.setAnimationLoop(() => { controls.update(); r.render(scene, camera); });
}
async function refresh(reframe) {
  const w = cur.view === 'orig' ? cur.orig : cur.work;
  const { glb, stats } = exportStadiumGlb({ world: w, names: game.names });
  cur.stats = stats;
  const g = await new GLTFLoader().parseAsync(glb.buffer.slice(glb.byteOffset, glb.byteOffset + glb.byteLength), '');
  if (view.model) { view.scene.remove(view.model); view.model.traverse((o) => { if (o.geometry) o.geometry.dispose(); if (o.material) { if (o.material.map) o.material.map.dispose(); o.material.dispose(); } }); }
  view.model = g.scene; view.scene.add(g.scene);
  g.scene.traverse((o) => { if (o.isMesh) { const m = o.material; o.material = fogMaterial(m.transparent ? new THREE.MeshBasicMaterial({ map: m.map, vertexColors: !!o.geometry.attributes.color, transparent: true, depthWrite: false, side: THREE.FrontSide }) : new THREE.MeshBasicMaterial({ map: m.map, vertexColors: !!o.geometry.attributes.color, alphaTest: 0.5, side: THREE.FrontSide })); } });
  // the props' pieces are templates, placed where the scene puts them (not where their models sit)
  view.templates = new Map(); view.world = w;
  const propNodes = []; g.scene.traverse((o) => { if (o.isMesh && /^m([1-9]\d*)_piece/.test(o.name)) view.templates.set(o.name, o); if (/^model[1-9]/.test(o.name)) propNodes.push(o); });
  for (const n of propNodes) n.parent.remove(n);
  view.props = new THREE.Group(); view.props.name = 'placed props'; g.scene.add(view.props);
  placeProps();
  applyDisplay(); await applyFog(); if (reframe) setCam(cur.cam);
  updateBadge();
}
function updateBadge() {
  const what = [edits.has(cur.tmpPath) && 'new textures or models', edits.has(cur.resPath) && 'objects changed', (edits.has(iniPath(cur.id)) || (terrainPath(cur.id) && edits.has(terrainPath(cur.id)))) && 'settings changed'].filter(Boolean);
  $('badge').hidden = false; $('badge').innerHTML = cur.view === 'orig' ? 'Original stadium' : what.length ? `<span class="warn">●</span> Your version (${what.join(', ')})` : 'Your version (no changes yet)';
}
function applyDisplay() {
  if (!view.model) return;
  const light = $('light').checked, wire = $('wire').checked, cut = $('cut').checked;
  view.model.traverse((o) => { if (o.isMesh) { o.material.vertexColors = light && !!o.geometry.attributes.color; o.material.wireframe = wire; o.material.clippingPlanes = cut ? [view.cutPlane] : null; o.material.needsUpdate = true; } });
}
function setCam(c) {
  cur.cam = c; for (const b of $('cams').querySelectorAll('button')) b.classList.toggle('on', b.dataset.c === c);
  // the pitch is about 42 x 25 m at the origin (game x along the length); glTF y is up
  const P = { tv: [[0, 12.5, 15.5], [0, 0, -1.5]], top: [[0, 62, 0.01], [0, 0, 0]], wide: [[-30, 42, 30], [0, 0, 0]] }[c];
  view.camera.position.set(...P[0]); view.controls.target.set(...P[1]); view.controls.update();
}

// ------------------------------------------------------------------ panels
function renderSidebar() {
  $('sidebar').innerHTML = game.stadiums.length ? '<h3>Stadiums</h3>' + game.stadiums.map((s) => `<button class="char ${cur && cur.id === s ? 'on' : ''} ${edits.has(`art/environments/${s}/gameworld.tmp.zlib`) || edits.has(`art/environments/${s}/gameworld.res.zlib`) || edits.has(iniPath(s)) ? 'changed' : ''}" data-id="${s}">${esc(STADIUMS[s] || s)}<span class="dot"></span></button>`).join('')
    + (game.fans.length ? `<h3>Fans</h3><button class="char" id="fansLink">Who cheers for each team${[...edits.keys()].some((k) => k.startsWith('ini/crowdcharacterlists/')) ? '<span class="dot" style="display:inline-block"></span>' : ''}</button>` : '')
    : '<p class="dim" style="padding:8px">Open the game folder to list the stadiums.</p>';
  for (const b of $('sidebar').querySelectorAll('.char[data-id]')) b.onclick = () => openStadium(b.dataset.id);
  if ($('fansLink')) $('fansLink').onclick = () => tab('fans');
}
function renderAll() { renderStadium(); renderTextures(); renderObjects(); renderMod(); renderSidebar(); renderSettings().catch((e) => console.error(e)); }

function renderStadium() {
  const s = cur.stats, props = [...new Set(cur.res.skeletons)];
  const goalEvent = props.includes('riotguard');
  $('pane-stadium').innerHTML = `
    <h2>${esc(STADIUMS[cur.id] || cur.id)}</h2>
    <div class="stats">
      <div class="stat"><b>${s.pieces}</b><span>pieces</span></div>
      <div class="stat"><b>${s.tris.toLocaleString()}</b><span>triangles</span></div>
      <div class="stat"><b>${readTextures(cur.work.textures).filter((e) => !readIfl(e.blob)).length}</b><span>textures</span></div>
      <div class="stat"><b>${cur.work.models.length - 1}</b><span>prop models</span></div>
      <div class="stat"><b>${cur.res.objects}</b><span>placed objects</span></div>
      <div class="stat"><b>${props.length}</b><span>moving parts</span></div>
    </div>
    <p class="dim">The lighting and shadows are painted into the stadium (vertex colours and the textures), so what you paint is what the game shows.</p>
    <h2>Moving parts</h2>
    ${props.length ? '<ul class="parts">' + props.map((p) => `<li>${esc(PROPS[p] || p)} <span class="chip">${esc(p)}</span></li>`).join('') + '</ul>' : '<p class="dim">None: a still stadium.</p>'}
    ${goalEvent ? '<div class="box">This stadium has the <b>riot guards</b>: the goal transition where the machines come out (a cutscene, the <code>riotguard</code> prop and the game\'s <code>CrowdRiot</code> code). Only The Vice and The Wastelands have it.</div>' : '<div class="box">No goal event here: like the classic stadiums, goals are the crowd cheering and the replay.</div>'}
    <p class="dim">See where each one is placed, move it, or copy it on the <b>Objects</b> tab.</p>
    <h2>Remodel it in Blender</h2>
    <ol class="steps"><li><b>Export stadium (.glb)</b> and import it in Blender (File &gt; Import &gt; glTF 2.0). Its pieces are named <code>m0_piece…</code>.</li>
      <li>Delete, keep or add what you like: the pitch and goals the game plays on stay where they are (41.7 × 24.7 m around 0, 0, 0), so keep your stadium around them. Pieces you keep where they are stay exactly as the game had them.</li>
      <li>Export from Blender as <b>glTF Binary (.glb)</b>, with <b>Data &gt; Mesh &gt; Vertex Color</b> exported (it holds the baked lighting), then <b>Bring it back</b> here.</li></ol>
    <div class="btns"><button id="expGlb">Export stadium (.glb)</button><button class="primary" id="impGlb">Bring it back (.glb)…</button></div>
    <div class="set" style="max-width:420px">
      <label for="impTex">Biggest texture size</label><select id="impTex"><option value="512">512 (sharpest)</option><option value="256">256 (smaller)</option><option value="128">128 (smallest)</option></select>
      <label for="impLight">Baked light (vertex colours)</label><select id="impLight"><option value="auto">Automatic</option><option value="1">As they are</option><option value="2">Twice as bright (Wii games store half)</option></select>
    </div>
    <div id="impReport">${cur.importReport || ''}</div>
    ${sizeMeter()}`;
  $('expGlb').onclick = () => { const { glb } = exportStadiumGlb({ world: cur.work, names: game.names, only: [0] }); download(`${cur.id}.glb`, glb); };
  $('impGlb').onclick = () => { const inp = $('glbInput'); inp.value = ''; inp.onchange = () => inp.files[0] && importRemodel(inp.files[0]); inp.click(); };
}
// the stadium's size against the biggest the game ships with
function sizeMeter() {
  const n = cur.work.tmp.length, pct = Math.min(100, n / SIZE_LIMIT * 100), over = n > SIZE_LIMIT;
  return `<div class="meter"><div class="dim">Stadium size: <b>${(n / 1e6).toFixed(2)} MB</b> of about ${(SIZE_LIMIT / 1e6).toFixed(2)} MB (the biggest stadium in the game)${over ? ' <span class="warn">: too big, it may not load</span>' : ''}</div><div class="bar"><div style="width:${pct}%;background:${over ? 'var(--bad)' : pct > 90 ? '#e0b050' : 'var(--accent)'}"></div></div></div>`;
}
async function decodeGlbImages(u8) {
  const g = new GLB(u8), out = new Map();
  for (const [i, im] of (g.j.images || []).entries()) {
    try {
      let bytes, mime = im.mimeType || 'image/png';
      if (im.bufferView != null) bytes = g.view(im.bufferView).raw;
      else if (im.uri && im.uri.startsWith('data:')) { const b64 = im.uri.split(',')[1]; bytes = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0)); mime = im.uri.slice(5, im.uri.indexOf(';')); }
      else continue;
      if (bytes[0] === 0x89 && bytes[1] === 0x50) { out.set(i, decodePng(bytes)); continue; }
      const bmp = await createImageBitmap(new Blob([bytes], { type: mime }), { premultiplyAlpha: 'none', colorSpaceConversion: 'none' });
      const c = document.createElement('canvas'); c.width = bmp.width; c.height = bmp.height; const x = c.getContext('2d'); x.drawImage(bmp, 0, 0);
      out.set(i, { w: bmp.width, h: bmp.height, px: x.getImageData(0, 0, bmp.width, bmp.height).data });
    } catch (e) { console.warn('image', i, e); }
  }
  return out;
}
async function importRemodel(file) {
  busy('Building the stadium…'); await new Promise((r) => setTimeout(r, 30));
  try {
    const glb = new Uint8Array(await file.arrayBuffer()), images = await decodeGlbImages(glb);
    const light = $('impLight').value;
    const r = importStadium({ glb, world: cur.work, res: cur.resWork, images, names: new Map([...game.names, ...extraNames]), opts: { stadium: cur.id, maxTexture: +$('impTex').value, brightness: light === 'auto' ? 'auto' : +light } });
    for (const [h, n] of r.newTextureNames) extraNames.set(h, n);
    for (const o of r.objects) if (o.name) extraNames.set(o.hash, o.name);
    pushUndo();
    const z = packZlib(r.tmp); setEdit(cur.tmpPath, z, null); cur.work = parseWorld(z, nameOf);
    cur.resWork = r.res; cur.sel = null; cur.selSet = new Set(); commitScene();
    const s = r.stats;
    cur.importReport = `<div class="box ${r.tmp.length > SIZE_LIMIT ? 'warn' : 'ok'}"><b>${esc(file.name)}</b> is in: ${s.keptPieces} of the game's pieces kept as they were, ${s.newObjects} new objects (${s.tris.toLocaleString()} triangles, ${s.newTextures} new textures)${s.droppedTextures ? `; ${s.droppedTextures} of the old stadium's textures no longer used were taken out` : ''}.${r.notes.map((n) => `<br><span class="dim">${esc(n)}</span>`).join('')}</div>`;
    await refresh(); renderAll();
    toast(r.tmp.length > SIZE_LIMIT ? 'Brought back, but it is bigger than any stadium in the game.' : 'Stadium brought back.');
  } catch (e) { toast(e.message || String(e), true); console.error(e); } finally { busy(false); }
}

function texRole(n) {
  const r = [[/\/field\d+$/, 'pitch'], [/sky/, 'sky'], [/crowd/, 'crowd'], [/sign|banner|logo|ad_/, 'sign'], [/spec/, 'shine'], [/env|reflect/, 'reflection'], [/shadow/, 'shadow'], [/net/, 'net'], [/goal/, 'goal']];
  return (r.find(([re]) => re.test(n)) || [0, ''])[1];
}
function renderTextures() {
  try { cur.pitch = cur.work.textures ? findPitch(cur.work, game.names) : null; } catch (e) { cur.pitch = null; }
  const tex = readTextures(cur.work.textures), origTex = texMap(cur.orig);
  let html = '';
  if (cur.pitch) {
    const p = cur.pitch;
    html += `<h2>The pitch</h2><p class="dim">${p.cols * p.rows} tiles as one picture (${p.cols * p.tw}×${p.rows * p.th}), far touchline at the top. Download it, paint over it, put it back.</p>
      <div class="pitch"><img id="pitchImg" alt="the pitch"></div>
      <div class="btns"><button class="small" id="pitchDl">Download pitch (PNG)</button><button class="small primary" id="pitchRep">Replace pitch…</button></div>`;
  }
  html += `<h2>All textures</h2><p class="dim">Replace any of them with your own PNG (same size works best). Each goes back in the format the game used for it.</p><div class="texgrid">`;
  const sorted = tex.map((e) => ({ ...e, name: game.names.get(e.hash) || hex8(e.hash) })).sort((a, b) => (texRole(a.name) === 'pitch') - (texRole(b.name) === 'pitch') || a.name.localeCompare(b.name));
  const anims = sorted.filter((e) => readIfl(e.blob));
  for (const e of sorted) {
    const ifl = readIfl(e.blob);
    if (ifl) continue;
    let d; try { d = decodeTex(e.blob); } catch (err) { continue; }
    const changed = origTex.get(e.hash) && origTex.get(e.hash) !== e.blob && !bytesEq(origTex.get(e.hash), e.blob);
    html += `<div class="tex ${changed ? 'changed' : ''}" data-h="${e.hash}"><div class="img"><img loading="lazy" src="${pngUrl(d)}" alt=""></div>
      <div class="name">${esc(e.name.replace(/^_[a-z0-9]+\//, ''))}</div><div class="meta">${d.w}×${d.h}${texRole(e.name) ? ' · ' + texRole(e.name) : ''}${changed ? ' <span class="chip on">changed</span>' : ''}</div>
      <div class="row"><button class="small dl">PNG</button><button class="small rep">Replace…</button></div></div>`;
  }
  if (anims.length) {
    html += `</div><h2>Animated pictures</h2><p class="dim">These switch between pictures while you play (the big screens, the captain's face). Repaint their frames above.</p><ul class="files">`
      + anims.map((e) => { const f = readIfl(e.blob).frames; return `<li><b>${esc(e.name.replace(/^_[a-z0-9]+\//, ''))}</b>: ${f.length} frames (${f.map((x) => esc((game.names.get(x.hash) || hex8(x.hash)).replace(/^_[a-z0-9]+\//, '')) + ` ${x.seconds.toFixed(1)} s`).join(', ')})</li>`; }).join('') + '</ul><div>';
  }
  $('pane-textures').innerHTML = html + '</div>';
  if (cur.pitch) {
    const tm = texMap(cur.work), img = stitchPitch(cur.pitch, (h) => decodeTex(tm.get(h)));
    $('pitchImg').src = pngUrl(img);
    $('pitchDl').onclick = () => download(`${cur.id}_pitch.png`, encodePng(img.px, img.w, img.h));
    $('pitchRep').onclick = () => pickImage(async (im) => {
      const p = cur.pitch, W = p.cols * p.tw, H = p.rows * p.th;
      if (im.w !== W || im.h !== H) { toast(`The pitch picture has to be ${W}×${H} (yours is ${im.w}×${im.h}).`, true); return; }
      busy('Encoding the pitch…'); await new Promise((r) => setTimeout(r, 20));
      try { const n = await replaceTextures(splitPitch(p, im)); await refresh(); renderAll(); toast(n ? `Pitch replaced (${n} tiles changed).` : 'That is the same pitch as before.'); }
      catch (e) { toast(e.message, true); } finally { busy(false); }
    });
  }
  for (const el of $('pane-textures').querySelectorAll('.tex')) {
    const h = +el.dataset.h, e = sorted.find((x) => x.hash === h);
    el.querySelector('.dl').onclick = () => { const d = decodeTex(e.blob); download(e.name.replace(/\//g, '_') + '.png', encodePng(d.px, d.w, d.h)); };
    el.querySelector('.rep').onclick = () => pickImage(async (im) => {
      const d = texHeader(e.blob);
      if (im.w !== d.w || im.h !== d.h) toast(`Your picture is ${im.w}×${im.h}; the game's is ${d.w}×${d.h}. Used at your size.`);
      busy('Encoding…'); await new Promise((r) => setTimeout(r, 20));
      try { const n = await replaceTextures(new Map([[h, im]])); await refresh(); renderAll(); toast(n ? 'Texture replaced.' : 'That picture is the same as the one already there.'); }
      catch (err) { toast(err.message, true); } finally { busy(false); }
    });
  }
}
const bytesEq = (a, b) => a.length === b.length && a.every((x, i) => x === b[i]);

// ------------------------------------------------------------------ fans
const fanView = {};
const fanLabel = (f) => {
  const base = ['birdo', 'shyguy', 'toad', 'pianta'].find((b) => f.startsWith(b) && f !== b);
  const nice = { birdo: 'Birdo', shyguy: 'Shy Guy', toad: 'Toad', pianta: 'Pianta', boo: 'Boo', goomba: 'Goomba', koopa: 'Koopa', monkey: 'Monkey', penguin: 'Penguin', delfin: 'Noki', delfina: 'Noki (girl)' };
  return base ? `${nice[base]} (${f.slice(base.length)})` : nice[f] || f;
};
function parseCrowdIni(text) { const out = []; for (const line of text.split(/\r?\n/)) { const m = /^\s*([A-Za-z0-9_]+)\s*=\s*(true|1)\s*$/i.exec(line); if (m) out.push(m[1]); } return out; }
async function crowdLists() {
  const lists = [];
  for (const t of TEAMS) for (const alt of ['', 'Alt']) {
    const p = [...game.files.keys()].find((k) => k === `ini/crowdcharacterlists/${(t + alt).toLowerCase()}.ini`);
    if (!p) continue;
    const text = new TextDecoder().decode(await work(p));
    lists.push({ team: t, alt: !!alt, path: p, names: parseCrowdIni(text) });
  }
  return lists;
}
async function renderFans() {
  const lists = await crowdLists();
  if (!fanView.team || !lists.find((l) => l.path === fanView.team)) fanView.team = lists[0] && lists[0].path;
  const L = lists.find((l) => l.path === fanView.team);
  if (!L) { $('pane-fans').innerHTML = '<p class="dim">No crowd lists found (ini/CrowdCharacterLists).</p>'; return; }
  const chosen = new Set(L.names.map((n) => n.toLowerCase()));
  const unknown = L.names.filter((n) => !game.fans.includes(n.toLowerCase()));
  if (!fanView.fan || !game.fans.includes(fanView.fan)) fanView.fan = L.names.map((n) => n.toLowerCase()).find((n) => game.fans.includes(n)) || game.fans[0];
  $('pane-fans').innerHTML = `
    <h2>Who cheers for each team</h2>
    <p class="dim">Each team has its own list of fans, named after its captain (<code>Mario.ini</code>, …), used in every stadium: the crowd in the stands is drawn from these lists. Up to ${MAX_FANS} kinds per list.</p>
    <div class="field"><label>Team</label><select id="fanTeam">${lists.map((l) => `<option value="${l.path}" ${l.path === fanView.team ? 'selected' : ''}>${esc(TEAM_LABEL[l.team] || l.team)}${l.alt ? ' (Alt list)' : ''}${edits.has(l.path) ? ' ●' : ''}</option>`).join('')}</select></div>
    <div class="fanview" id="fanView"></div>
    <div class="btns"><span class="seg" id="fanAnim"><button data-a="idle" class="${fanView.anim !== 'excited' ? 'on' : ''}">Watching</button><button data-a="excited" class="${fanView.anim === 'excited' ? 'on' : ''}">Goal!</button></span><span class="dim" id="fanName"></span></div>
    <div class="fans">${game.fans.map((f) => `<label class="fan ${f === fanView.fan ? 'sel' : ''}" data-f="${f}"><input type="checkbox" ${chosen.has(f) ? 'checked' : ''}> ${esc(fanLabel(f))}</label>`).join('')}</div>
    <p class="dim"><span id="fanCount">${[...chosen].filter((n) => game.fans.includes(n)).length}</span> of ${MAX_FANS} chosen.${unknown.length ? ` The game's list also names ${unknown.map(esc).join(', ')}, which has no model in the game files (kept as it is).` : ''}</p>
    <p class="dim">Click a name to see that fan; tick it to add it to this team's crowd.</p>`;
  $('fanTeam').onchange = (e) => { fanView.team = e.target.value; renderFans(); };
  for (const b of $('fanAnim').querySelectorAll('button')) b.onclick = () => { fanView.anim = b.dataset.a; for (const x of $('fanAnim').querySelectorAll('button')) x.classList.toggle('on', x === b); showFan(); };
  for (const el of $('pane-fans').querySelectorAll('.fan')) {
    const f = el.dataset.f, box = el.querySelector('input');
    el.onclick = (e) => { if (e.target === box) return; e.preventDefault(); fanView.fan = f; for (const x of $('pane-fans').querySelectorAll('.fan')) x.classList.toggle('sel', x === el); showFan(); };
    box.onchange = async () => {
      const now = [...$('pane-fans').querySelectorAll('.fan input')].map((x, i) => (x.checked ? game.fans[i] : null)).filter(Boolean);
      if (now.length > MAX_FANS) { box.checked = false; toast(`Up to ${MAX_FANS} kinds of fan per team (the game's own lists use up to 8).`, true); return; }
      if (!now.length) { box.checked = true; toast('A team needs at least one kind of fan.', true); return; }
      const keep = L.names.filter((n) => !game.fans.includes(n.toLowerCase()));   // names the game lists without a model, as they were
      const orig = await readFile(L.path), text = [...now.map((n) => `${n} = true`), ...keep.map((n) => `${n} = true`)].join('\r\n') + '\r\n';
      const origNames = parseCrowdIni(new TextDecoder().decode(orig)).map((n) => n.toLowerCase()).sort().join();
      if (origNames === [...now, ...keep.map((n) => n.toLowerCase())].sort().join()) edits.delete(L.path); else setEdit(L.path, new TextEncoder().encode(text), null);
      $('fanCount').textContent = now.length; renderSidebar(); renderMod();
      window.onbeforeunload = edits.size ? () => '' : null;
    };
  }
  initFanView(); showFan();
}
function initFanView() {
  const el = $('fanView');
  if (!fanView.r) {
    const r = new THREE.WebGLRenderer({ antialias: true }); r.outputColorSpace = THREE.SRGBColorSpace; r.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    const scene = new THREE.Scene(); scene.background = new THREE.Color(0x0d1016); scene.add(new THREE.HemisphereLight(0xffffff, 0x445066, 2.6));
    const d = new THREE.DirectionalLight(0xffffff, 1.6); d.position.set(1, 2, 3); scene.add(d);
    const camera = new THREE.PerspectiveCamera(32, 4 / 3, 0.01, 50); camera.position.set(0.35, 0.62, 2.1); camera.lookAt(0, 0.42, 0);
    Object.assign(fanView, { r, scene, camera, clock: new THREE.Clock(), t: 0 });
    r.setAnimationLoop(() => {
      if (!fanView.r.domElement.isConnected) return;
      const dt = fanView.clock.getDelta(); fanView.t += dt;
      if (fanView.model && fanView.a) poseFan(fanView.t * 30 % (fanView.a.numKeys - 1));
      const w = fanView.r.domElement.parentElement; if (w) { const W = w.clientWidth, H = w.clientHeight; if (fanView.r.domElement.width !== Math.floor(W * fanView.r.getPixelRatio())) { fanView.r.setSize(W, H, false); fanView.camera.aspect = W / H; fanView.camera.updateProjectionMatrix(); } }
      fanView.r.render(fanView.scene, fanView.camera);
    });
  }
  el.innerHTML = ''; el.appendChild(fanView.r.domElement);
}
const fanCache = new Map();
async function showFan() {
  const f = fanView.fan; if (!f) return;
  $('fanName').textContent = fanLabel(f);
  if (!fanCache.has(f)) {
    const base = `art/characters/crowd${f}/crowd${f}`, shier = await readFile(`art/animation/crowd${f}.shier`);
    const g = exportGlb({ rlg: await readFile(base + '.rlg'), rlts: [await readFile(base + '.rlt')], shier, names: game.names, name: 'crowd' + f });
    const gl = await new GLTFLoader().parseAsync(g.glb.buffer.slice(g.glb.byteOffset, g.glb.byteOffset + g.glb.byteLength), '');
    fanCache.set(f, { scene: gl.scene, sk: loadShier(shier), anims: loadAnims(await readFile(`art/animation/crowd${f}.sanim.zlib`), true) });
  }
  const c = fanCache.get(f);
  if (fanView.model) fanView.scene.remove(fanView.model);
  fanView.model = c.scene; fanView.scene.add(c.scene); fanView.sk = c.sk;
  fanView.bones = null; c.scene.traverse((o) => { if (o.isSkinnedMesh && !fanView.bones) fanView.bones = o.skeleton.bones; });
  fanView.a = c.anims.find((a) => a.name === (fanView.anim || 'idle')) || c.anims[0]; fanView.t = 0;
  // frame this fan: its size over its whole animation (some float, some are tiny)
  const box = new THREE.Box3(), v = new THREE.Vector3();
  for (const k of [0, Math.floor(fanView.a.numKeys / 3), Math.floor(2 * fanView.a.numKeys / 3)]) {
    poseFan(k); c.scene.updateMatrixWorld(true);
    c.scene.traverse((o) => { if (o.isSkinnedMesh) { const pos = o.geometry.attributes.position; for (let i = 0; i < pos.count; i += 3) { o.getVertexPosition(i, v); o.localToWorld(v); box.expandByPoint(v); } } });
  }
  if (!box.isEmpty()) {
    const ctr = box.getCenter(new THREE.Vector3()), size = box.getSize(new THREE.Vector3()), d = Math.max(size.y, size.x * 0.75) / (2 * Math.tan(THREE.MathUtils.degToRad(fanView.camera.fov / 2))) * 1.35;
    fanView.camera.position.set(ctr.x + d * 0.18, ctr.y + size.y * 0.1, ctr.z + d); fanView.camera.lookAt(ctr);
  }
}
const Z_TO_Y = new THREE.Matrix4().makeRotationX(-Math.PI / 2);
function poseFan(k) {
  const { bones, sk, a } = fanView; if (!bones) return;
  bones.forEach((b, i) => {
    if (sk.parents[i] < 0) { const rt = sampleRoot(a, k); Z_TO_Y.clone().multiply(new THREE.Matrix4().compose(new THREE.Vector3(...rt.t), new THREE.Quaternion(...rt.q), new THREE.Vector3(1, 1, 1))).decompose(b.position, b.quaternion, b.scale); return; }
    const s = sample(a, i, k, sk.offsets ? sk.offsets[i] : [0, 0, 0]);
    b.quaternion.set(...s.q); b.position.set(...s.t); if (s.s) b.scale.set(...s.s);
  });
}

// ------------------------------------------------------------------ objects (the scene list in gameworld.res)
const extraNames = new Map();   // names of props copied in this session (not in the game's name table)
const nameOf = { get: (h) => game.names.get(h) || extraNames.get(h) };
const Z2Y = new THREE.Matrix4().makeRotationX(-Math.PI / 2), Y2Z = Z2Y.clone().invert();
const toView = (m16) => Z2Y.clone().multiply(new THREE.Matrix4().fromArray(m16)).multiply(Y2Z);
const sceneFor = () => (cur.view === 'orig' ? cur.origScene : cur.scene);
const GROUPS = [
  { id: 'crowd', title: 'Crowd spots', note: 'Points named helperNN or crowdNN, most of them on the stands, each turned to face the pitch. In stadiums like Dump and Konga Coliseum they are called crowdNN, so they are most likely where the fans are put; that isn\'t tested in the game yet.', test: (r) => r.kind === KIND.BOX },
  { id: 'flags', title: 'Big flags', note: 'Points where the game puts its waving flags.', test: (r) => r.kind === KIND.POINT && /flag/i.test(r.name || '') },
  { id: 'guards', title: 'Riot guards', note: 'Where the riot guards stand for the goal event.', test: (r) => r.kind === KIND.POINT && /riot/i.test(r.name || '') },
  { id: 'props', title: 'Props', note: 'Moving parts placed around the stadium: signs, small flags, foam fingers, field generators, flying cameras… Each is a copy of one of the stadium\'s prop models with its animation.', test: (r) => r.kind === KIND.PROXY },
  { id: 'fx', title: 'Effects', note: 'Particle emitters (sparks, confetti, steam…).', test: (r) => r.kind === KIND.EMITTER && r.parent == null },
  { id: 'points', title: 'Other points', note: '', test: (r) => r.kind === KIND.POINT },
];
const groupOf = (r) => (r.parent == null || r.kind === KIND.PROXY ? GROUPS.find((g) => g.test(r)) : null);
const stem = (n) => (n || '').replace(/\d+$/, '').replace(/_?proxy$/, '').replace(/_/g, ' ').trim();
function placeProps() {
  if (!view.props) return;
  for (const c of [...view.props.children]) view.props.remove(c);
  const sc = sceneFor(); if (!sc || !view.world) return;
  const objMap = new Map(); view.world.models.forEach((md, mi) => { if (mi) for (const o of md.objects || []) objMap.set(o.hash, { mi, ...o }); });
  view.propOf = new Map();
  for (const r of sc.recs) {
    if (r.kind !== KIND.PIECE || !objMap.has(r.piece)) continue;
    const o = objMap.get(r.piece), g = new THREE.Group();
    for (let n = o.first; n < o.first + o.count; n++) { const t = view.templates.get(`m${o.mi}_piece${String(n).padStart(3, '0')}`); if (t) { const c = new THREE.Mesh(t.geometry, t.material); g.add(c); } }
    g.matrixAutoUpdate = false; g.matrix.copy(toView(worldMatrix(sc, r.i)));
    let top = r; while (top.parent != null) top = sc.recs[top.parent];
    g.userData.rec = top.i; view.props.add(g);
    if (!view.propOf.has(top.i)) view.propOf.set(top.i, []); view.propOf.get(top.i).push(g);
  }
  view.props.updateMatrixWorld(true);
  placeMarks();
}
const MARK_COL = { crowd: 0x3fb3ff, flags: 0xffc93f, guards: 0xff5a5a, props: 0x7cff8a, fx: 0xd68bff, points: 0xffffff };
function placeMarks() {
  if (view.marks) { view.scene.remove(view.marks); view.marks.traverse((o) => { if (o.geometry) o.geometry.dispose(); }); }
  view.marks = new THREE.Group(); view.scene.add(view.marks);
  view.marks.visible = $('marks').checked;
  view.markOf = new Map();
  const sc = sceneFor(); if (!sc) return;
  for (const r of sc.recs) {
    const g = groupOf(r); if (!g || g.id === 'props') continue;
    const obj = new THREE.Mesh(new THREE.OctahedronGeometry(g.id === 'fx' ? 0.35 : 0.6), new THREE.MeshBasicMaterial({ color: MARK_COL[g.id] }));
    obj.matrixAutoUpdate = false; obj.matrix.copy(toView(worldMatrix(sc, r.i))); obj.userData.rec = r.i;
    obj.traverse((o) => { o.userData.rec = r.i; });
    view.marks.add(obj); view.markOf.set(r.i, [obj]);
  }
  view.marks.updateMatrixWorld(true);
  showSelection();
}
// writes cur.resWork into the mod, re-reads the scene, redraws
function commitScene() {
  setEdit(cur.resPath, packZlib(cur.resWork), null);
  if (bytesEq(cur.resWork, cur.origRes)) edits.delete(cur.resPath);
  cur.scene = parseScene(cur.resWork, nameOf);
  placeProps(); renderSidebar(); renderMod(); updateBadge();
  if ($('objUndo')) { $('objUndo').disabled = !(cur.undo && cur.undo.length); $('objRedo').disabled = !(cur.redo && cur.redo.length); }
}
function renderObjects() {
  const sc = sceneFor();
  if (!sc) { $('pane-objects').innerHTML = '<p class="dim">This stadium has no object list.</p>'; return; }
  const origBy = new Map(cur.origScene.recs.map((o) => [o.kind + ':' + o.hash, o]));
  const changed = (r) => { const o = origBy.get(r.kind + ':' + r.hash); return !o || (r.m && o.m && r.m.some((v, k) => Math.abs(v - o.m[k]) > 1e-5)); };
  const edit = cur.view !== 'orig', q = (cur.objFilter || '').trim().toLowerCase();
  const shown = (r) => !q || (r.name || hex8(r.hash)).toLowerCase().includes(q);
  let html = `<h2>${esc(STADIUMS[cur.id] || cur.id)}: what's placed where</h2><p class="dim">${sc.count} objects in the stadium's scene. Positions are in metres: <b>x</b> along the pitch, <b>y</b> across it, <b>z</b> up; the centre spot is 0, 0, 0.</p>`;
  if (!edit) html += '<div class="box">You\'re looking at the original. Switch to <b>Your version</b> to move things.</div>';
  else html += `<div class="btns objtop"><button class="small" id="objUndo" ${cur.undo && cur.undo.length ? '' : 'disabled'} title="Ctrl+Z">↶ Undo</button><button class="small" id="objRedo" ${cur.redo && cur.redo.length ? '' : 'disabled'} title="Ctrl+Y">↷ Redo</button><input type="text" id="objFilter" placeholder="Find by name…" value="${esc(cur.objFilter || '')}"></div>`;
  if (edit && edits.has(cur.tmpPath) && (cur.importReport || cur.work.models[0].objects.length !== cur.orig.models[0].objects.length)) html += `<div class="box tips"><b>New stadium?</b> The old stadium's props and crowd spots are still where its stands were. To clear the props: <b>Select all</b> next to Props, then <b>Remove</b>. To fit the crowd spots onto your new stands: <b>Select all</b> next to Crowd spots, then use <b>Spread</b> and <b>z</b> to line them up, and <b>Sit on the stadium</b> to drop each one onto the seats.</div>`;
  html += '<div id="selEditor"></div>';
  const allBtn = (ids, label) => `<button class="small selall" data-ids="${ids.join(',')}">${label}</button>`;
  for (const g of GROUPS) {
    const list = sc.recs.filter((r) => groupOf(r) === g); if (!list.length) continue;
    const vis = list.filter(shown); if (!vis.length) continue;
    html += `<h2>${esc(g.title)} <span class="chip">${list.length}</span> ${allBtn(vis.map((r) => r.i), 'Select all')}</h2>${g.note ? `<p class="dim">${esc(g.note)}</p>` : ''}<div class="objlist">`;
    if (g.id === 'props') {
      const by = new Map(); for (const r of vis) { const k = stem(r.name) || 'prop'; if (!by.has(k)) by.set(k, []); by.get(k).push(r); }
      for (const [k, rs] of by) html += `<div class="objsub">${esc(k)} <span class="dim">×${rs.length}</span> ${rs.length > 1 ? allBtn(rs.map((r) => r.i), 'select all') : ''}</div>` + rs.map((r) => objBtn(r, changed(r))).join('');
    } else html += vis.map((r) => objBtn(r, changed(r))).join('');
    html += '</div>';
  }
  if (edit) html += `<h2>Add a prop from any stadium</h2><p class="dim">Brings a prop with its model, textures and animation into ${esc(STADIUMS[cur.id] || cur.id)}. It's put over the centre spot, at the height it had in its own stadium (hanging banners stay up); then move it where you want. Some "props" are big groups: Galactic Stadium's asteroids are a whole ring around the stadium.</p>
    <div class="field"><label>From</label><select id="addFrom">${game.stadiums.map((s) => `<option value="${s}" ${s === (cur.addFrom || cur.id) ? 'selected' : ''}>${esc(STADIUMS[s] || s)}</option>`).join('')}</select></div>
    <div class="field"><label>Prop</label><select id="addKind"><option>Loading…</option></select></div>
    <div class="btns"><button class="primary small" id="addBtn" disabled>Add it here</button></div>`;
  $('pane-objects').innerHTML = html;
  for (const b of $('pane-objects').querySelectorAll('.obj')) b.onclick = (e) => { if (e.ctrlKey || e.metaKey || e.shiftKey) toggleSel(+b.dataset.i); else select(+b.dataset.i, true); };
  for (const b of $('pane-objects').querySelectorAll('.selall')) b.onclick = (e) => { const ids = b.dataset.ids.split(',').map(Number); setSel(e.ctrlKey || e.metaKey ? [...new Set([...selList(), ...ids])] : ids, null, true); };
  if ($('objUndo')) { $('objUndo').onclick = undo; $('objRedo').onclick = redo; }
  if ($('objFilter')) $('objFilter').oninput = (e) => { cur.objFilter = e.target.value; const pos = e.target.selectionStart; renderObjects(); const f = $('objFilter'); f.focus(); f.setSelectionRange(pos, pos); };
  renderSelEditor();
  if ($('addFrom')) { $('addFrom').onchange = (e) => { cur.addFrom = e.target.value; fillKinds(); }; fillKinds(); $('addBtn').onclick = addFromStadium; }
}
// other stadiums' files, read once
const srcCache = new Map();
async function sourceStadium(id) {
  if (id === cur.id) return { world: cur.work, res: cur.resWork, scene: cur.scene };
  if (!srcCache.has(id)) {
    const world = parseWorld(await readFile(`art/environments/${id}/gameworld.tmp.zlib`), game.names), res = unpackZlib(await readFile(`art/environments/${id}/gameworld.res.zlib`));
    srcCache.set(id, { world, res, scene: parseScene(res, nameOf) });
  }
  return srcCache.get(id);
}
async function fillKinds() {
  const id = $('addFrom').value, sel = $('addKind');
  try {
    const src = await sourceStadium(id), kinds = propKinds(src.scene).filter((k) => k.i != null);
    if ($('addFrom').value !== id) return;
    sel.innerHTML = kinds.map((k) => `<option value="${k.i}">${esc(stem(k.kind) || k.kind)} (×${k.count})</option>`).join('') || '<option value="">No props here</option>';
    $('addBtn').disabled = !kinds.length;
  } catch (e) { sel.innerHTML = '<option value="">Could not read it</option>'; console.error(e); }
}
async function addFromStadium() {
  const id = $('addFrom').value, i = +$('addKind').value; if (!isFinite(i)) return;
  busy('Adding the prop…'); await new Promise((r) => setTimeout(r, 20));
  try {
    const src = await sourceStadium(id), m = src.scene.recs[i].m.slice(); m[12] = 0; m[13] = 0;   // its own turn, size and height, over the centre spot
    pushUndo();
    const r = addProp({ world: cur.work, res: cur.resWork, names: nameOf }, src, i, m);
    for (const n of r.names) if (!game.names.get(nlHash(n))) extraNames.set(nlHash(n), n);
    if (r.tmp !== cur.work.tmp) { const z = packZlib(r.tmp); setEdit(cur.tmpPath, z, null); cur.work = parseWorld(z, game.names); }
    cur.resWork = r.res; commitScene(); await refresh(); renderAll();
    const nr = cur.scene.recs.find((x) => x.name === r.name && x.kind === KIND.PROXY); if (nr) select(nr.i, true);
    const a = r.added, bits = [a.models && `${a.models} model${a.models > 1 ? 's' : ''}`, a.textures && `${a.textures} texture${a.textures > 1 ? 's' : ''}`, a.animations && `its animation (${a.skeleton})`].filter(Boolean);
    toast(`Added ${r.name}${bits.length ? ', with ' + bits.join(', ') : ''}.`);
  } catch (e) { toast(e.message || String(e), true); console.error(e); } finally { busy(false); }
}
// names of props copied or added before (in a mod opened again): the game's name list doesn't have them
function guessNames(scene, orig) {
  const unknown = scene.recs.filter((r) => r.kind === KIND.PROXY && !r.name); if (!unknown.length) return false;
  const stems = new Map();
  const learn = (sc) => { if (!sc) return; for (const r of sc.recs) if (r.kind === KIND.PROXY && r.name) { const st = r.name.replace(/\d+$/, ''), w = (r.name.match(/\d+$/) || [''])[0].length; if (!stems.has(st)) stems.set(st, { w, kids: (r.kids || []).map((k) => sc.recs[k].name).filter(Boolean).map((n) => n.slice(r.name.length)) }); } };
  learn(orig); learn(scene); for (const s of srcCache.values()) learn(s.scene);
  let found = 0;
  for (const r of unknown) for (const [st, { w, kids }] of stems) {
    let hit = null; for (let n = 1; n < 1000 && !hit; n++) { const nm = st + String(n).padStart(w, '0'); if (nlHash(nm) === r.hash) hit = nm; }
    if (!hit) continue;
    extraNames.set(r.hash, hit); for (const k of kids) extraNames.set(nlHash(hit + k), hit + k); found++; break;
  }
  return found > 0;
}
const objBtn = (r, ch) => `<button class="obj ${isOn(r.i) ? 'on' : ''} ${ch ? 'changed' : ''}" data-i="${r.i}" title="${esc(r.name || '')}">${esc((r.name || hex8(r.hash)).replace(/^.*\//, ''))}${ch ? ' ●' : ''}</button>`;
// ---- selection: one or many objects (cur.selSet), cur.sel the one clicked last
const selList = () => { const sc = sceneFor(); return [...(cur.selSet || [])].filter((i) => sc && sc.recs[i] && sc.recs[i].m); };
const isOn = (i) => !!(cur.selSet && cur.selSet.has(i));
function setSel(list, primary, frame) {
  cur.selSet = new Set(list); cur.sel = primary != null ? primary : list.length ? list[list.length - 1] : null;
  cur.selBase = null; cur.grp = null;
  showSelection(); if (frame) lookAtSel(); syncListSel(); renderSelEditor();
}
function toggleSel(i) { const s = new Set(cur.selSet || []); if (s.has(i)) s.delete(i); else s.add(i); setSel([...s], s.has(i) ? i : null); }
function select(i, frame) { setSel(i == null ? [] : [i], i, frame); }
function syncListSel() { const p = $('pane-objects'); if (!p) return; for (const b of p.querySelectorAll('.obj')) b.classList.toggle('on', isOn(+b.dataset.i)); }
// keep the same objects selected after the list changed (copies, removals, undo): by name
const selKeys = () => new Set(selList().map((i) => sceneFor().recs[i].hash));
function reselect(keys, frame) { const sc = sceneFor(); setSel(sc.recs.filter((r) => keys.has(r.hash) && groupOf(r)).map((r) => r.i), null, frame); }

// the 3D objects drawing record i (prop pieces and markers)
const viewObjs = (i) => [...((view.propOf && view.propOf.get(i)) || []), ...((view.markOf && view.markOf.get(i)) || [])];
function showSelection() {
  if (view.selGroup) { view.scene.remove(view.selGroup); view.selGroup.traverse((o) => { if (o.geometry) o.geometry.dispose(); }); view.selGroup = null; }
  view.selAll = null;
  const sel = selList(); if (!sel.length) return;
  view.selGroup = new THREE.Group(); const all = new THREE.Box3();
  for (const i of sel.slice(0, 600)) {
    const box = new THREE.Box3(); for (const o of viewObjs(i)) box.expandByObject(o);
    if (box.isEmpty()) { const p = new THREE.Vector3().applyMatrix4(toView(worldMatrix(sceneFor(), i))); box.setFromCenterAndSize(p, new THREE.Vector3(1, 1, 1)); }
    box.expandByScalar(0.15); all.union(box);
    view.selGroup.add(new THREE.Box3Helper(box, i === cur.sel ? 0xffee00 : 0xffa500));
  }
  if (sel.length > 1) view.selGroup.add(new THREE.Box3Helper(all.clone().expandByScalar(0.6), 0x77ddff));
  view.selAll = all; view.scene.add(view.selGroup);
}
function lookAtSel() {
  if (!view.selAll) return;
  const c = view.selAll.getCenter(new THREE.Vector3()), sz = view.selAll.getSize(new THREE.Vector3()).length();
  const dir = view.camera.position.clone().sub(view.controls.target).normalize();
  view.controls.target.copy(c); view.camera.position.copy(c.clone().add(dir.multiplyScalar(Math.max(6, sz * 1.3)))); view.controls.update();
}

// ---- moving: matrices are the game's (column-major, z up, position in 12..14)
const deg = Math.PI / 180;
function turnM(m, a, cx, cy) {   // turn by a degrees around the up axis through (cx, cy)
  const c = Math.cos(a * deg), s = Math.sin(a * deg), o = m.slice();
  for (let col = 0; col < 3; col++) { const x = m[col * 4], y = m[col * 4 + 1]; o[col * 4] = c * x - s * y; o[col * 4 + 1] = s * x + c * y; }
  const x = m[12] - cx, y = m[13] - cy; o[12] = cx + c * x - s * y; o[13] = cy + s * x + c * y; return o;
}
const moveM = (m, dx, dy, dz) => { const o = m.slice(); o[12] += dx; o[13] += dy; o[14] += dz; return o; };
const parentW = (sc, r) => (r.parent != null ? worldMatrix(sc, r.parent) : null);
const m4 = (a) => new THREE.Matrix4().fromArray(a);
// draw the selection where newM(i) would put it, without writing anything
function preview(newM) {
  const sc = sceneFor();
  for (const i of selList()) {
    const r = sc.recs[i], pw = parentW(sc, r), nm = newM(i);
    const oldW = toView(worldMatrix(sc, i)), newW = toView(pw ? m4(pw).multiply(m4(nm)).toArray() : nm);
    const D = newW.multiply(oldW.invert());
    for (const o of viewObjs(i)) { if (!o.userData.start) o.userData.start = o.matrix.clone(); o.matrix.copy(D.clone().multiply(o.userData.start)); o.updateMatrixWorld(true); }
  }
}
// write newM(i) for every selected object (one undo step)
function commitMove(newM, keepBase) {
  if (cur.view === 'orig') return;
  const sc = sceneFor(), sel = selList(); if (!sel.length) return;
  pushUndo();
  for (const i of sel) setMatrix(cur.resWork, sc.recs[i], newM(i));
  const base = cur.selBase, grp = cur.grp;
  commitScene();
  if (keepBase) { cur.selBase = base; cur.grp = grp; } else { cur.selBase = null; cur.grp = null; }
  showSelection(); markChangedObjs(); setTimeout(renderSelEditor, 0);   // later: the box being typed in may still be losing focus
}
// the group sliders work from where the objects were when they were selected
function groupM() {
  const sc = sceneFor(), sel = selList();
  if (!cur.selBase) { cur.selBase = new Map(sel.map((i) => [i, sc.recs[i].m.slice()])); cur.grp = { dx: 0, dy: 0, dz: 0, turn: 0, spread: 100 }; }
  const g = cur.grp, f = g.spread / 100, base = cur.selBase;
  let cx = 0, cy = 0; for (const m of base.values()) { cx += m[12] * f; cy += m[13] * f; } cx /= base.size || 1; cy /= base.size || 1;
  return (i) => { let m = base.get(i).slice(); m[12] *= f; m[13] *= f; m = turnM(m, g.turn, cx, cy); return moveM(m, g.dx, g.dy, g.dz); };
}
const snapOn = () => !!cur.snap;
const snapV = (v, s) => (snapOn() ? Math.round(v / s) * s : v);

// ---- undo / redo (the object list, plus models and textures when a prop was brought in)
function snapshot() { return { res: cur.resWork.slice(), tmp: edits.get(cur.tmpPath) || null, names: new Map(extraNames) }; }
function pushUndo() { cur.undo = cur.undo || []; cur.undo.push(snapshot()); if (cur.undo.length > 60) cur.undo.shift(); cur.redo = []; }
async function restore(s) {
  const keys = selKeys();
  for (const [h, n] of s.names) extraNames.set(h, n);
  const tmpNow = edits.get(cur.tmpPath) || null;
  cur.resWork = s.res; commitScene();
  if (tmpNow !== s.tmp) {
    if (s.tmp) { setEdit(cur.tmpPath, s.tmp, null); cur.work = parseWorld(s.tmp, game.names); } else { edits.delete(cur.tmpPath); cur.work = cur.orig; }
    await refresh();
  }
  renderObjects(); reselect(keys);
}
async function undo() { if (!cur || !cur.undo || !cur.undo.length) { toast('Nothing to undo.'); return; } const s = cur.undo.pop(); (cur.redo = cur.redo || []).push(snapshot()); await restore(s); toast('Undone.'); }
async function redo() { if (!cur || !cur.redo || !cur.redo.length) { toast('Nothing to redo.'); return; } const s = cur.redo.pop(); cur.undo.push(snapshot()); await restore(s); toast('Redone.'); }

// ---- actions on the selection
function removeSel() {
  const sc = sceneFor(), sel = selList(), props = sel.filter((i) => sc.recs[i].kind === KIND.PROXY), other = sel.length - props.length;
  if (!props.length) { toast('Only props can be removed. Crowd spots, flag spots, riot guards and effects can be moved (the game expects them).', true); return; }
  try {
    pushUndo(); cur.resWork = removeProps(cur.resWork, sc, props); commitScene(); renderObjects(); setSel([]);
    toast(`Removed ${props.length} prop${props.length > 1 ? 's' : ''}.` + (other ? ` ${other} other object${other > 1 ? 's were' : ' was'} kept: only props can be removed.` : ''));
  } catch (e) { toast(e.message, true); }
}
function copySel() {
  const sel = selList().filter((i) => sceneFor().recs[i].kind === KIND.PROXY && sceneFor().recs[i].name);
  if (!sel.length) { toast('Only props can be copied.', true); return; }
  pushUndo(); const made = new Set();
  try {
    const names = sel.map((i) => sceneFor().recs[i].name);
    for (const nm of names) {
      const sc = sceneFor(), r = sc.recs.find((x) => x.kind === KIND.PROXY && x.name === nm); if (!r) continue;
      const name = freeName(sc, r.name), m = r.m.slice(); m[12] += 2;
      const out = copyProp(cur.resWork, sc, r.i, name, m);
      extraNames.set(nlHash(name), name);
      const deep = (j) => { for (const k of sc.recs[j].kids || []) { const n = sc.recs[k].name; if (n) extraNames.set(nlHash(name + n.slice(r.name.length)), name + n.slice(r.name.length)); deep(k); } }; deep(r.i);
      cur.resWork = out; cur.scene = parseScene(cur.resWork, nameOf); made.add(nlHash(name));
    }
    commitScene(); renderObjects(); reselect(made, true);
    toast(`Copied ${made.size} prop${made.size > 1 ? 's' : ''}, 2 m along. The copies are selected: move them where you want.`);
  } catch (e) { toast(e.message, true); }
}
function putBackSel() {
  const sc = sceneFor(), orig = new Map(cur.origScene.recs.map((o) => [o.kind + ':' + o.hash, o]));
  const sel = selList().filter((i) => orig.has(sc.recs[i].kind + ':' + sc.recs[i].hash));
  if (!sel.length) { toast('These are new: use Remove to take them out.', true); return; }
  commitMove((i) => (orig.get(sc.recs[i].kind + ':' + sc.recs[i].hash) || sc.recs[i]).m);
}
// drop each selected object onto the stadium below it (the first floor facing up)
function sitSel() {
  if (!view.model) return;
  const sc = sceneFor(), sel = selList(); if (!sel.length) return;
  const meshes = []; view.model.traverse((o) => { if (o.isMesh && o.visible) { let p = o, inProps = false; while (p) { if (p === view.props) { inProps = true; break; } p = p.parent; } if (!inProps) meshes.push(o); } });
  const ray = new THREE.Raycaster(); ray.far = 300; const nm = new Map(); let missed = 0;
  for (const i of sel) {
    const w = worldMatrix(sc, i), p = new THREE.Vector3(w[12], w[14] + 40, -w[13]);   // game -> view (y up)
    ray.set(p, new THREE.Vector3(0, -1, 0));
    const hit = ray.intersectObjects(meshes, false).find((h) => h.face && h.face.normal.clone().transformDirection(h.object.matrixWorld).y > 0.3);
    if (!hit) { missed++; continue; }
    const r = sc.recs[i], dz = hit.point.y - w[14]; nm.set(i, moveM(r.m, 0, 0, dz));
  }
  if (!nm.size) { toast('Nothing under them to sit on.', true); return; }
  const keep = new Set(cur.selSet); cur.selSet = new Set(nm.keys());
  commitMove((i) => nm.get(i)); cur.selSet = keep; showSelection(); renderSelEditor();
  toast(`Put ${nm.size} on the stadium below them${missed ? `; ${missed} had nothing under them` : ''}.`);
}

// ---- the editor for the selection
const ROW = (id, label, v, min, max, step, edit, unit = '') => `<label for="${id}">${label}</label><input type="range" id="${id}R" min="${min}" max="${max}" step="${step}" value="${v}" ${edit ? '' : 'disabled'}><input type="number" id="${id}" step="${step}" value="${(+v).toFixed(step < 1 ? 2 : 0)}" ${edit ? '' : 'disabled'}>${unit}`;
function renderSelEditor() {
  const el = $('selEditor'); if (!el) return;
  const sc = sceneFor(), sel = selList(), edit = cur.view !== 'orig';
  if (!sel.length) { el.innerHTML = `<div class="box tips"><b>Selecting:</b> click an object here or in the 3D view. <b>Ctrl+click</b> adds or takes one away; <b>Shift+drag</b> in the 3D view draws a box around many (turn on Markers to include crowd and flag spots); the <b>Select all</b> buttons take a whole group.</div>`; return; }
  const props = sel.filter((i) => sc.recs[i].kind === KIND.PROXY).length;
  const tools = `<div class="btns">
      <button class="small" id="selLook">Look at ${sel.length > 1 ? 'them' : 'it'}</button>
      ${edit ? `<button class="small" id="selSit" title="Drops ${sel.length > 1 ? 'each one' : 'it'} straight down onto the stadium (stands, steps, the ground)">Sit on the stadium</button>
      <button class="small" id="selBack">Put back</button>
      ${props ? `<button class="small" id="selCopy">Copy${sel.length > 1 ? ` ${props} prop${props > 1 ? 's' : ''}` : ''}</button><button class="small danger" id="selDel">Remove${sel.length > 1 ? ` ${props} prop${props > 1 ? 's' : ''}` : ''}</button>` : ''}` : ''}
      <button class="small" id="selNone">Select none</button></div>
    ${edit ? `<label class="snap"><input type="checkbox" id="snap" ${cur.snap ? 'checked' : ''}> Snap (0.5 m, 15°)</label>
    <p class="dim keys">In the 3D view: <b>drag</b> ${sel.length > 1 ? 'one of them' : 'it'} to move along the ground, <b>Alt+drag</b> to raise or lower · arrow keys nudge (Shift: 2 m) · PgUp/PgDn height · Q/E turn · Del remove · Ctrl+D copy · Ctrl+Z undo</p>` : ''}`;
  if (sel.length === 1) {
    const r = sc.recs[sel[0]], g = groupOf(r), p = getPlace(r);
    el.innerHTML = `<div class="box sel"><b>${esc(r.name || hex8(r.hash))}</b> <span class="chip">${esc(g ? g.title.replace(/s$/, '') : '')}</span>
      <div class="set3">${ROW('px', 'x (along)', p.x, -150, 150, 0.25, edit)}${ROW('py', 'y (across)', p.y, -150, 150, 0.25, edit)}${ROW('pz', 'z (height)', p.z, -40, 120, 0.25, edit)}${ROW('pt', 'Turn (°)', p.turn, -180, 180, 1, edit)}</div>${tools}</div>`;
    if (edit) {
      const val = (id) => +$(id).value, fn = () => { const v = { x: val('px'), y: val('py'), z: val('pz'), turn: val('pt') }; return Object.values(v).every(isFinite) ? () => withPlace(r, v) : null; };
      for (const id of ['px', 'py', 'pz', 'pt']) {
        $(id + 'R').oninput = () => { $(id).value = (+$(id + 'R').value).toFixed(id === 'pt' ? 0 : 2); const f = fn(); if (f) preview(f); };
        $(id + 'R').onchange = $(id).onchange = (e) => { if (e.target === $(id)) $(id + 'R').value = $(id).value; const f = fn(); if (f) commitMove(f); };
      }
    }
  } else {
    const count = new Map(); for (const i of sel) { const g = groupOf(sc.recs[i]); const t = g ? g.title.toLowerCase() : 'other'; count.set(t, (count.get(t) || 0) + 1); }
    const g = cur.grp || { dx: 0, dy: 0, dz: 0, turn: 0, spread: 100 };
    el.innerHTML = `<div class="box sel"><b>${sel.length} selected</b> <span class="dim">(${[...count].map(([t, n]) => `${n} ${esc(t)}`).join(', ')})</span>
      ${edit ? `<p class="dim" style="margin:6px 0 2px">Moves them together, from where they were when you selected them.</p>
      <div class="set3">${ROW('gx', 'x (along)', g.dx, -100, 100, 0.25, edit, '')}${ROW('gy', 'y (across)', g.dy, -100, 100, 0.25, edit)}${ROW('gz', 'z (height)', g.dz, -40, 60, 0.25, edit)}${ROW('gt', 'Turn (°)', g.turn, -180, 180, 1, edit)}${ROW('gs', 'Spread (%)', g.spread, 25, 250, 1, edit)}</div>
      <p class="dim" style="margin:2px 0 6px">Turn goes round their middle. Spread moves them away from the centre spot (over 100%) or in towards it.</p>` : ''}${tools}</div>`;
    if (edit) {
      const map = { gx: 'dx', gy: 'dy', gz: 'dz', gt: 'turn', gs: 'spread' };
      for (const id of Object.keys(map)) {
        const take = (src) => { const v = +src.value; if (!isFinite(v)) return false; groupM(); cur.grp[map[id]] = v; return true; };
        $(id + 'R').oninput = () => { $(id).value = (+$(id + 'R').value).toFixed(id === 'gt' || id === 'gs' ? 0 : 2); if (take($(id + 'R'))) preview(groupM()); };
        $(id + 'R').onchange = $(id).onchange = (e) => { if (e.target === $(id)) $(id + 'R').value = $(id).value; if (take(e.target)) commitMove(groupM(), true); };
      }
    }
  }
  $('selLook').onclick = lookAtSel; $('selNone').onclick = () => setSel([]);
  if (!edit) return;
  $('snap').onchange = (e) => { cur.snap = e.target.checked; };
  $('selSit').onclick = sitSel; $('selBack').onclick = putBackSel;
  if ($('selDel')) $('selDel').onclick = removeSel;
  if ($('selCopy')) $('selCopy').onclick = copySel;
}
function markChangedObjs() {
  const sc = sceneFor(), p = $('pane-objects'); if (!p) return;
  for (const b of p.querySelectorAll('.obj')) { const r = sc.recs[+b.dataset.i]; if (!r) continue; const o = cur.origScene.recs.find((x) => x.hash === r.hash && x.kind === r.kind); const ch = !o || (r.m && r.m.some((v, k) => Math.abs(v - o.m[k]) > 1e-5)); b.classList.toggle('changed', !!ch); b.textContent = (r.name || hex8(r.hash)).replace(/^.*\//, '') + (ch ? ' ●' : ''); }
}

// ---- the 3D view: click to select, Ctrl+click to add, Shift+drag a box, drag a selected object to move it
function rayAt(e) {
  const rect = view.r.domElement.getBoundingClientRect(), ray = new THREE.Raycaster();
  ray.setFromCamera(new THREE.Vector2(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1), view.camera);
  return ray;
}
function pickAt(e) {
  const targets = [...(view.props ? view.props.children : []), ...(view.marks && view.marks.visible ? view.marks.children : [])];
  const hit = rayAt(e).intersectObjects(targets, true).find((h) => { let o = h.object; while (o && o.userData.rec == null) o = o.parent; return !!o; });
  if (!hit) return null;
  let o = hit.object; while (o.userData.rec == null) o = o.parent;
  return { i: o.userData.rec, point: hit.point };
}
function initPicking() {
  const el = view.r.domElement, vbox = $('view');
  const rectEl = document.createElement('div'); rectEl.className = 'selrect'; vbox.appendChild(rectEl);
  let down = null, mode = null, drag = null;
  el.addEventListener('pointerdown', (e) => {
    down = { x: e.clientX, y: e.clientY }; mode = null; drag = null;
    if (!cur || e.button !== 0) return;
    if (e.shiftKey) { mode = 'box'; view.controls.enabled = false; el.setPointerCapture(e.pointerId); return; }
    if (cur.view === 'orig' || e.ctrlKey || e.metaKey) return;
    const hit = pickAt(e); if (!hit || !isOn(hit.i)) return;
    // drag the selection: along the ground through the point grabbed, or up and down with Alt
    mode = 'move'; view.controls.enabled = false; el.setPointerCapture(e.pointerId);
    const n = e.altKey ? view.camera.getWorldDirection(new THREE.Vector3()).setY(0).normalize().negate() : new THREE.Vector3(0, 1, 0);
    if (n.lengthSq() < 1e-6) n.set(0, 0, 1);
    drag = { plane: new THREE.Plane().setFromNormalAndCoplanarPoint(n, hit.point), from: hit.point.clone(), up: e.altKey, d: [0, 0, 0] };
  }, { capture: true });
  el.addEventListener('pointermove', (e) => {
    if (!down || !mode) return;
    if (mode === 'box') {
      const r = vbox.getBoundingClientRect(), x0 = Math.min(down.x, e.clientX) - r.left, y0 = Math.min(down.y, e.clientY) - r.top;
      Object.assign(rectEl.style, { display: 'block', left: x0 + 'px', top: y0 + 'px', width: Math.abs(e.clientX - down.x) + 'px', height: Math.abs(e.clientY - down.y) + 'px' });
      return;
    }
    const p = rayAt(e).ray.intersectPlane(drag.plane, new THREE.Vector3()); if (!p) return;
    const v = p.sub(drag.from);   // view space: x, y up, z = -game y
    drag.d = drag.up ? [0, 0, snapV(v.y, 0.5)] : [snapV(v.x, 0.5), snapV(-v.z, 0.5), 0];
    preview((i) => moveM(sceneFor().recs[i].m, ...drag.d));
  });
  const end = (e) => {
    const was = mode, moved = down && Math.hypot(e.clientX - down.x, e.clientY - down.y) > 4;
    view.controls.enabled = true; rectEl.style.display = 'none';
    if (was === 'box') {
      if (moved) {
        const r = el.getBoundingClientRect(), x0 = Math.min(down.x, e.clientX) - r.left, x1 = Math.max(down.x, e.clientX) - r.left, y0 = Math.min(down.y, e.clientY) - r.top, y1 = Math.max(down.y, e.clientY) - r.top;
        const sc = sceneFor(), got = [], showMarks = view.marks && view.marks.visible;
        for (const rec of sc.recs) {
          const g = groupOf(rec); if (!g || (!showMarks && g.id !== 'props')) continue;
          const w = worldMatrix(sc, rec.i), q = new THREE.Vector3(w[12], w[14], -w[13]).project(view.camera);
          if (q.z > 1) continue;
          const sx = (q.x + 1) / 2 * r.width, sy = (1 - q.y) / 2 * r.height;
          if (sx >= x0 && sx <= x1 && sy >= y0 && sy <= y1) got.push(rec.i);
        }
        const keep = e.ctrlKey || e.metaKey ? selList() : [];
        tab('objects'); setSel([...new Set([...keep, ...got])]);
        toast(got.length ? `Selected ${got.length}${keep.length ? ' more' : ''}.` : 'Nothing in that box' + (showMarks ? '.' : ' (turn on Markers to include crowd and flag spots).'));
      }
    } else if (was === 'move') {
      if (moved && drag && drag.d.some((v) => v)) { const d = drag.d; commitMove((i) => moveM(sceneFor().recs[i].m, ...d)); }
      else {
        for (const i of selList()) for (const o of viewObjs(i)) if (o.userData.start) { o.matrix.copy(o.userData.start); o.updateMatrixWorld(true); }
        if (!moved) { const hit = pickAt(e); if (hit) select(hit.i, false); }   // a click on one of several: just that one
      }
    } else if (down && !moved && cur && e.button === 0) {
      const hit = pickAt(e);
      if (hit) { tab('objects'); if (e.ctrlKey || e.metaKey) toggleSel(hit.i); else select(hit.i, false); }
      else if ($('pane-objects').classList.contains('on') && !(e.ctrlKey || e.metaKey)) setSel([]);
    }
    down = null; mode = null; drag = null;
  };
  el.addEventListener('pointerup', end); el.addEventListener('pointercancel', end);
  // keys (not while typing in a box)
  document.addEventListener('keydown', (e) => {
    if (!cur || /^(INPUT|SELECT|TEXTAREA)$/.test((e.target.tagName || '')) || !$('pane-objects').classList.contains('on')) return;
    const k = e.key.toLowerCase(), ctrl = e.ctrlKey || e.metaKey;
    if (ctrl && k === 'z') { e.preventDefault(); e.shiftKey ? redo() : undo(); return; }
    if (ctrl && k === 'y') { e.preventDefault(); redo(); return; }
    if (k === 'escape') { setSel([]); return; }
    const sel = selList(); if (!sel.length || cur.view === 'orig') return;
    if (ctrl && k === 'a') { e.preventDefault(); const g = groupOf(sceneFor().recs[cur.sel ?? sel[0]]); if (g) setSel(sceneFor().recs.filter((r) => groupOf(r) === g).map((r) => r.i)); return; }
    if (ctrl && k === 'd') { e.preventDefault(); copySel(); return; }
    if (k === 'delete' || k === 'backspace') { e.preventDefault(); removeSel(); return; }
    const step = e.shiftKey ? 2 : 0.5;
    // arrows move along the ground as the camera looks: up = away from you
    const f = view.camera.getWorldDirection(new THREE.Vector3()); let fx = f.x, fy = -f.z; const fl = Math.hypot(fx, fy) || 1; fx /= fl; fy /= fl;
    const ax = Math.abs(fx) > Math.abs(fy) ? [Math.sign(fx), 0] : [0, Math.sign(fy)];   // the nearest of the game's axes
    const fwd = ax, right = [fwd[1], -fwd[0]];
    const mv = { arrowup: fwd, arrowdown: [-fwd[0], -fwd[1]], arrowright: right, arrowleft: [-right[0], -right[1]] }[k];
    if (mv) { e.preventDefault(); commitMove((i) => moveM(sceneFor().recs[i].m, mv[0] * step, mv[1] * step, 0)); return; }
    if (k === 'pageup' || k === 'pagedown') { e.preventDefault(); const dz = (k === 'pageup' ? 1 : -1) * (e.shiftKey ? 1 : 0.25); commitMove((i) => moveM(sceneFor().recs[i].m, 0, 0, dz)); return; }
    if (k === 'q' || k === 'e') {
      e.preventDefault(); const a = (k === 'q' ? 1 : -1) * (e.shiftKey ? 45 : 15), sc = sceneFor();
      if (sel.length === 1) { const m = sc.recs[sel[0]].m; commitMove(() => turnM(m, a, m[12], m[13])); return; }
      let cx = 0, cy = 0; for (const i of sel) { cx += sc.recs[i].m[12]; cy += sc.recs[i].m[13]; } cx /= sel.length; cy /= sel.length;
      commitMove((i) => turnM(sc.recs[i].m, a, cx, cy));
    }
  });
}

// ------------------------------------------------------------------ settings (ini/Stadiums/<stadium>.ini over default.ini, and the pitch's ini/Terrain file)
// Each stadium's pitch type, from the game's stadium table (main.dol 0x80515018, +8: the index into
// Dry, Normal, Slow, Wet, Slippery, Thunder; read by InitializeGameTweaks).
const TERRAIN_FILES = ['DryTerrain', 'NormalTerrain', 'SlowTerrain', 'WetTerrain', 'SlipperyTerrain', 'ThunderTerrain'];
const TERRAIN_OF = { battledome: 1, bowserstadium: 0, craterfield: 2, crystalcanyon: 0, dump: 3, galacticstadium: 1, kongacoliseum: 1, lavapit: 0, pipelinecentral: 1, stormship: 1, thepalace: 2, thunderisland: 5, underground: 1, vice: 2, vicenight: 2, wastelands: 4, sandtomb: 0, tutorialfield: 0, lowpolystadium: 1 };
const TERRAIN_LABEL = { DryTerrain: 'Dry', NormalTerrain: 'Normal', SlowTerrain: 'Slow (grass)', WetTerrain: 'Wet (sludge)', SlipperyTerrain: 'Slippery (ice)', ThunderTerrain: 'Thunder' };
const C = (sec, r, g, b) => [sec, r, g, b];
const SETTINGS = [
  { title: 'Fog', note: 'Fog fades faraway things into a colour. The 3D view shows it (roughly: the game has three kinds of fog, and the view draws them all the same way).', fields: [
    { sec: 'Render/Fog', key: 'Fog Enabled', type: 'bool', label: 'Fog on', def: 'false' },
    { rgb: C('Render/Fog', 'Fog Red', 'Fog Green', 'Fog Blue'), label: 'Colour', def: [160, 170, 180] },
    { sec: 'Render/Fog', key: 'Fog Start', label: 'Starts (metres from the camera)', def: '40', step: 1 },
    { sec: 'Render/Fog', key: 'Fog End', label: 'Thickest at (metres)', def: '260', step: 1 },
    { sec: 'Render/Fog', key: 'Fog Intensity', label: 'Strength (0 to 1)', def: '1.0', step: 0.05, min: 0, max: 1 },
    { sec: 'Render/Fog', key: 'Fog Type', type: 'select', options: ['0', '1', '2'], label: 'Kind (0, 1 or 2)', def: '0' },
  ] },
  { title: 'Light on the players', note: 'The colour of the light the characters are lit with (white is plain). Galactic Stadium uses a blue one.', fields: [
    { rgb: C('Rendering/Lighting/Character', 'Character Light Red', 'Character Light Green', 'Character Light Blue'), label: 'Colour', def: [255, 255, 255] },
  ] },
  { title: 'Glow', note: 'The bloom on the bright parts of the stadium (the game\'s "High Range" settings). What each number does is read from its name, so try small changes.', fields: [
    { sec: 'Rendering/Effects/HighRange/Stadium', key: 'High Range Mult', label: 'Strength', def: '2.5', step: 0.1 },
    { sec: 'Rendering/Effects/HighRange/Stadium', key: 'High Range Offset', label: 'Starts at (brightness)', def: '3.5', step: 0.1 },
    { sec: 'Rendering/Effects/HighRange/Stadium', key: 'Alpha', label: 'Amount (0 to 255)', def: '108', step: 1, min: 0, max: 255 },
    { rgb: C('Rendering/Effects/HighRange/Stadium', 'Red', 'Green', 'Blue'), label: 'Colour', def: [255, 255, 255] },
  ] },
  { title: 'Player shadows', fields: [
    { rgb: C('Rendering/ShadowVolume', 'red', 'green', 'blue'), label: 'Colour', def: [0, 0, 0] },
    { sec: 'Rendering/ShadowVolume', key: 'alpha', label: 'Darkness (0 to 255)', def: '64', step: 1, min: 0, max: 255 },
  ] },
  { title: 'Crowd', note: 'How tightly the fans in the stands are packed, and the size of the far-away fans (drawn as flat pictures).', fields: [
    { sec: 'Render/Crowd/Layout', key: 'Distance Between Crowd Rows', label: 'Space between rows (m)', def: '0.75', step: 0.05, min: 0.2 },
    { sec: 'Render/Crowd/Layout', key: 'Distance Between Crowd Members', label: 'Space between fans (m)', def: '0.75', step: 0.05, min: 0.2 },
    { sec: 'Render/Crowd', key: 'Impostor Width', label: 'Far-away fan width (m)', def: '1.300', step: 0.05 },
    { sec: 'Render/Crowd', key: 'Impostor Height', label: 'Far-away fan height (m)', def: '1.500', step: 0.05 },
  ] },
];
const TERRAIN_FIELDS = [
  { key: 'Speed', label: 'Running speed', step: 0.025 },
  { key: 'Slipperyness', label: 'Slipperiness (players slide)', step: 0.02, min: 0, max: 1 },
  { key: 'Friction', label: 'Ball rolling drag', step: 0.025, min: 0 },
  { key: 'Bounce', label: 'Ball bounce', step: 0.05, min: 0 },
];
const dec = (u8) => (u8 ? new TextDecoder('latin1').decode(u8) : '');
const enc = (s) => Uint8Array.from(s, (c) => c.charCodeAt(0) & 255);
const iniPath = (id) => `ini/stadiums/${id}.ini`;
const terrainPath = (id) => (id in TERRAIN_OF ? `ini/terrain/${TERRAIN_FILES[TERRAIN_OF[id]].toLowerCase()}.ini` : null);
const hex2 = (n) => Math.max(0, Math.min(255, Math.round(+n || 0))).toString(16).padStart(2, '0');
async function stadiumSettings(id, original) {
  const def = parseIni(dec(await readFile('ini/stadiums/default.ini')));
  const own = parseIni(dec(original ? await readFile(iniPath(id)) : await work(iniPath(id))));
  const val = (sec, key, d) => iniGet(own, sec, key) ?? iniGet(def, sec, key) ?? d;
  return { val, own, def };
}
const DEFS = new Map(SETTINGS.flatMap((g) => g.fields.flatMap((f) => fieldKeys(f).map(([sec, key, d]) => [sec + '|' + key, d]))));
function fieldKeys(f) { return f.rgb ? f.rgb.slice(1).map((k, i) => [f.rgb[0], k, String(f.def[i])]) : [[f.sec, f.key, f.def]]; }
async function writeStadiumIni(id, values) {
  // values: Map 'sec|key' -> string; write only what differs from what the game uses now
  const p = iniPath(id), origText = dec(await readFile(p)), base = dec(await work(p)), o = await stadiumSettings(id, false), changes = [];
  for (const [k, v] of values) { const [sec, key] = k.split('|'); if (String(o.val(sec, key, DEFS.get(k) ?? '')).trim() !== String(v).trim()) changes.push([sec, key, v]); }
  const text = changes.length ? iniSet(base, changes) : base;
  if (text === origText) edits.delete(p); else setEdit(p, enc(text), null);
}
function numStr(v, f) { const n = +v; if (!isFinite(n)) return null; const c = Math.min(f.max ?? Infinity, Math.max(f.min ?? -Infinity, n)); const d = String(f.def).includes('.') ? Math.max(1, (String(f.def).split('.')[1] || '').length, (String(v).split('.')[1] || '').length) : 0; return d ? c.toFixed(Math.min(d, 4)) : String(Math.round(c)); }
async function renderSettings() {
  const id = cur.id, now = await stadiumSettings(id, false), orig = await stadiumSettings(id, true);
  const values = new Map();
  for (const g of SETTINGS) for (const f of g.fields) for (const [sec, key, d] of fieldKeys(f)) values.set(sec + '|' + key, now.val(sec, key, d));
  const changed = (f) => fieldKeys(f).some(([sec, key, d]) => String(now.val(sec, key, d)).trim() !== String(orig.val(sec, key, d)).trim());
  let html = `<h2>${esc(STADIUMS[id] || id)}: settings</h2><p class="dim">From <code>${esc(fileName(iniPath(id)))}</code>; anything it doesn't set comes from <code>default.ini</code> (shared by all stadiums). Only what you change goes in the mod.</p>`;
  SETTINGS.forEach((g, gi) => {
    html += `<h2>${esc(g.title)}</h2>${g.note ? `<p class="dim">${esc(g.note)}</p>` : ''}<div class="set">`;
    g.fields.forEach((f, fi) => {
      const idA = `set-${gi}-${fi}`, lab = `<label for="${idA}" class="${changed(f) ? 'changed' : ''}">${esc(f.label)}</label>`;
      if (f.rgb) { const [r, gg, b] = f.rgb.slice(1).map((k, i) => values.get(f.rgb[0] + '|' + k) ?? f.def[i]); html += lab + `<input type="color" id="${idA}" value="#${hex2(r)}${hex2(gg)}${hex2(b)}">`; }
      else if (f.type === 'bool') html += lab + `<input type="checkbox" id="${idA}" ${/^(true|1)$/i.test(values.get(f.sec + '|' + f.key)) ? 'checked' : ''}>`;
      else if (f.type === 'select') html += lab + `<select id="${idA}">${f.options.map((o) => `<option ${String(values.get(f.sec + '|' + f.key)).trim() === o ? 'selected' : ''}>${o}</option>`).join('')}</select>`;
      else html += lab + `<input type="number" id="${idA}" step="${f.step || 0.1}" ${f.min != null ? `min="${f.min}"` : ''} ${f.max != null ? `max="${f.max}"` : ''} value="${esc(String(values.get(f.sec + '|' + f.key)).trim())}">`;
    });
    html += '</div>';
  });
  // the pitch
  const tp = terrainPath(id);
  if (tp && has(tp)) {
    const tname = TERRAIN_FILES[TERRAIN_OF[id]], shared = Object.keys(TERRAIN_OF).filter((s) => s !== id && TERRAIN_OF[s] === TERRAIN_OF[id] && game.stadiums.includes(s));
    const tNow = parseIni(dec(await work(tp))), tOrig = parseIni(dec(await readFile(tp)));
    html += `<h2>The pitch: ${esc(TERRAIN_LABEL[tname])}</h2><p class="dim">How the ground plays, from <code>${esc(fileName(tp))}</code>.${shared.length ? ` <b>Shared</b>: changing it also changes ${shared.map((s) => esc(STADIUMS[s] || s)).join(', ')}.` : ''} (Which kind of pitch a stadium has is set in the game's code, not a file.)</p><div class="set">`;
    TERRAIN_FIELDS.forEach((f, i) => { const v = (iniGet(tNow, 'Field', f.key) || '').trim(), ch = v !== (iniGet(tOrig, 'Field', f.key) || '').trim(); html += `<label for="ter-${i}" class="${ch ? 'changed' : ''}">${esc(f.label)}</label><input type="number" id="ter-${i}" step="${f.step}" ${f.min != null ? `min="${f.min}"` : ''} ${f.max != null ? `max="${f.max}"` : ''} value="${esc(v)}">`; });
    html += `</div><p class="dim">For comparison: ${TERRAIN_FILES.map((t) => esc(TERRAIN_LABEL[t])).join(', ')}. The players' own terrain skills (CharTweaks.ini) scale these.</p>`;
  }
  html += `<h2>The whole file</h2><p class="dim">Everything in <code>${esc(fileName(iniPath(id)))}</code>, for settings without a box above (warble, shadow lookup...).</p><textarea class="raw" id="rawIni" spellcheck="false"></textarea>
    <div class="btns"><button class="small" id="rawApply">Use this text</button><button class="small" id="setReset" ${edits.has(iniPath(id)) || (tp && edits.has(tp)) ? '' : 'disabled'}>Undo this stadium's settings</button></div>`;
  $('pane-settings').innerHTML = html;
  $('rawIni').value = dec(await work(iniPath(id)));
  // after a change: mark what differs from the game's own values (the boxes stay as they are)
  const mark = async () => {
    const o = await stadiumSettings(id, true), n = await stadiumSettings(id, false);
    SETTINGS.forEach((g, gi) => g.fields.forEach((f, fi) => { const ch = fieldKeys(f).some(([sec, key, d]) => String(n.val(sec, key, d)).trim() !== String(o.val(sec, key, d)).trim()); $(`set-${gi}-${fi}`).previousElementSibling.classList.toggle('changed', ch); }));
    if (tp && has(tp)) { const tN = parseIni(dec(await work(tp))), tO = parseIni(dec(await readFile(tp))); TERRAIN_FIELDS.forEach((f, i) => $(`ter-${i}`).previousElementSibling.classList.toggle('changed', (iniGet(tN, 'Field', f.key) || '').trim() !== (iniGet(tO, 'Field', f.key) || '').trim())); }
    $('rawIni').value = dec(await work(iniPath(id)));
    $('setReset').disabled = !(edits.has(iniPath(id)) || (tp && edits.has(tp)));
    renderSidebar(); renderMod(); updateBadge();
  };
  const commit = () => queued(async () => { await writeStadiumIni(id, values); await applyFog(); await mark(); });
  SETTINGS.forEach((g, gi) => g.fields.forEach((f, fi) => {
    const el = $(`set-${gi}-${fi}`);
    el.onchange = async () => {
      if (f.rgb) { const h = el.value; f.rgb.slice(1).forEach((k, i) => values.set(f.rgb[0] + '|' + k, String(parseInt(h.slice(1 + 2 * i, 3 + 2 * i), 16)))); }
      else if (f.type === 'bool') values.set(f.sec + '|' + f.key, el.checked ? 'true' : 'false');
      else if (f.type === 'select') values.set(f.sec + '|' + f.key, el.value);
      else { const s = numStr(el.value, f); if (s == null) { toast('That needs to be a number.', true); return; } values.set(f.sec + '|' + f.key, s); }
      await commit();
    };
  }));
  if (tp && has(tp)) TERRAIN_FIELDS.forEach((f, i) => {
    $(`ter-${i}`).onchange = (e) => queued(async () => {
      const s = numStr(e.target.value, { ...f, def: '0.00' }); if (s == null) { toast('That needs to be a number.', true); return; }
      const origText = dec(await readFile(tp)), text = iniSet(dec(await work(tp)), [['Field', f.key, s]]);
      if (text === origText) edits.delete(tp); else setEdit(tp, enc(text), null);
      await mark();
    });
  });
  $('rawApply').onclick = () => queued(async () => { const p = iniPath(id), t = $('rawIni').value.replace(/\r?\n/g, /\r\n/.test(dec(await readFile(p))) ? '\r\n' : '\n'); if (t === dec(await readFile(p))) edits.delete(p); else setEdit(p, enc(t), null); renderSidebar(); renderMod(); await applyFog(); await renderSettingsKeepScroll(); toast('Settings file updated.'); });
  $('setReset').onclick = () => queued(async () => { edits.delete(iniPath(id)); if (tp) edits.delete(tp); window.onbeforeunload = edits.size ? () => '' : null; renderSidebar(); renderMod(); await applyFog(); await renderSettingsKeepScroll(); });
}
let setQueue = Promise.resolve();
const queued = (fn) => (setQueue = setQueue.then(fn).catch((e) => { console.error(e); toast(e.message || String(e), true); }));
async function renderSettingsKeepScroll() { const p = $('pane-settings'), y = p.scrollTop; await renderSettings(); p.scrollTop = y; }
// fog in the 3D view, from the settings the view shows (yours or the original)
async function applyFog() {
  if (!cur || !view.model) return;
  const s = await stadiumSettings(cur.id, cur.view === 'orig');
  const on = /^(true|1)$/i.test(String(s.val('Render/Fog', 'Fog Enabled', 'false')).trim());
  if (on) {
    const rgb = ['Fog Red', 'Fog Green', 'Fog Blue'].map((k) => +s.val('Render/Fog', k, 160) / 255);
    const col = new THREE.Color().setRGB(...rgb, THREE.SRGBColorSpace);
    view.scene.fog = new THREE.Fog(col, +s.val('Render/Fog', 'Fog Start', 40), Math.max(+s.val('Render/Fog', 'Fog End', 260), +s.val('Render/Fog', 'Fog Start', 40) + 1));
    view.fogMax.value = Math.max(0, Math.min(1, +s.val('Render/Fog', 'Fog Intensity', 1)));
  } else view.scene.fog = null;
  view.model.traverse((o) => { if (o.isMesh) o.material.needsUpdate = true; });
  updateBadge();
}
// three.js fog, linear like the game's, with a top strength ("Fog Intensity")
function fogMaterial(m) {
  m.fog = true;
  m.onBeforeCompile = (sh) => {
    sh.uniforms.fogMax = view.fogMax;
    sh.fragmentShader = 'uniform float fogMax;\n' + sh.fragmentShader.replace('#include <fog_fragment>', '#ifdef USE_FOG\n  float fogF = clamp((vFogDepth - fogNear) / (fogFar - fogNear), 0.0, 1.0) * fogMax;\n  gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, fogF);\n#endif');
  };
  return m;
}

// ------------------------------------------------------------------ mod
function renderMod() {
  const files = [...edits.keys()];
  $('pane-mod').innerHTML = `
    <h2>Changed files</h2>
    ${files.length ? `<ul class="files">${files.map((f) => `<li class="mono">${esc(fileName(f))}</li>`).join('')}</ul>` : '<p class="dim">Nothing changed yet. Repaint something on the Textures tab, change a team\'s fans, or a stadium\'s settings.</p>'}
    <h2>Mod for the PC port (F10 &gt; Mods)</h2>
    <div class="field"><label>Name (shown in F10 &gt; Mods)</label><input type="text" id="modName" value="${esc(game.modName || 'My stadium mod')}"></div>
    <div class="field"><label>Description</label><input type="text" id="modDesc" value="${esc(game.modDesc || 'Stadium changes. Applies the next time the game starts.')}"></div>
    <div class="btns"><button class="primary" id="mkPack" ${files.length ? '' : 'disabled'}>Download mod pack (.zip)</button></div>
    <ol class="steps"><li>Unzip it into <code>%LOCALAPPDATA%\\MSCRecomp\\Riivolution</code>.</li><li>In the game: <b>F10 &gt; Mods</b>, turn it on, restart the game.</li></ol>
    <p class="dim">One pack holds every change you made here, across all the stadiums and teams.</p>
    <h2>Keep working on a mod</h2>
    <p class="dim">Open a mod pack you made before (the .zip) to carry on where you left off. Its changes replace the ones open here.</p>
    <div class="btns"><button id="openPack">Open a mod pack…</button></div>
    <h2>Just the files</h2>
    <div class="btns"><button id="mkFiles" ${files.length ? '' : 'disabled'}>Files in the game's layout (.zip)</button></div>
    <h2>Start over</h2>
    <div class="btns"><button id="resetOne" ${edits.has(cur.tmpPath) || edits.has(cur.resPath) ? '' : 'disabled'}>Undo ${esc(STADIUMS[cur.id] || cur.id)}'s repaint and moved objects</button><button id="resetAll" ${files.length ? '' : 'disabled'}>Discard everything</button></div>`;
  $('modName').oninput = (e) => (game.modName = e.target.value); $('modDesc').oninput = (e) => (game.modDesc = e.target.value);
  const zipFiles = (prefix) => { const z = {}; for (const f of files) z[prefix + fileName(f)] = edits.get(f); return z; };
  $('mkPack').onclick = () => {
    const name = $('modName').value.trim() || 'My stadium mod', desc = $('modDesc').value.trim();
    const slug = (name.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '') || 'stadium_mod').slice(0, 40);
    const xml = `<wiidisc version="1" root="/${slug}">\n  <id game="R4QE"/>\n  <options>\n    <section name="${xe(name)}">\n      <option name="${xe(name)}" id="${slug}" default="1" description="${xe(desc)}">\n        <choice name="Enabled"><patch id="${slug}"/></choice>\n      </option>\n    </section>\n  </options>\n  <patch id="${slug}">\n    <folder disc="/" external="files" create="true"/>\n  </patch>\n</wiidisc>\n`;
    const info = { app: 'Strikers Stadium Studio', name, description: desc, names: Object.fromEntries([...extraNames].map(([h, n]) => [hex8(h), n])) };
    download(`${slug}.zip`, zipSync({ [`riivolution/${slug}.xml`]: new TextEncoder().encode(xml), [`${slug}/stadium-studio.json`]: new TextEncoder().encode(JSON.stringify(info, null, 1)), ...zipFiles(`${slug}/files/`) }, { level: 0 }));
  };
  $('mkFiles').onclick = () => download('stadium_files.zip', zipSync(zipFiles(''), { level: 0 }));
  $('openPack').onclick = () => { const inp = $('packInput'); inp.value = ''; inp.onchange = () => inp.files[0] && openPack(inp.files[0]); inp.click(); };
  $('resetOne').onclick = async () => { resetStadium(); cur.sel = null; cur.selSet = new Set(); await refresh(); renderAll(); };
  $('resetAll').onclick = async () => { if (!confirm('Discard every change?')) return; edits.clear(); cur.work = cur.orig; if (cur.origRes) { cur.resWork = cur.origRes.slice(); cur.scene = parseScene(cur.resWork, nameOf); } cur.sel = null; cur.selSet = new Set(); window.onbeforeunload = null; await refresh(); renderAll(); if ($('pane-fans').classList.contains('on')) renderFans(); };
}
// a mod pack made here (or any Riivolution pack / "just the files" zip with stadium files in it)
async function openPack(file) {
  busy('Opening the mod pack…');
  try {
    const z = unzipSync(new Uint8Array(await file.arrayBuffer())), dec = new TextDecoder();
    let root = null, xmlName = null, info = null;
    for (const k of Object.keys(z)) {
      const m = /^(?:.*\/)?riivolution\/([^/]+)\.xml$/i.exec(k);
      if (m) { const x = dec.decode(z[k]); const ext = /external="([^"]+)"/.exec(x), rt = /root="\/?([^"]*)"/.exec(x), sec = /<section name="([^"]+)"/.exec(x); root = ((rt ? rt[1] : m[1]) + '/' + (ext ? ext[1] : 'files') + '/').replace(/^\/+/, ''); xmlName = sec && sec[1]; }
      if (/stadium-studio\.json$/i.test(k)) try { info = JSON.parse(dec.decode(z[k])); } catch (e) { /* not ours */ }
    }
    const pick = new Map();
    for (const [k, data] of Object.entries(z)) {
      if (k.endsWith('/') || !data.length) continue;
      let rel = null;
      if (root && k.toLowerCase().startsWith(root.toLowerCase())) rel = k.slice(root.length);
      else if (!root) { const m = /(?:^|\/)((?:art|ini)\/.+)$/i.exec(k); if (m) rel = m[1]; }
      if (rel && has(rel)) pick.set(rel.toLowerCase(), data);
    }
    if (!pick.size) throw new Error("That zip has no stadium, fan or settings files this app knows.");
    edits.clear(); for (const [k, v] of pick) edits.set(k, v);
    if (info && info.names) for (const [h, n] of Object.entries(info.names)) extraNames.set(parseInt(h, 16) >>> 0, n);
    game.modName = (info && info.name) || xmlName || game.modName; if (info && info.description) game.modDesc = info.description;
    window.onbeforeunload = () => 'You have changes that are not saved in a mod yet.';
    srcCache.clear();
    await openStadium(cur.id);
    toast(`Opened ${file.name}: ${pick.size} changed file${pick.size > 1 ? 's' : ''}.`);
  } catch (e) { toast(e.message || String(e), true); console.error(e); } finally { busy(false); }
}
const xe = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// ------------------------------------------------------------------ helpers
function pngUrl(t) { const c = document.createElement('canvas'); c.width = t.w; c.height = t.h; c.getContext('2d').putImageData(new ImageData(new Uint8ClampedArray(t.px), t.w, t.h), 0, 0); return c.toDataURL(); }
function download(name, data) { const url = URL.createObjectURL(new Blob([data])), a = document.createElement('a'); a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 5000); }
function busy(t) { $('busy').classList.toggle('on', !!t); if (t) $('busyText').textContent = t; }
let tt = 0;
function toast(t, bad) { const e = $('toast'); e.textContent = t; e.style.borderColor = bad ? 'var(--bad)' : ''; e.classList.add('on'); clearTimeout(tt); tt = setTimeout(() => e.classList.remove('on'), bad ? 9000 : 4500); }
function pickImage(cb) {
  const inp = $('imgInput'); inp.value = '';
  inp.onchange = async () => {
    const f = inp.files[0]; if (!f) return; const data = new Uint8Array(await f.arrayBuffer());
    try {
      if (data[0] === 0x89 && data[1] === 0x50) return cb(decodePng(data));
      const bmp = await createImageBitmap(new Blob([data]), { premultiplyAlpha: 'none', colorSpaceConversion: 'none' });
      const c = document.createElement('canvas'); c.width = bmp.width; c.height = bmp.height; const x = c.getContext('2d'); x.drawImage(bmp, 0, 0);
      cb({ w: bmp.width, h: bmp.height, px: x.getImageData(0, 0, bmp.width, bmp.height).data });
    } catch (e) { toast('Could not read that picture: ' + e.message, true); }
  };
  inp.click();
}
function tab(t) {
  for (const x of $('tabs').querySelectorAll('button')) x.classList.toggle('on', x.dataset.t === t);
  for (const p of document.querySelectorAll('.pane')) p.classList.toggle('on', p.id === 'pane-' + t);
  if (t === 'fans' && game.fans.length) renderFans();
  if (t === 'objects' && cur && !$('marks').checked) { $('marks').checked = true; if (view.marks) view.marks.visible = true; }
}
async function filesFromDrop(items) {
  const out = [];
  const readDir = (dir) => new Promise((res) => { const r = dir.createReader(), all = []; const next = () => r.readEntries((es) => { if (!es.length) res(all); else { all.push(...es); next(); } }, () => res(all)); next(); });
  const want = (rel) => /(^|\/)art\/(hashid\.bin|environments\/|characters\/crowd|animation\/crowd)|(^|\/)ini\//i.test(rel);
  async function walk(e, rel, depth) {
    if (e.isFile) { if (want(rel + e.name)) { const file = await new Promise((res, rej) => e.file(res, rej)); out.push({ rel: rel + e.name, file }); } return; }
    const n = e.name.toLowerCase(), path = (rel + e.name + '/').toLowerCase();
    if (n === 'riivolution' || depth > 7) return;
    if (/art\/$/.test(path) || /art\/(environments|characters|animation)\//.test(path) || /ini\//.test(path) || !/art\//.test(path)) {
      if (/art\/characters\/[^/]+\/$/.test(path) && !/\/crowd[^/]*\/$/.test(path)) return;
      for (const c of await readDir(e)) await walk(c, rel + e.name + '/', depth + 1);
    }
  }
  for (const it of items) { const e = it.webkitGetAsEntry && it.webkitGetAsEntry(); if (e) await walk(e, '', 0); }
  return out;
}
async function loadFolder(list) {
  busy('Reading the game folder…');
  try {
    setFiles(list); await scan();
    if (!game.stadiums.length) throw new Error('No stadiums found in Art/environments.');
    $('status').textContent = `${game.stadiums.length} stadiums · ${game.fans.length} kinds of fan`;
    await openStadium(game.stadiums.includes('thepalace') ? 'thepalace' : game.stadiums[0]);
  } catch (e) { toast(e.message || String(e), true); console.error(e); } finally { busy(false); }
}

function init() {
  initView(); renderSidebar();
  const open = () => $('folderInput').click();
  $('openBtn').onclick = open; $('openBtn2').onclick = open;
  $('copyPath').onclick = () => { navigator.clipboard?.writeText($('pathText').textContent); toast('Copied. Paste it into the folder window\'s address bar.'); };
  $('folderInput').onchange = (e) => { const list = [...e.target.files].map((file) => ({ rel: file.webkitRelativePath || file.name, file })).filter((x) => /(^|\/)art\/(hashid\.bin|environments\/|characters\/crowd|animation\/crowd)|(^|\/)ini\//i.test(x.rel)); e.target.value = ''; if (list.length) loadFolder(list); else toast('That folder has no Art folder in it.', true); };
  document.addEventListener('dragover', (e) => e.preventDefault());
  document.addEventListener('drop', async (e) => { e.preventDefault(); busy('Reading the dropped folder…'); const list = await filesFromDrop([...(e.dataTransfer.items || [])]); busy(false); if (list.length) loadFolder(list); else toast('Drop the game\'s "files" folder.', true); });
  for (const b of $('tabs').querySelectorAll('button')) b.onclick = () => tab(b.dataset.t);
  for (const b of $('which').querySelectorAll('button')) b.onclick = async () => { if (!cur) return; cur.view = b.dataset.v; for (const x of $('which').querySelectorAll('button')) x.classList.toggle('on', x === b); await refresh(); renderObjects(); };
  for (const b of $('cams').querySelectorAll('button')) b.onclick = () => cur && setCam(b.dataset.c);
  $('light').onchange = applyDisplay; $('wire').onchange = applyDisplay; $('cut').onchange = applyDisplay;
  $('marks').onchange = () => { if (view.marks) view.marks.visible = $('marks').checked; };
  initPicking();
  window.__stadium = { game, edits, get cur() { return cur; }, openStadium, tab, select, view, openPack, extraNames };
}
init();
