import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';

export default class SwiperSection {

  constructor(selector){
    this.selector = selector;
    this.instance = null;
  }

  render() {

    console.log("Rendering swiper:", this.selector);
    let swiper = new Swiper(this.selector, {
      loop: true,
      modules: [Navigation, Pagination, Autoplay],
      /* Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      */
      autoplay: {
        delay: 5000,
      },
     });

     this.instance = swiper;
  }
}
