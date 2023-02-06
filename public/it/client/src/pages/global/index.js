import LogRocket from 'logrocket';
import SwiperSection from '@/components/swiper-section/SwiperSection';

document.addEventListener('DOMContentLoaded', () => {

  console.log('Loaded global entry point');

  var currentLocation = window.location.href;

  if(currentLocation.indexOf('telefonosuci.github.io') > 0){
    console.log('Initializing Logrocket: ', currentLocation);
    LogRocket.init('1k2gse/telefonosuci-site');
  }

  const swiperSection = new SwiperSection('#js-swiper-home-bg');
  swiperSection.render();

  console.log("Swiper instance: ", swiperSection.instance);
});
