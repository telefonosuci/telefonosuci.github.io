---
layout: default
lang: en
ref: lab
title: Lab · WebGPU
lead: >-
  The same pile of yellow parcels from the homepage, but in 3D and simulated entirely on the GPU with WebGPU.
  Sweep the mouse or a finger across: you bump them, and they bump into each other. Meanwhile, the CPU is on vacation.
fallback: >-
  Your browser doesn't support WebGPU yet (you need Chrome/Edge 113+, Safari 26+ or a
  recent Firefox). The future can wait: meanwhile there's the WebGL shader on the homepage.
---
{% include lab.html %}

## How it works

- **Compute shader (WGSL)**: every frame updates all objects in parallel: each one checks collisions with the others and with the walls, and the pointer is a solid disc that passes its speed to whatever it hits. Two buffers take turns, so every collision reads a stable frame.
- **Render pipeline**: cubes are instanced meshes that roll as they move, spheres are quads the fragment shader lights like real spheres (impostors). A depth buffer keeps track of what's in front. Data never travels back to the CPU.
- **Performance**: the simulation pauses when the page is hidden and respects `prefers-reduced-motion`.

The same approach powers interactive backgrounds, product visualizations and configurators in a Shopify store, loaded only where needed and with a static fallback. No customers were slowed down in the making.
