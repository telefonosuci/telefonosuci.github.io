import React from 'react';
import Page from '@App/Page';
import TextBanner from '@/components/text-banner/TextBanner';
import SwiperSection from '@/components/swiper-section/SwiperSection';
// import ReactRenderer from "../../../app/ReactRenderer";
// import { Badge } from "sucipack";

document.addEventListener('DOMContentLoaded', () => {
/*
  const cList = [
    {
      selector: 'js-webar-r-about-hero-component',
      component: TextBanner
    }
  ];

  const vList = [
    {
      selector: 'js-swiper-technology-section',
      component: SwiperSection
    }
  ];

  console.log("Loading page with components: ", {
    vList,
    cList
  });

  const about = new Page({
    vComponents: vList,
    rComponents: cList
  });

  console.log("LOADING ABOUT PAGE");
  about.load();
*/


  const swiperSection = new SwiperSection('#js-swiper-technology-section');
  swiperSection.render();

  console.log("Swiper instance: ", swiperSection.instance);
/*
  ReactRenderer.render({
    selector: '#contact-sucipack-badge',
    conponent: Badge
  });
  */
});
