---
layout: post
title:  "Un semplice renderizzatore per componenti React"
date:   2022-07-13 21:03:36 +0200
categories: Frontend
lang: it
---

Su un sito che non è una single-page app (un tema Shopify, WordPress, Jekyll) capita spesso di dover montare qualche componente React in punti precisi della pagina. Invece di ripetere ovunque la stessa logica con `createRoot`, basta una piccola funzione che lo fa e passa gli attributi `data-*` dell'elemento come props.

```javascript
import { createRoot } from 'react-dom/client';

export function render({ selector, component: Component }) {
  const container = document.getElementById(selector);
  if (!container) return; // il componente non è in questa pagina

  createRoot(container).render(<Component {...container.dataset} />);
}
```

Nell'HTML la configurazione sta negli attributi `data-*`:

```html
<div id="countdown" data-expire-date="2026-12-31T23:59:59"></div>
```

E nel file di ingresso:

```javascript
import { render } from './render';
import Countdown from './Countdown';

render({ selector: 'countdown', component: Countdown });
```

`dataset` trasforma `data-expire-date` in `expireDate`, quindi il componente riceve `props.expireDate`. Attenzione: tutti i valori arrivano come **stringhe**, numeri e booleani vanno convertiti dentro il componente.
