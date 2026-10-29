// Wires stage, input, HUD and one system per phase. The state machine decides which system gets the pointer;
// systems talk to the world only through ctx, and call ctx.done() to hand over to the next phase.
// The loop runs only while the canvas is on screen. Under reduced motion it keeps rendering what the
// player does, but tweens land instantly (see tween.js).
import { Group } from 'three';
import { loopWhileVisible } from '../lib/canvas.js';
import { createStage } from './stage.js';
import { createInput } from './input.js';
import { createTweens } from './tween.js';
import { createHud } from './hud.js';
import { createState } from './state.js';
import { loadModels } from './assets/loader.js';
import { createBox, SIZE } from './entities/box.js';
import { CATALOG, createItem } from './entities/item.js';
import { createTapeGun } from './entities/tape-gun.js';
import { createPacking } from './systems/packing.js';
import { createFolding } from './systems/folding.js';
import { createTaping } from './systems/taping.js';
import { createShipping } from './systems/shipping.js';
import { rate } from './systems/scoring.js';

const MAX_DT = 0.05; // s; a long pause (tab hidden, scrolled away) must not fast-forward the tweens

export function createGame(root, { assetsBase }) {
  const canvas = root.querySelector('[data-parcel-canvas]');
  const stage = createStage(canvas);
  const tweens = createTweens();
  const hud = createHud(root);

  // Everything that leaves with the parcel when it ships.
  const cargo = new Group();
  const box = createBox();
  const items = CATALOG.map(createItem);
  cargo.add(box.view, ...items.map((i) => i.view));
  const gun = createTapeGun();
  stage.scene.add(cargo, gun.view);

  const ctx = {
    stage, tweens, hud, cargo, box, items, gun, strips: [], startedAt: 0, seconds: 0, mistakes: 0,
    done: () => state.next(),
    // A wrong move: counted for the score, explained by the hint with this id (t.parcel_game.hints).
    mistake: (id) => { ctx.mistakes++; hud.error(id); },
  };
  const systems = {
    fill: createPacking(ctx),
    fold: createFolding(ctx),
    tape: createTaping(ctx),
    ship: createShipping(ctx),
    score: { enter: () => hud.end(rate({ strips: ctx.strips, w: SIZE.w, seconds: ctx.seconds, mistakes: ctx.mistakes })) },
  };

  let current = null;
  const state = createState((phase) => {
    current?.leave?.();
    current = systems[phase];
    if (phase === 'ship') ctx.seconds = (performance.now() - ctx.startedAt) / 1000;
    hud.phase(phase);
    current.enter?.();
  });

  createInput(canvas, stage.camera, {
    down: (ray, e) => current.down?.(ray, e),
    move: (ray, e) => {
      current.move?.(ray, e);
      canvas.style.cursor = current.hover?.(ray, e) ?? '';
    },
    up: (ray, e) => current.up?.(ray, e),
  });

  const reset = () => {
    tweens.clear();
    current?.leave?.();
    current = null;
    for (const s of ctx.strips) {
      cargo.remove(s.view);
      s.view.material.dispose();
    }
    ctx.strips.length = 0;
    ctx.mistakes = 0;
    cargo.position.set(0, 0, 0);
    items.forEach((i) => i.reset());
    box.flaps.forEach((f) => f.reset());
    ctx.startedAt = performance.now();
    state.reset();
  };
  hud.onRestart(reset);
  reset();

  let last = 0;
  loopWhileVisible(canvas, (ms) => {
    const dt = last ? Math.min((ms - last) / 1000, MAX_DT) : 0;
    last = ms;
    tweens.update(dt);
    stage.render();
  });

  loadModels([gun, ...items], assetsBase);
}
