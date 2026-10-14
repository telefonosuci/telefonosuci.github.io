---
layout: default
lang: en
ref: lab
title: Lab · WebGPU
lead: >-
  65,536 particles simulated entirely on the GPU with a WebGPU compute shader.
  Move your pointer to attract them, hold to push them away.
fallback: >-
  Your browser doesn't support WebGPU yet (you need Chrome/Edge 113+, Safari 26+ or a
  recent Firefox). You can still see the WebGL shader on the homepage.
---
{% include lab.html %}

## How it works

- **Compute shader (WGSL)**: every frame updates position and velocity of all particles in parallel, with attraction to the pointer and a noise field that makes them "flow".
- **Render pipeline**: particles are drawn as instanced quads with additive blending; data never travels back to the CPU.
- **Performance**: the simulation pauses when the page is hidden and respects `prefers-reduced-motion`.

The same approach powers interactive backgrounds, product visualizations and configurators in a Shopify store, loaded only where needed and with a static fallback.
