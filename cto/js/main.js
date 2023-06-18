// import AOS from "aos"; // если эта библотека не надо то удалить ее
// AOS.init();
// //getE
import { info, cardsPath } from "./db";
import { swiperJs } from "./slider";
import { formValidation } from "./validator";
import { modal } from "./modal";
import { customSelector } from "./customSelect";
import { burgerMenu } from "./burgerMenu";
import { anchors } from "./anchors";

window.addEventListener("DOMContentLoaded", () => {
  swiperJs();
  servicesWindow();
  burgerMenu();
  showAssortment();
  customSelector();
  modal();
  anchors();
  formValidation();


  function servicesWindow() {
    function servicesContent(item) {
      return `<div class="services_content">
  <button class="services_content-cross"></button>
  <div class="services_content-box">
      <div class="services_content-text">
      ${item.desc}
      </div>
      <div class="services_content-img">
      <picture >
      <source type="image/avif" srcset=${item.pathImg[0]}>
      <source type="image/webp" srcset=${item.pathImg[1]}>
      <img src=${item.pathImg[2]} alt="Image" loading="lazy" class="class">
  </picture>
  </div>
  </div>
</div> `;
    }

    const servicesWrap = document.querySelector("#wrapServices");
    const mainTitle = document.querySelector(".services_title");
    document.addEventListener("click", (e) => {
      const itemId = Number(
        e.target.closest(".services_item-btn")?.dataset.servicesId
      );
      const item = info.find((elem) => elem.id === itemId);

      if (item && servicesWrap.children.length < 2) {
        mainTitle.innerText = item.title;
        servicesWrap.insertAdjacentHTML("afterbegin", servicesContent(item));
        servicesWrap.classList.add("open");
      } else if (!e.target.closest(".services_content-box")) {
        mainTitle.innerHTML = `Наші <span class="title-color">ПОСЛУГИ</span>`;
        [...servicesWrap.children].length > 1
          ? [...servicesWrap.children][0].remove()
          : null;
        servicesWrap.classList.remove("open");
      }
    });
  }
  function showAssortment() {
    function assortmentContent(item) {
      return `<div class="assortment_item">
    <picture>
        <source type="image/avif" srcset=${item.path[0]}>
        <source type="image/webp" srcset=${item.path[1]}><img
            src="${item.path[2]}" alt="Image" class="class">
    </picture>
</div>`;
    }
    const assortmentBox = document.querySelector(".assortment_box");
    const btnPrev = document.querySelector("#btn-prev");
    const btnNext = document.querySelector("#btn-next");
    let currentPage = 1;

    function filterArrayByIds(array, ids) {
      return array.filter((item) => ids.includes(item.id));
    }
    function filterArrayNoByIds(array, ids) {
      return array.filter((item) => !ids.includes(item.id));
    }
    btnPrev.addEventListener("click", (e) => {
      currentPage--;

      if (currentPage === 2) {
        btnNext.removeAttribute("disabled");
        const threePage = filterArrayNoByIds(cardsPath, [1, 9, 13, 17, 23, 30])
          .slice(0, 12)
          .map((el) => el.id);

        [...assortmentBox.children].map((item) => {
          item.remove();
        });

        filterArrayByIds(cardsPath, threePage).map((cardPath, index) => {
          assortmentBox.insertAdjacentHTML(
            "beforeend",
            assortmentContent(cardPath)
          );
        });
      }
      if (currentPage === 1) {
        btnPrev.setAttribute("disabled", "disabled");
        [...assortmentBox.children].map((item) => {
          item.remove();
        });
        filterArrayByIds(cardsPath, [1, 9, 13, 17, 23, 30]).map(
          (cardPath, index) => {
            assortmentBox.insertAdjacentHTML(
              "beforeend",
              assortmentContent(cardPath)
            );
            [...assortmentBox.children][index].style.gridArea = "auto / span 2";
          }
        );
      }
    });

    btnNext.addEventListener("click", (e) => {
      currentPage++;
      currentPage === 1
        ? btnPrev.setAttribute("disabled", "disabled")
        : btnPrev.removeAttribute("disabled");

      if (currentPage === 2) {
        const twoPage = filterArrayNoByIds(cardsPath, [1, 9, 13, 17, 23, 30])
          .slice(0, 12)
          .map((el) => el.id);

        [...assortmentBox.children].map((item) => {
          item.remove();
        });

        filterArrayByIds(cardsPath, twoPage).map((cardPath, index) => {
          assortmentBox.insertAdjacentHTML(
            "beforeend",
            assortmentContent(cardPath)
          );
        });
      }
      if (currentPage === 3) {
        btnNext.setAttribute("disabled", "disabled");
        const threePage = filterArrayNoByIds(cardsPath, [1, 9, 13, 17, 23, 30])
          .slice(12, 24)
          .map((el) => el.id);

        [...assortmentBox.children].map((item) => {
          item.remove();
        });

        filterArrayByIds(cardsPath, threePage).map((cardPath, index) => {
          assortmentBox.insertAdjacentHTML(
            "beforeend",
            assortmentContent(cardPath)
          );
        });
      }
    });

    if (innerWidth > 800) {
      cardsPath.map((cardPath) => {
        assortmentBox.insertAdjacentHTML(
          "beforeend",
          assortmentContent(cardPath)
        );
      });
    }
    if (innerWidth < 800) {
      currentPage === 1 ? btnPrev.setAttribute("disabled", "disabled") : null;

      filterArrayByIds(cardsPath, [1, 9, 13, 17, 23, 30]).map(
        (cardPath, index) => {
          assortmentBox.insertAdjacentHTML(
            "beforeend",
            assortmentContent(cardPath)
          );
          [...assortmentBox.children][index].style.gridArea = "auto / span 2";
        }
      );
    }
    window.addEventListener("resize", (e) => {
      if (innerWidth <= 800) {
        currentPage === 1 ? btnPrev.setAttribute("disabled", "disabled") : null;
        [...assortmentBox.children].map((item) => {
          item.remove();
        });
        filterArrayByIds(cardsPath, [1, 9, 13, 17, 23, 30]).map(
          (cardPath, index) => {
            assortmentBox.insertAdjacentHTML(
              "beforeend",
              assortmentContent(cardPath)
            );
            [...assortmentBox.children][index].style.gridArea = "auto / span 2";
          }
        );
      } else if (innerWidth > 800) {
        [...assortmentBox.children].map((item) => {
          item.remove();
        });
        cardsPath.map((cardPath) => {
          assortmentBox.insertAdjacentHTML(
            "beforeend",
            assortmentContent(cardPath)
          );
        });
      }
    });
  }
});
