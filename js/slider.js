import Swiper, { Autoplay } from "swiper";

export function swiperJs() {
  new Swiper(".skill_box", {
    //infinity slide without stop
    spaceBetween: 30,
    grabCursor:true,
    slidesPerView: 5,
    loop: true,
    speed: 5000,
    autoplay: {
      enabled: true,
      delay: 1,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 4,
      },
      1600: {
        slidesPerView: 5,
      },
    },
    modules: [Autoplay],
  });
}
//infinity slide without stop  style

// .swiper-wrapper {
//   transition-timing-function: linear !important;
// }
