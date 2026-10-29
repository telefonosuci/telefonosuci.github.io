---
layout: default
wide: true  # prose--wide: full width for the canvas
lang: it
ref: lab
title: Lab · Pacco da spedire
lead: >-
  Un piccolo gioco 3D sul mestiere che sta dietro ogni ecommerce: riempi il pacco, chiudi i lembi
  nell'ordine giusto e sigillalo con la pistola del nastro, come in magazzino. Il rumore del nastro mettilo tu.
---
{% include parcel-game.html %}

## Come funziona

- **three.js, caricato solo qui**: il resto del sito non scarica un byte di 3D. I modelli glTF arrivano dopo, solo se esistono; fino ad allora tutto è fatto di parallelepipedi (greybox) e il gioco è già giocabile.
- **Una macchina a stati, un sistema per fase**: riempimento, chiusura, nastro e spedizione sono moduli separati che ricevono il puntatore solo quando tocca a loro. Le regole del punteggio sono funzioni pure, facili da tarare.
- **HTML prima del canvas**: istruzioni e risultato sono HTML generato da Jekyll, leggibili anche senza JavaScript. Il gioco si mette in pausa quando esce dallo schermo e, con `prefers-reduced-motion`, salta le animazioni senza smettere di funzionare.

È un work in progress: arriveranno drag & drop, il nastro che risvolta sui bordi, l'etichetta e i modelli veri.
