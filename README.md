# Strikers Stadium Studio

A stadium editor for **Mario Strikers Charged**. It runs in your web browser, with nothing to
install. It makes mods for the [Strikers-WiiCompiled](https://github.com/BlackAndBlue95/Strikers-WiiCompiled)
PC port (**F10 > Mods**). The same mods also work in Dolphin and on a Wii, through Riivolution.

It never changes your game files. Everything you make comes out as a mod you can turn on and off.

> [!NOTE]
> This is an early version. Tried in the game so far: copied props and changed fans both work.

## What you can do

| Tab | What it's for |
| --- | --- |
| **Stadium** | Look around in 3D. **Remodel it in Blender**: export the stadium (.glb), change it or build a new one, and bring it back. |
| **Textures** | Repaint anything. The pitch comes out as one picture to paint over. |
| **Fans** | Choose which fans cheer for each team, and watch their animations. |
| **Objects** | Move, turn, copy or remove the props (signs, flags, foam fingers, field generators, flying cameras…), and **add props from any other stadium**, like Konga Coliseum's grass in The Palace. Move the big-flag spots and crowd spots too. Select many at once (**Select all** for a group, **Ctrl+click**, or **Shift+drag** a box in the 3D view), drag them in the 3D view, move/turn/spread them together with the sliders, **Sit on the stadium** drops them onto the stands below, and **Undo** (Ctrl+Z) takes back any step. |
| **Settings** | Fog, light colour, glow, shadows, crowd spacing, and how the pitch plays (speed, slipperiness, ball bounce). |
| **Mod** | Download everything you changed as one mod, or open a mod you made before to keep working on it. |

## How to use it

1. **Open it.** Download this repository (**Code > Download ZIP**), unzip it, and double-click `app/index.html` (Chrome or Edge work best).
2. **Load your game.** Click **Open game folder** and choose the game's `files` folder. For the PC
   port that's `%LOCALAPPDATA%\MSCRecomp\Game\files`. Your browser may say it will "upload" the
   files, but nothing leaves your computer.
3. **Pick a stadium** from the list and make your changes. A ● next to a name means it has
   changes.
4. **Download the mod.** On the **Mod** tab, give it a name, then click
   **Download mod pack (.zip)**. Do this before you close the tab, or your changes are lost.
5. **Install it.** Unzip it into `%LOCALAPPDATA%\MSCRecomp\Riivolution`.
6. **Play.** In the game, press **F10 > Mods**, turn your mod on and restart the game.

To undo a mod, turn it off in F10 > Mods and restart the game.

## Good to know

- **One pack holds everything.** Every stadium and team you changed goes into the same mod.
- **Some pitches are shared.** Stadiums of the same kind share one pitch file. For example, The
  Palace, The Vice and Crater Field all use the grass pitch, so changing one changes all three.
  The Settings tab tells you when this happens.
- **Keep working on a mod later.** Open the game folder, then on the **Mod** tab click
  **Open a mod pack…** and pick the .zip you downloaded. Download it again when you're done.
- **Remodelling:** the pitch and goals the game plays on don't move (41.7 × 24.7 m around the centre
  spot), so build around them. Keep the stadium's goals (the `m0_piece…` pieces with the goal
  textures) unless you add your own. Pieces you keep where they were stay exactly as the game had
  them. Watch the size meter: the biggest stadium in the game is 3.53 MB.
- **Added props** come with their model, textures and animation. They appear over the centre
  spot; move them from there.

## What still needs testing in the game

- Does a prop from another stadium show up and play its animation?
- Do moved and removed props behave?
- Do the fans move when you move a crowd spot?
- Repainted textures and the settings (fog, glow, pitch).
- A remodelled stadium brought back from Blender.

If you try any of these, please report what happened.

## For developers

How the stadium files work, what's decoded and how it's tested: [DETAILS.md](DETAILS.md).

- `src/`: the source (`stadium-app.js` is the app; `stadium.js`, `scene.js`, `propimport.js`,
  `ini.js`, `anim.js` and `formats.js` read and write the game's files).
- Build `app/stadium.js`: `npm install`, then `npm run build`.
- Test against your own game files. In PowerShell:
  `$env:GAME = "$env:LOCALAPPDATA\MSCRecomp\Game\files"; npm test`

This editor doesn't contain any game files. It reads them from your own copy of the game. It
bundles three.js and fflate (see [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md)). The editor itself is
under the MIT license ([LICENSE](LICENSE)).
