let burger = document.querySelector("#burger__button");
let header = document.querySelector("#header");

burger.onclick = function () {
  header.classList.toggle("menu-open");
};

