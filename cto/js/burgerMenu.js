export function burgerMenu() {
    const header = document.querySelector("#header");
    document.addEventListener("click", (e) => {
      if (
        !e.target.closest(".header_menu") &&
        !e.target.closest(".burger_menu")
      ) {
        header.classList.remove("open");
      } else if (e.target.closest(".burger_menu")) {
        header.classList.toggle("open");
      }
    });
  }