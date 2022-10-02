import React from 'react';
import { createRoot } from 'react-dom/client';

class ReactRenderer {
  static render(el) {

    const container = document.getElementById(el.selector);
    console.log("contatore cont: ", container);
   
    const root = createRoot(container);
    // Initial render: Render an element to the root.
    console.log("RENDERING: ", el.selector);
    
    console.log("DATASET: ", container.dataset);
    

    root.render(<el.component props={container.dataset}></el.component>);


    
  }
}

export default ReactRenderer;
