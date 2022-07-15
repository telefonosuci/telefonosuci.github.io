import React from 'react';
import Page from '@App/page.js';
import WalkingSprites from '@/components/walking-sprites/WalkingSprites';
     
document.addEventListener('DOMContentLoaded', () => {
  
  const cList = [
    {
      selector: 'js-webar-r-contact-walking-sprites',
      component: WalkingSprites
    }
  ]
  
  const contact = new Page({
    vComponents: [],
    rComponents: cList
  });

  contact.load();

});
