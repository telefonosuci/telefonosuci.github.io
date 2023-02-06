import React from 'react';
import Page from '@App/Page';
import TextBanner from '@/components/text-banner/TextBanner';
import SwiperSection from '@/components/swiper-section/SwiperSection';

document.addEventListener('DOMContentLoaded', () => {

  const cList = [
    {
      selector: 'js-webar-r-pdp-hero-component',
      component: TextBanner
    }
  ];

  const vList = [
    {
      selector: 'js-swiper-section',
      component: SwiperSection
    }
  ];

  const pdp = new Page({
    vComponents: vList,
    rComponents: cList
  });

  console.log("LOADING PDP, will become load post");
  // pdp.load();

});
