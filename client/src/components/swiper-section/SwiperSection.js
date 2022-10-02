import Swiper from 'swiper'

export default class SwiperSection {

  constructor(selector, scrollbarSelector){
    this.selector = selector
    this.scrollbarSelector = scrollbarSelector 
    this.instance = null
  }

  render() {

    let swiper = new Swiper(this.selector, {
      scrollbar: {
        el: this.scrollbarSelector,
        hide: true,
      },
     });

    this.instance = swiper
    
    return this.instance
  }
}