import React from 'react'
import ReactDOM from 'react-dom'
import WalkingSprites from './WalkingSprites'

class WalkingSpritesRenderer {
  renderComponent() {
    const el = document.getElementById('netar-js-r-walking-sprites');
    if(el){
      ReactDOM.render(
        <WalkingSprites />,
        el
      );
    } else {
        console.log('No component to render');
    }
  }
}

export const walkingSpritesRenderer = new WalkingSpritesRenderer();
export default {};
