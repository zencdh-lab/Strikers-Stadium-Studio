// Strikers Stadium Studio: look around the game's stadiums, repaint their textures (the pitch as one
// picture), choose which fans cheer for each team (with their idle and goal animations), and pack
// the changed files as a mod. Shares the file formats with Model Studio.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { zipSync } from 'fflate';
import { boneNames, readTextures, decodeTex, texHeader, encodePng, decodePng, loadShier, hex8, nlHash } from './formats.js';
import { exportGlb } from './export.js';
import { reencodeBundle } from './import.js';
import { parseWorld, exportStadiumGlb, rebuildTmp, packZlib, findPitch, stitchPitch, splitPitch, parseRes, readIfl } from './stadium.js';
import { loadAnims, sample, sampleRoot } from './anim.js';
import { parseIni, iniGet, iniSet } from './ini.js';
import { parseScene, worldMatrix, KIND, setMatrix, getPlace, withPlace, copyProp, freeName } from './scene.js';
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
    cur = { id, tmpPath, resPath, origZ, orig, res, view: 'work', cam: 'tv', sel: null };
    if (has(resPath)) { cur.origRes = unpackZlib(await readFile(resPath)); cur.resWork = edits.has(resPath) ? unpackZlib(edits.get(resPath)) : cur.origRes.slice(); cur.origScene = parseScene(cur.origRes, nameOf); cur.scene = parseScene(cur.resWork, nameOf); }
    cur.pitch = orig.textures ? findPitch(orig, game.names) : null;
    await loadWork(); renderSidebar(); $('welcome').hidden = true;
    await refresh(true); renderAll();
  } catch (e) { toast(e.message || String(e), true); console.error(e); }
  finally { busy(false); }
}
async function loadWork() { cur.work = edits.has(cur.tmpPath) ? parseWorld(edits.get(cur.tmpPath), game.names) : cur.orig; }
const texMap = (w) => new Map(readTextures(w.textures).map((e) => [e.hash, e.blob]));
async function replaceTextures(changes) {
  const r = reencodeBundle(cur.work.textures, changes, []);
  if (!r.reencoded.length) return 0;
  const tmp = rebuildTmp(cur.work.tmp, r.out), z = packZlib(tmp);
  setEdit(cur.tmpPath, z, null);
  cur.work = parseWorld(z, game.names);
  return r.reencoded.length;
}
function resetStadium() { edits.delete(cur.tmpPath); cur.work = cur.orig; if (cur.resPath) { edits.delete(cur.resPath); if (cur.origRes) { cur.resWork = cur.origRes.slice(); cur.scene = parseScene(cur.resWork, nameOf); } } window.onbeforeunload = edits.size ? () => '' : null; }

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
  const what = [edits.has(cur.tmpPath) && 'repainted', edits.has(cur.resPath) && 'objects moved', (edits.has(iniPath(cur.id)) || (terrainPath(cur.id) && edits.has(terrainPath(cur.id)))) && 'settings changed'].filter(Boolean);
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
    <h2>Take it into Blender</h2>
    <div class="btns"><button id="expGlb">Export stadium (.glb)</button></div>
    <p class="dim">For looking at or planning a remodel in Blender. Bringing a remodelled stadium back comes later; repainting works now (Textures tab).</p>`;
  $('expGlb').onclick = () => { const { glb } = exportStadiumGlb({ world: cur.work, names: game.names, only: [0] }); download(`${cur.id}.glb`, glb); };
}

function texRole(n) {
  const r = [[/\/field\d+$/, 'pitch'], [/sky/, 'sky'], [/crowd/, 'crowd'], [/sign|banner|logo|ad_/, 'sign'], [/spec/, 'shine'], [/env|reflect/, 'reflection'], [/shadow/, 'shadow'], [/net/, 'net'], [/goal/, 'goal']];
  return (r.find(([re]) => re.test(n)) || [0, ''])[1];
}
function renderTextures() {
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
  const sc = sceneFor(); if (!sc) return;
  for (const r of sc.recs) {
    const g = groupOf(r); if (!g || g.id === 'props') continue;
    const obj = new THREE.Mesh(new THREE.OctahedronGeometry(g.id === 'fx' ? 0.35 : 0.6), new THREE.MeshBasicMaterial({ color: MARK_COL[g.id] }));
    obj.matrixAutoUpdate = false; obj.matrix.copy(toView(worldMatrix(sc, r.i))); obj.userData.rec = r.i;
    obj.traverse((o) => { o.userData.rec = r.i; });
    view.marks.add(obj);
  }
  view.marks.updateMatrixWorld(true);
  showSelection();
}
function showSelection() {
  if (view.selBox) { view.scene.remove(view.selBox); view.selBox = null; }
  if (cur.sel == null) return;
  const box = new THREE.Box3();
  for (const g of (view.propOf && view.propOf.get(cur.sel)) || []) box.expandByObject(g);
  if (view.marks) for (const m of view.marks.children) if (m.userData.rec === cur.sel) box.expandByObject(m);
  if (box.isEmpty()) { const r = sceneFor().recs[cur.sel]; if (!r || !r.m) return; const p = new THREE.Vector3(0, 0, 0).applyMatrix4(toView(worldMatrix(sceneFor(), r.i))); box.setFromCenterAndSize(p, new THREE.Vector3(1, 1, 1)); }
  box.expandByScalar(0.15);
  view.selBox = new THREE.Box3Helper(box, 0xffee00); view.scene.add(view.selBox);
}
function lookAtSel() {
  if (!view.selBox) return;
  const c = view.selBox.box.getCenter(new THREE.Vector3()), sz = view.selBox.box.getSize(new THREE.Vector3()).length();
  const dir = view.camera.position.clone().sub(view.controls.target).normalize();
  view.controls.target.copy(c); view.camera.position.copy(c.clone().add(dir.multiplyScalar(Math.max(6, sz * 1.6)))); view.controls.update();
}
// writes cur.resWork into the mod, re-reads the scene, redraws
function commitScene() {
  setEdit(cur.resPath, packZlib(cur.resWork), null);
  if (bytesEq(cur.resWork, cur.origRes)) edits.delete(cur.resPath);
  cur.scene = parseScene(cur.resWork, nameOf);
  placeProps(); renderSidebar(); renderMod(); updateBadge();
}
function renderObjects() {
  const sc = sceneFor();
  if (!sc) { $('pane-objects').innerHTML = '<p class="dim">This stadium has no object list.</p>'; return; }
  const changed = (r) => { const o = cur.origScene.recs.find((x) => x.hash === r.hash && x.kind === r.kind); return !o || (r.m && o.m && r.m.some((v, k) => Math.abs(v - o.m[k]) > 1e-5)); };
  let html = `<h2>${esc(STADIUMS[cur.id] || cur.id)}: what's placed where</h2><p class="dim">${sc.count} objects in the stadium's scene. Click one here or in the 3D view to select it, then move it. Positions are in metres: <b>x</b> along the pitch, <b>y</b> across it, <b>z</b> up; the centre spot is 0, 0, 0.</p>`;
  if (cur.view === 'orig') html += '<div class="box">You\'re looking at the original. Switch to <b>Your version</b> to move things.</div>';
  html += '<div id="selEditor"></div>';
  for (const g of GROUPS) {
    const list = sc.recs.filter((r) => groupOf(r) === g); if (!list.length) continue;
    html += `<h2>${esc(g.title)} <span class="chip">${list.length}</span></h2>${g.note ? `<p class="dim">${esc(g.note)}</p>` : ''}<div class="objlist">`;
    if (g.id === 'props') {
      const by = new Map(); for (const r of list) { const k = stem(r.name) || 'prop'; if (!by.has(k)) by.set(k, []); by.get(k).push(r); }
      for (const [k, rs] of by) html += `<div class="objsub">${esc(k)} <span class="dim">×${rs.length}</span></div>` + rs.map((r) => objBtn(r, changed(r))).join('');
    } else html += list.map((r) => objBtn(r, changed(r))).join('');
    html += '</div>';
  }
  $('pane-objects').innerHTML = html;
  for (const b of $('pane-objects').querySelectorAll('.obj')) b.onclick = () => select(+b.dataset.i, true);
  renderSelEditor();
}
const objBtn = (r, ch) => `<button class="obj ${cur.sel === r.i ? 'on' : ''} ${ch ? 'changed' : ''}" data-i="${r.i}" title="${esc(r.name || '')}">${esc((r.name || hex8(r.hash)).replace(/^.*\//, ''))}${ch ? ' ●' : ''}</button>`;
function select(i, frame) {
  cur.sel = i; showSelection(); if (frame) lookAtSel();
  for (const b of $('pane-objects').querySelectorAll('.obj')) b.classList.toggle('on', +b.dataset.i === i);
  renderSelEditor();
}
function renderSelEditor() {
  const el = $('selEditor'); if (!el) return;
  const sc = sceneFor(), r = cur.sel != null && sc ? sc.recs[cur.sel] : null;
  if (!r || !r.m) { el.innerHTML = ''; return; }
  const g = groupOf(r), p = getPlace(r), edit = cur.view !== 'orig';
  const num = (id, v, step) => `<input type="number" id="${id}" step="${step}" value="${(+v).toFixed(2)}" ${edit ? '' : 'disabled'}>`;
  el.innerHTML = `<div class="box sel"><b>${esc(r.name || hex8(r.hash))}</b> <span class="chip">${esc(g ? g.title.replace(/s$/, '') : '')}</span>
    <div class="set">
      <label for="px">x (along the pitch)</label>${num('px', p.x, 0.25)}
      <label for="py">y (across)</label>${num('py', p.y, 0.25)}
      <label for="pz">z (height)</label>${num('pz', p.z, 0.25)}
      <label for="pt">Turn (degrees)</label>${num('pt', p.turn, 5)}
    </div>
    <div class="btns"><button class="small" id="selLook">Look at it</button>${r.kind === KIND.PROXY && edit ? '<button class="small" id="selCopy">Copy this prop</button>' : ''}<button class="small" id="selUndo" ${edit ? '' : 'disabled'}>Put it back</button></div>
    ${r.kind === KIND.PROXY ? '<p class="dim" style="margin:6px 0 0">A copy is a new prop of the same kind, with its own name, placed 2 m along. New props are an experiment: try them in the game.</p>' : ''}</div>`;
  $('selLook').onclick = lookAtSel;
  if (!edit) return;
  const apply = () => {
    const v = (id) => +$(id).value; if (['px', 'py', 'pz', 'pt'].some((id) => !isFinite(v(id)))) return;
    setMatrix(cur.resWork, r, withPlace(r, { x: v('px'), y: v('py'), z: v('pz'), turn: v('pt') }));
    commitScene(); showSelection(); markChangedObjs();
  };
  for (const id of ['px', 'py', 'pz', 'pt']) $(id).onchange = apply;
  $('selUndo').onclick = () => {
    const o = cur.origScene.recs.find((x) => x.hash === r.hash && x.kind === r.kind);
    if (!o) { toast('This is a new prop: to remove it, use "Start over" on Make mod (or undo this stadium\'s objects).', true); return; }
    setMatrix(cur.resWork, r, o.m); commitScene(); renderObjects(); showSelection();
  };
  if ($('selCopy')) $('selCopy').onclick = () => {
    try {
      const name = freeName(sc, r.name), m = r.m.slice(); m[12] += 2;
      const out = copyProp(cur.resWork, sc, r.i, name, m);
      extraNames.set(nlHash(name), name);
      for (const k of [r.i, ...(r.kids || [])]) { const n = sc.recs[k].name; if (n) extraNames.set(nlHash(name + n.slice(r.name.length)), name + n.slice(r.name.length)); }
      const deep = (j) => { for (const k of sc.recs[j].kids || []) { const n = sc.recs[k].name; if (n) extraNames.set(nlHash(name + n.slice(r.name.length)), name + n.slice(r.name.length)); deep(k); } }; deep(r.i);
      cur.resWork = out; commitScene();
      const nr = cur.scene.recs.find((x) => x.name === name && x.kind === KIND.PROXY);
      renderObjects(); if (nr) select(nr.i, true);
      toast(`Copied as ${name}.`);
    } catch (e) { toast(e.message, true); }
  };
}
function markChangedObjs() {
  const sc = sceneFor();
  for (const b of $('pane-objects').querySelectorAll('.obj')) { const r = sc.recs[+b.dataset.i]; const o = cur.origScene.recs.find((x) => x.hash === r.hash && x.kind === r.kind); const ch = !o || (r.m && r.m.some((v, k) => Math.abs(v - o.m[k]) > 1e-5)); b.classList.toggle('changed', !!ch); b.textContent = (r.name || hex8(r.hash)).replace(/^.*\//, '') + (ch ? ' ●' : ''); }
}
// click to select in the 3D view (a click, not a drag)
function initPicking() {
  const el = view.r.domElement; let down = null;
  el.addEventListener('pointerdown', (e) => { down = [e.clientX, e.clientY]; });
  el.addEventListener('pointerup', (e) => {
    if (!down || Math.hypot(e.clientX - down[0], e.clientY - down[1]) > 4 || !cur) return;
    const rect = el.getBoundingClientRect(), ray = new THREE.Raycaster();
    ray.setFromCamera(new THREE.Vector2(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1), view.camera);
    const targets = [...(view.props ? view.props.children : []), ...(view.marks && view.marks.visible ? view.marks.children : [])];
    const hit = ray.intersectObjects(targets, true).find((h) => h.object.userData.rec != null || (h.object.parent && h.object.parent.userData.rec != null));
    if (!hit) return;
    const i = hit.object.userData.rec != null ? hit.object.userData.rec : hit.object.parent.userData.rec;
    tab('objects'); select(i, false);
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
    download(`${slug}.zip`, zipSync({ [`riivolution/${slug}.xml`]: new TextEncoder().encode(xml), ...zipFiles(`${slug}/files/`) }, { level: 0 }));
  };
  $('mkFiles').onclick = () => download('stadium_files.zip', zipSync(zipFiles(''), { level: 0 }));
  $('resetOne').onclick = async () => { resetStadium(); cur.sel = null; await refresh(); renderAll(); };
  $('resetAll').onclick = async () => { if (!confirm('Discard every change?')) return; edits.clear(); cur.work = cur.orig; if (cur.origRes) { cur.resWork = cur.origRes.slice(); cur.scene = parseScene(cur.resWork, nameOf); } cur.sel = null; window.onbeforeunload = null; await refresh(); renderAll(); if ($('pane-fans').classList.contains('on')) renderFans(); };
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
  window.__stadium = { game, edits, get cur() { return cur; }, openStadium, tab, select, view };
}
init();
