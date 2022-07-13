import React from 'react';
import Page from '@App/page.js';
import TextBanner from '@/components/text-banner/TextBanner';
     
document.addEventListener('DOMContentLoaded', () => {
  
  const cList = [
    {
      selector: 'js-webar-r-pdp-hero-component',
      component: TextBanner
    }
  ]
  
  const pdp = new Page({
    vComponents: [],
    rComponents: cList
  });

  console.log("LOADING PDP, will become load post");
  pdp.load();

});
