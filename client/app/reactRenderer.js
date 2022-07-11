import {createRoot} from 'react-dom/client';

class Renderer {
  static render(el) {
    const container = document.getElementById(el.selector);
    const root = createRoot(container);
    // Initial render: Render an element to the root.
    console.log("RENDERING: " + el.selector);
    root.render(el.component);
  }
}

export default Renderer;