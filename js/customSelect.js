import Choices from "choices.js";

export function customSelector() {
    const reviewsFormSelect = document.querySelector("#select");
    new Choices(reviewsFormSelect, {
      searchEnabled: false,
      allowHTML: true,
      silent: true,
    });
    const choicesInner = document.querySelector(".reviews .choices__inner");
    const triangle = document.createElement("div");
    triangle.className = "triangle";
    choicesInner.append(triangle);


    const selectCallback = document.querySelector("#select-callback")
    new Choices(selectCallback, {
      searchEnabled: false,
      allowHTML: true,
      silent: true,
    });
    const choicesInnerCall = document.querySelector(".modal .choices__inner");
    const triangleCall = document.createElement("div");
    triangleCall.className = "triangle";
    choicesInnerCall.append(triangleCall);
  }