// Lab: the parcel packing game (three.js). The server-rendered steps already read as instructions;
// this boots the 3D game on top and hides the fallback only once WebGL is really up.
import { createGame } from './lab-parcel/game.js';

for (const root of document.querySelectorAll('[data-parcel-game]')) {
  try {
    createGame(root, { assetsBase: root.dataset.assetsBase });
    root.querySelector('[data-parcel-fallback]').hidden = true;
  } catch (err) {
    console.warn('[parcel-game] WebGL unavailable, keeping the fallback', err);
  }
}
