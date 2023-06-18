export function anchors() {
    const anchors = document.querySelectorAll("a[href*='#']");
    [...anchors].map((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const blockId = anchor.getAttribute("href");
        document
          .querySelector("" + blockId)
          .scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }