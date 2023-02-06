---
layout: post
title:  "A simple React component renderer with dataset"
date:   2020-07-13 21:03:36 +0530
categories: Frontend
lang: en
---

In a frontend application is nice to have a single object that is thacking care of the rendering of your components. So we can build a little framework and give a bit of structure to our application avoiding the repetition of same logic in our code.

```javascript

import React from 'react';
import { createRoot } from 'react-dom/client';

class Renderer {
  static render(el) {
    const container = document.getElementById(el.selector)
    const root = createRoot(container);
    root.render(<el.component props={container.dataset}></el.component>);
  }
}

export default Renderer;

```

