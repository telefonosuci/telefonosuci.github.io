// Renderer, camera, lights and the shadow-catching table. The canvas is transparent: CSS paints the background.
import { DirectionalLight, HemisphereLight, Mesh, PerspectiveCamera, PlaneGeometry, Scene, ShadowMaterial, Vector3, WebGLRenderer } from 'three';
import { dpr } from '../lib/env.js';
import { onResize } from '../lib/canvas.js';

const TARGET = new Vector3(0, 0.2, 0.6);
const VIEW = new Vector3(0, 3, 3.6); // eye offset from TARGET on a landscape canvas; portrait canvases pull back
const PORTRAIT = 1.4; // below this aspect ratio the camera backs off so the whole table stays in frame

export function createStage(canvas) {
  const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(dpr);
  renderer.shadowMap.enabled = true;

  const scene = new Scene();
  const camera = new PerspectiveCamera(35, 1, 0.1, 50);

  scene.add(new HemisphereLight(0xffffff, 0xd9c7a3, 1.8));
  const sun = new DirectionalLight(0xffffff, 1.8);
  sun.position.set(-2, 5, 3);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  Object.assign(sun.shadow.camera, { left: -3, right: 3, top: 3, bottom: -3 });
  scene.add(sun);

  const table = new Mesh(new PlaneGeometry(20, 20), new ShadowMaterial({ opacity: 0.18 }));
  table.rotation.x = -Math.PI / 2;
  table.receiveShadow = true;
  scene.add(table);

  const resize = () => {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.position.copy(VIEW).multiplyScalar(Math.max(1, PORTRAIT / camera.aspect)).add(TARGET);
    camera.lookAt(TARGET);
    camera.updateProjectionMatrix();
  };
  resize();
  onResize(canvas, resize);

  return { scene, camera, render: () => renderer.render(scene, camera) };
}
