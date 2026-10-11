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
| **Objects** | everything placed in the stadium: props (signs, small flags, foam fingers, field generators, flying cameras…), big-flag spots, crowd spots, riot-guard spots and effects. Click one (in the list or the 3D view), then move it (x along the pitch, y across, z up, in metres) or turn it. **Copy this prop** adds another of the same kind. **Markers** shows the points. |
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
- A repainted pitch, a changed crowd list, changed settings and moved objects, packed as a mod. Settings files keep
  every line you didn't change as it was. **Not yet tried in the game.**

Not yet: removing objects, adding a prop the stadium doesn't already have, editing animations, bringing a remodelled
stadium back from Blender. Some surfaces in The Vice show as flat brown sheets; in the game they may
be see-through (that material flag isn't decoded yet).
