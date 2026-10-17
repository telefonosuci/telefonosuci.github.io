---
layout: default
lang: en
ref: lab
title: Lab · WebGPU
lead: >-
  Thousands of 3D spheres and cubes simulated entirely on the GPU with a WebGPU compute shader.
  Tap or click for a shockwave, hold to gather them. Meanwhile, the CPU is on vacation.
fallback: >-
  Your browser doesn't support WebGPU yet (you need Chrome/Edge 113+, Safari 26+ or a
  recent Firefox). The future can wait: meanwhile there's the WebGL shader on the homepage.
---
{% include lab.html %}

## How it works

- **Compute shader (WGSL)**: every frame updates position and velocity of all objects in parallel: a noise field makes them drift, a touch pushes them away and then pulls them back.
- **Render pipeline**: cubes are instanced meshes that roll as they move, spheres are quads the fragment shader lights like real spheres (impostors). A depth buffer keeps track of what's in front. Data never travels back to the CPU.
- **Performance**: the simulation pauses when the page is hidden and respects `prefers-reduced-motion`.

The same approach powers interactive backgrounds, product visualizations and configurators in a Shopify store, loaded only where needed and with a static fallback. No customers were slowed down in the making.
