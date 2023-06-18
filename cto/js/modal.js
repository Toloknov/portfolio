export function modal() {
  const modal = document.querySelector("#modal");

  document.addEventListener("click", (e) => {
    if (e.target.closest("[data-callback]")) {
      modal.classList.remove("hidden");
    }
    if (modal.className === "modal") {
      document.querySelector("html").style.setProperty("overflow", "hidden");
    }

    if (
      (!e.target.closest(".modal_box") &&
        !e.target.closest("[data-callback]")) ||
      e.target.closest(".modal_cross")
    ) {
      document.querySelector("html").style.setProperty("overflow", "auto");
      modal.classList.add("hidden");
    }
  });
}
