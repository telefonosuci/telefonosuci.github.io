// Swaps greybox bodies for the glTF models listed in the manifest. GLTFLoader is imported only when
// there is something to load, so until the first model exists it costs no bytes.
import { MANIFEST } from './manifest.js';

export async function loadModels(entities, base) {
  const wanted = entities.filter((e) => MANIFEST[e.model]);
  if (!wanted.length) return;
  const { GLTFLoader } = await import('three/addons/loaders/GLTFLoader.js');
  const loader = new GLTFLoader();
  await Promise.all(wanted.map(async (e) => {
    try {
      const { scene } = await loader.loadAsync(base + MANIFEST[e.model]);
      scene.traverse((o) => { o.castShadow = o.receiveShadow = !!o.isMesh; });
      e.body.clear();
      e.body.add(scene);
    } catch (err) {
      console.warn(`[parcel-game] ${e.model}: keeping the greybox`, err);
    }
  }));
}
