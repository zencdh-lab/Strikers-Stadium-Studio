# Strikers Stadium Studio: details

Look around Mario Strikers Charged's 19 stadiums, repaint them, choose which fans cheer for each
team, and make a mod that turns on in the PC port's **F10 > Mods** (or Dolphin, or a Wii). It runs
in your browser, with nothing to install, and it never changes your game files.

## Use it

1. Double-click **`app\index.html`** (Chrome or Edge work best).
2. **Open game folder**: the extracted game's **files** folder. For the PC port that's
   `%LOCALAPPDATA%\MSCRecomp\Game\files`. The browser may say it will "upload" the files: nothing
   leaves your computer.
3. Pick a stadium.

| Tab | What it does |
| --- | --- |
| **Stadium** | numbers, the stadium's moving parts (flags, signs, the field generator, flying cameras, blimps, the riot guards...), whether it has a goal event, **Export stadium (.glb)** |
| **Textures** | **the pitch as one picture** (download, paint, put back), every texture with **Replace…**, the animated pictures (the big screens, the captain's face) and their frames |
| **Stadium: Remodel it in Blender** | **Export stadium (.glb)**, change it in Blender, **Bring it back (.glb)**: the stadium's model is replaced by yours (see below). A meter shows the stadium's size against the biggest one in the game. |
| **Objects** | everything placed in the stadium: props (signs, small flags, foam fingers, field generators, flying cameras…), big-flag spots, crowd spots, riot-guard spots and effects. Click one (in the list or the 3D view), then move it (x along the pitch, y across, z up, in metres) or turn it. **Copy this prop** adds another of the same kind; **Remove** takes one out. **Add a prop from any stadium** brings a prop kind in from another stadium. **Markers** shows the points. Many at once: **Select all** (a group or one kind of prop), **Ctrl+click**, or **Shift+drag** a box in the 3D view. Drag a selected object in the 3D view to move the selection along the ground (**Alt+drag** for height; **Snap** for 0.5 m and 15° steps); the sliders move, turn (round their middle) and **spread** them (away from or towards the centre spot) from where they were when selected. **Sit on the stadium** drops each one onto the first floor below it. Keys: arrows nudge (along the game's nearest axis to where the camera looks), PgUp/PgDn height, Q/E turn, Del remove, Ctrl+D copy, Ctrl+Z / Ctrl+Y undo and redo. Only props can be removed: the game expects its crowd, flag and riot-guard spots. |
| **Settings** | the stadium's fog (shown in the 3D view), the light colour on the players, glow, player shadows, how the crowd is packed, and **the pitch**: running speed, slipperiness, ball drag and bounce. The whole settings file is there too, for anything else. |
| **Fans** | each team's crowd list: tick which fans cheer for them (up to 8 kinds), and watch each fan's two animations: **Watching** and **Goal!** |
| **Mod** | **Download mod pack (.zip)**: unzip into `%LOCALAPPDATA%\MSCRecomp\Riivolution`, turn it on in F10 > Mods, restart. One pack holds every change. |

The 3D view: **Your version / Original**, **TV view / Top / Wide**, **Baked light** (the stadium's
painted-in lighting), **Cut away roof** (hides everything above 8 m, for indoor stadiums), **Wire**.

## What a stadium is

| File | What's in it |
| --- | --- |
| `Art/environments/<stadium>/gameworld.tmp.zlib` | the textures, the stadium's model (lighting baked into vertex colours), its props' models |
| `Art/environments/<stadium>/gameworld.res.zlib` | the scene: every placed object (The Palace: 361, The Vice: 622) with its position (the Objects tab), the props' skeletons and animations |
| `ini/Stadiums/<stadium>.ini` | fog, light colours, glow, crowd spacing (the Settings tab); what it leaves out comes from `default.ini` |
| `ini/Terrain/<kind>Terrain.ini` | how the pitch plays (the Settings tab) |
| `ini/CrowdCharacterLists/<Captain>.ini` | which fans cheer for each team (the Fans tab) |
| `Art/characters/crowd*/`, `Art/animation/crowd*` | the fans: small models with an `idle` and an `excited` animation |

There's no collision in a stadium's files, and the goal sizes are set "for all stadiums" in
`ini/Stadiums/default.ini`: the pitch and goals look to be the game's own, the same everywhere
(still to confirm in game; some stadiums do have invisible walls, the `phyplane` objects). So a new stadium would be a new look around the same pitch.

**The pitch.** Each stadium has one of six kinds of pitch, set in the game's code (its stadium
table), not in a file: Dry (Bowser Stadium, Crystal Canyon, Lava Pit, Sand Tomb, Tutorial Field),
Normal (Battle Dome, Galactic Stadium, Konga Coliseum, Pipeline Central, Stormship Stadium,
Underground), Slow (The Palace, The Vice, Crater Field), Wet (Dump), Slippery (The Wastelands) and
Thunder (Thunder Island). Stadiums with the same kind share its file, so a change to The Palace's
pitch also changes The Vice and Crater Field.

**The object list.** Each object has a kind, a name and a position. A prop (`sign_proxy01`) is a
copy of one of the stadium's prop models: its pieces (`sign_proxy01/sign_type1`) are its children,
and a small "binding" record before it ties it to its animation (`Idle`). Crowd spots (`helperNN`, or `crowdNN` in Dump, Lava Pit and Konga Coliseum) sit on the stands facing
the pitch, so they're most likely where the fans go; moving one is still to try in the game. A copied prop gets new
names (`sign_proxy22`), so the game sees a new object of the same kind. The physics planes
(`phyplaneNN`, the invisible walls in some stadiums) are in the list too, not shown yet.

**Props from other stadiums.** A prop kind is: its model or models (in `gameworld.tmp`, found
through the object hashes its pieces use), the textures those models mention (and an animated
texture's frames), its skeleton and its two animations (`idle` and one named after it, in
`gameworld.res`), and its records in the object list. Adding one copies what the stadium doesn't
already have: models and skeletons are skipped when one with the same id or name is there. The
texture list is rewritten the way the game writes it: its directory sorted by hash, each picture
on a multiple of 32 bytes, and each entry's fourth word the padding after its picture. (This
writer gives back every stadium's list byte for byte; repainting now uses it too.) New skeletons
and animations go at the end of `gameworld.res`, so nothing already there moves.

**Opening a mod again.** A pack from this app also carries `<mod>/stadium-studio.json`, outside
the files the game reads: the mod's name and the names of copied or added props (the game's name
list doesn't have them). Without it, the names are worked out from the props' kinds.

**Remodelling in Blender.** The stadium's model (model 0 of `gameworld.tmp`) is a list of pieces
(packets: strips of vertices with a shader and its settings), grouped in objects, each object placed
by a record in the object list. Bringing a .glb back:
- a piece exported by the studio (`m0_pieceNNN`) that comes back where it was (to 2 cm) is copied as
  the game had it: its shader (shine, reflections, the goals' look), settings and textures;
- anything else is built new with the game's plain stadium shader `stadiumdiffuse` (one texture, the
  baked light in the vertex colours; settings `tex, ffff0000, 0, 0, blend, ground, 1, 0, 0`):
  smooth see-through materials (glTF BLEND) get an RGB5A3 texture and the blend flag, the rest CMPR;
  materials named like ground/field/grass/floor/ice get the ground flag (it's on the game's pitch
  tiles); vertices are kept under 1,500 per piece, like the game's own;
- each new Blender object becomes one object of the model with its own record (its size and reach
  worked out); records of objects that are gone come out. A piece named with "sky" is placed like
  the stadium's own sky;
- vertex colours from Wii games are usually stored at half brightness; when the new pieces' colours
  are mostly below 0.56, they're doubled (Baked light: Automatic);
- textures only the old pieces used are taken out; textures the props or the game's code use stay.

The game's stadiums are 2.3 to 3.53 MB (`gameworld.tmp`, unpacked); the studio warns above 3.55 MB.
The Palace exported and brought straight back gives both files byte for byte (tests/stadiumimport).
**Not yet tried in the game.**

**Goal events.** The Vice and The Wastelands have the riot guards: the goal transition where the
machines come out is a cutscene (`vice_riotguard_home_0.nis`, `wastelands_riotguard_home_0.nis`),
the stadium's `riotguard` prop, and the game's `CrowdRiot` code (found from the files and the
game's code names; how it's triggered isn't traced yet). The other stadiums are "classic": goals are the crowd cheering
and the replay. The Vice's own crowd is a texture animation (four pictures, 0.1 s each) on panels.

## What's tested

- All 19 stadiums: read, shown, and rebuilt byte for byte; every texture (CMPR, RGB5A3, RGBA8 and
  the animated lists) reads; the pitch tiles (The Palace, The Vice, The Wastelands) split and join
  back to the game's bytes.
- All 36 fans with both animations; the animation reader matches the Python one (`sanim.py`) on
  every value of 97 Luigi animations, the fans, the riot guard and The Vice's props.
- All 19 object lists read (one record for every object the file counts); a moved and a copied
  prop write back with every other object byte for byte the same; props show in the 3D view where
  the game places them.
- **In the game: a copied prop works, and changed fans work.**
- All 92 prop kinds in the 19 stadiums can be gathered for adding elsewhere; a Konga Coliseum
  prop added to The Palace leaves both files readable.
- A repainted pitch, changed settings, moved, removed and added objects, packed as a mod and opened
  again. Settings files keep every line you didn't change as it was. These aren't tried in the
  game yet.

Not yet: editing animations. Some surfaces in The Vice show as flat brown sheets; in the game they may
be see-through (that material flag isn't decoded yet).
