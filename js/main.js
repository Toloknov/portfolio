// import AOS from "aos"; // если эта библотека не надо то удалить ее
// AOS.init();
// //getE
import { swiperJs } from "./slider";
import { formValidation } from "./validator";
import { modal } from "./modal";
import { customSelector } from "./customSelect";
import { burgerMenu } from "./burgerMenu";
import { anchors } from "./anchors";
window.addEventListener("load", () => {
  swiperJs();
  // servicesWindow();
  // burgerMenu();
  // showAssortment();
  // customSelector();
  // modal();
  anchors();
  // formValidation();
  headerBackground();
  textWrites();

  const bg = document.querySelector("#bg");
  let headerHeight = document.querySelector(".header").clientHeight ;
  bg.style.height = headerHeight + "px";
  window.addEventListener("resize", () => {
    headerHeight = document.querySelector(".header").clientHeight;
    bg.style.height = headerHeight + "px";
  });

  function textWrites() {
    const text = "Привет, добро пожаловать в мое портфолио.";
    const delay = 100;
    const elem = document.querySelector(".header_title");

    const print_text = function (text, elem, delay) {
      if (text.length > 0) {
        elem.innerHTML += text[0];
        setTimeout(function () {
          print_text(text.slice(1), elem, delay);
        }, delay);
      }
    };
    print_text(text, elem, delay);
  }
  function headerBackground() {
    particlesJS("bg", {
      particles: {
        number: {
          value: 400,
          density: {
            enable: true,
            value_area: 789.1476416322727,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.48927153781200905,
          random: true,
          anim: {
            enable: true,
            speed: 0.4,
            opacity_min: 0,
            sync: false,
          },
        },
        size: {
          value: 3.5,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.2,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "bubble",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 83.91608391608392,
            size: 1,
            duration: 3,
            opacity: 1,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
  }
});
