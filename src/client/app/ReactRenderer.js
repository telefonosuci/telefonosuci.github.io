import React from 'react';
import { createRoot } from 'react-dom/client';

class ReactRenderer {
  static render(el) {

    const root = createRoot(document.getElementById(el.selector));
    // Initial render: Render an element to the root.
    console.log("RENDERING: ", el.selector);

    console.log("DATASET: ", root.dataset);


    root.render(<el.component props={root.dataset}></el.component>);



  }
}

export default ReactRenderer;
