# Strikers Stadium Studio

A stadium editor for **Mario Strikers Charged**. It runs in your web browser, with nothing to
install. It makes mods for the [Strikers-WiiCompiled](https://github.com/BlackAndBlue95/Strikers-WiiCompiled)
PC port (**F10 > Mods**). The same mods also work in Dolphin and on a Wii, through Riivolution.

It never changes your game files. Everything you make comes out as a mod you can turn on and off.

> [!NOTE]
> This is an early version. The editor reads and writes all 19 stadiums correctly. The mods it
> makes haven't been tried in the game yet.

## What you can do

| Tab | What it's for |
| --- | --- |
| **Stadium** | Look around in 3D. Export the stadium for Blender (.glb). |
| **Textures** | Repaint anything. The pitch comes out as one picture to paint over. |
| **Fans** | Choose which fans cheer for each team, and watch their animations. |
| **Objects** | Move, turn or copy the props (signs, flags, foam fingers, field generators, flying cameras), the big-flag spots and the crowd spots. |
| **Settings** | Fog, light colour, glow, shadows, crowd spacing, and how the pitch plays (speed, slipperiness, ball bounce). |
| **Mod** | Download everything you changed as one mod. |

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
- **The app can't reopen a mod yet.** It always starts from the game's original files. To change
  a mod later, make the edits again and download a new pack.
- **Copied props are an experiment.** Moving things is safer than adding copies.

## What still needs testing in the game

- Do moved signs and flags show up in their new places?
- Does a copied prop appear and play its animation?
- Do the fans move when you move a crowd spot?

If you try any of these, please report what happened.

## For developers

How the stadium files work, what's decoded and how it's tested: [DETAILS.md](DETAILS.md).

- `src/`: the source (`stadium-app.js` is the app; `stadium.js`, `scene.js`, `ini.js`, `anim.js`
  and `formats.js` read and write the game's files).
- Build `app/stadium.js`: `npm install`, then `npm run build`.
- Test against your own game files. In PowerShell:
  `$env:GAME = "$env:LOCALAPPDATA\MSCRecomp\Game\files"; npm test`

This editor doesn't contain any game files. It reads them from your own copy of the game. It
bundles three.js and fflate (see [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md)). The editor itself is
under the MIT license ([LICENSE](LICENSE)).
