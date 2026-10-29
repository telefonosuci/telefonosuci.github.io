// Pointer events (mouse, pen, touch) turned into rays. The canvas captures the pointer during a drag.
import { Raycaster, Vector2 } from 'three';

export function createInput(canvas, camera, handlers) {
  const ray = new Raycaster(), ndc = new Vector2();
  const at = (e) => {
    const r = canvas.getBoundingClientRect();
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    return ray;
  };
  canvas.addEventListener('pointerdown', (e) => {
    canvas.setPointerCapture(e.pointerId);
    handlers.down(at(e), e);
  });
  canvas.addEventListener('pointermove', (e) => handlers.move(at(e), e));
  canvas.addEventListener('pointerup', (e) => handlers.up(at(e), e));
  canvas.addEventListener('pointercancel', (e) => handlers.up(at(e), e));
}

// First entity under the ray among `entities` (anything with a .view tagged by tag()), or null.
export function pick(ray, entities) {
  const hit = ray.intersectObjects(entities.map((e) => e.view), true)[0];
  for (let o = hit?.object; o; o = o.parent) if (o.userData.entity) return o.userData.entity;
  return null;
}

// Marks entity.view so pick() can walk back from any mesh inside it, models swapped in later included.
export function tag(entity) {
  entity.view.userData.entity = entity;
  return entity;
}
