import Swiper, { Navigation } from "swiper";

export function swiperJs() {
  new Swiper(".terminal-swiper", {
    slidesPerView: 1,
    // spaceBetween: 40,
    loop: true,
    // centeredSlides: "true",
    grabCursor: "true",
    modules: [Navigation],

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
