// The site's yellow parcel, seen from above: shared by the home hero and the error pages.
import { dpr } from './env.js';

export const FACES = ['#fdc14a', '#fca311', '#d98a08', 'rgba(120, 70, 0, .35)']; // top, side, bottom, tape

// Clears ctx and draws each { x, y, a } as a cube: bottom and side are the same square pushed down, then the top and its tape.
export function drawParcels(ctx, parcels, { size, depth, tape }) {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  const s = size / 2;
  for (const p of parcels) {
    const cos = Math.cos(p.a) * dpr, sin = Math.sin(p.a) * dpr;
    ctx.setTransform(cos, sin, -sin, cos, p.x * dpr, (p.y + depth) * dpr);
    ctx.fillStyle = FACES[2]; ctx.fillRect(-s, -s, size, size);
    ctx.setTransform(cos, sin, -sin, cos, p.x * dpr, (p.y + depth * 0.5) * dpr);
    ctx.fillStyle = FACES[1]; ctx.fillRect(-s, -s, size, size);
    ctx.setTransform(cos, sin, -sin, cos, p.x * dpr, p.y * dpr);
    ctx.fillStyle = FACES[0]; ctx.fillRect(-s, -s, size, size);
    ctx.fillStyle = FACES[3]; ctx.fillRect(-tape / 2, -s, tape, size); // packing tape
  }
}
