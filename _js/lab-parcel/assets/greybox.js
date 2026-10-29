// Placeholder geometry for every entity. The game is fully playable with these; glTF models replace
// an entity's `body` as they arrive (see loader.js), its `view` and game logic stay the same.
import { BoxGeometry, CylinderGeometry, Group, Mesh, MeshStandardMaterial } from 'three';
import { FACES } from '../../lib/parcel.js';

// Same yellows as the 2D parcels on the homepage.
export const COLORS = {
  flap: FACES[0], card: FACES[1], cardIn: FACES[2],
  tape: '#b8741a', gunBody: '#2b2f36', gunGrip: '#e23d28',
  error: '#c62828', // same as --danger in the theme
};

const materials = new Map();
export function material(color, opts = {}) {
  const key = color + JSON.stringify(opts);
  if (!materials.has(key)) materials.set(key, new MeshStandardMaterial({ color, roughness: 0.85, ...opts }));
  return materials.get(key);
}

const shadows = (mesh) => { mesh.castShadow = mesh.receiveShadow = true; return mesh; };

export const block = (w, h, d, color) => shadows(new Mesh(new BoxGeometry(w, h, d), material(color)));

// Cylinder with its axis along z, like a tape roll seen from the front.
export function roll(radius, width, color) {
  const mesh = shadows(new Mesh(new CylinderGeometry(radius, radius, width, 24), material(color)));
  mesh.rotation.x = Math.PI / 2;
  return mesh;
}

// An entity is a `view` (positioned by the game) holding a `body` (what it looks like, swappable).
export function entity(model) {
  const view = new Group(), body = new Group();
  view.add(body);
  return { view, body, model };
}
