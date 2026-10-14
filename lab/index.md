---
layout: default
lang: it
ref: lab
title: Lab · WebGPU
lead: >-
  65.536 particelle simulate interamente sulla GPU con un compute shader WebGPU.
  Muovi il puntatore per attirarle, tieni premuto per respingerle.
fallback: >-
  Il tuo browser non supporta ancora WebGPU (servono Chrome/Edge 113+, Safari 26+ o
  Firefox recente). Puoi comunque vedere lo shader WebGL nella home.
---
{% include lab.html %}

## Come funziona

- **Compute shader (WGSL)**: ogni frame aggiorna posizione e velocità di tutte le particelle in parallelo, con attrazione verso il puntatore e un campo di rumore che le fa "fluire".
- **Render pipeline**: le particelle sono disegnate come quad istanziati con blending additivo, senza che i dati tornino mai alla CPU.
- **Performance**: la simulazione si mette in pausa quando la pagina non è visibile e rispetta `prefers-reduced-motion`.

Lo stesso approccio serve per sfondi interattivi, visualizzazioni di prodotto e configuratori in uno store Shopify, caricati solo dove servono e con un fallback statico.
