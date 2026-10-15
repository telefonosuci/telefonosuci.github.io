---
layout: post
title:  "A simple React component renderer with dataset"
date:   2022-07-13 21:03:36 +0200
categories: Frontend
lang: en
---

On a site that is not a single-page app (a Shopify theme, WordPress, Jekyll) you often need to mount a few React components in specific spots of the page. Instead of repeating the same `createRoot` logic everywhere, one small function can do it and pass the element's `data-*` attributes as props.

```javascript
import { createRoot } from 'react-dom/client';

export function render({ selector, component: Component }) {
  const container = document.getElementById(selector);
  if (!container) return; // the component isn't on this page

  createRoot(container).render(<Component {...container.dataset} />);
}
```

In the HTML, the configuration lives in `data-*` attributes:

```html
<div id="countdown" data-expire-date="2026-12-31T23:59:59"></div>
```

And in the entry point:

```javascript
import { render } from './render';
import Countdown from './Countdown';

render({ selector: 'countdown', component: Countdown });
```

`dataset` turns `data-expire-date` into `expireDate`, so the component receives `props.expireDate`. Note that every value arrives as a **string**: convert numbers and booleans inside the component.
