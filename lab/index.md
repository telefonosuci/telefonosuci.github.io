---
layout: default
wide: true  # prose--wide: full width for the form/list/canvas
lang: it
ref: lab
title: Lab · WebGPU
lead: >-
  Lo stesso mucchio di pacchi gialli della home, ma in 3D e simulato interamente sulla GPU con WebGPU.
  Passaci sopra col mouse o col dito: li urti, e loro si urtano fra di loro. La CPU, nel frattempo, si gode le ferie.
fallback: >-
  Il tuo browser non supporta ancora WebGPU (servono Chrome/Edge 113+, Safari 26+ o
  Firefox recente). Il futuro può attendere: intanto c'è lo shader WebGL nella home.
---
{% include lab.html %}

## Come funziona

- **Compute shader (WGSL)**: ogni frame aggiorna tutti gli oggetti in parallelo: ognuno controlla le collisioni con gli altri e con le pareti, il puntatore è un disco solido che trasferisce la sua velocità a chi colpisce. Due buffer si alternano, così ogni urto legge un fotogramma stabile.
- **Render pipeline**: i cubi sono mesh istanziate che ruotano mentre si spostano, le sfere sono quad che il fragment shader illumina come vere sfere (impostor). Un depth buffer tiene in ordine chi sta davanti. I dati non tornano mai alla CPU.
- **Performance**: la simulazione si mette in pausa quando la pagina non è visibile e rispetta `prefers-reduced-motion`.

Lo stesso approccio serve per sfondi interattivi, visualizzazioni di prodotto e configuratori in uno store Shopify, caricati solo dove servono e con un fallback statico. Nessun cliente è stato rallentato durante la realizzazione.
