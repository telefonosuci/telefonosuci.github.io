---
layout: post
title:  "JavaScript: throttle e debounce"
date:   2023-02-14 09:03:36 +0100
categories: Frontend
lang: it
reading_time: 2
audience: dev
---

Alcuni eventi si attivano decine di volte al secondo: `scroll`, `resize`, `mousemove`, `input`. Eseguire codice pesante a ogni evento rallenta la pagina. **Debounce** e **throttle** limitano quante volte una funzione viene eseguita.

### Debounce: aspetta che finisca

La funzione parte solo quando gli eventi si fermano per `wait` millisecondi. Uso tipico: una ricerca che chiama l'API quando l'utente smette di scrivere.

```javascript
function debounce(fn, wait = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  };
}

input.addEventListener('input', debounce((e) => search(e.target.value), 400));
```

### Throttle: al massimo una volta ogni N ms

La funzione parte al massimo una volta ogni `wait` millisecondi, anche se l'evento continua. Uso tipico: aggiornare qualcosa durante lo scroll.

```javascript
function throttle(fn, wait = 300) {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= wait) {
      last = now;
      fn(...args);
    }
  };
}

window.addEventListener('scroll', throttle(updateProgressBar, 100));
```

### Quale scegliere?

- **Debounce** quando conta solo il valore finale (ricerca, validazione di un form, salvataggio di una bozza).
- **Throttle** quando servono aggiornamenti regolari mentre l'evento è in corso (scroll, drag, resize).

Per aggiornamenti grafici legati allo scroll, spesso `requestAnimationFrame` è una scelta ancora migliore: si sincronizza con il ridisegno del browser.
