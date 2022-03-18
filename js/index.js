const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav");
const body = document.querySelector("body");

burger.addEventListener("click", function() {
  burger.classList.toggle("header__burger--opened");
  nav.classList.toggle("header__nav--opened");
  body.classList.toggle("freez")
})