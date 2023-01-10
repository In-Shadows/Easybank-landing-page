"use strict";
// DOM ELEMENTS
const mobileMenuBtn = document.querySelector(".mobile-menu__btn");
const overlay = document.querySelector(".overlay");

//SHOWING THE MOBILE MENU WHEN CLICKING ON MENU ICON
mobileMenuBtn.addEventListener("click", function (e) {
  if (e.target.closest(".mobile-menu__btn")) {
    overlay.classList.toggle("active");
  }
});
