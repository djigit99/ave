const nav__linkm = document.getElementById("nav__item-mens")
const menu__blockm = document.getElementById("item__block-mens");

nav__linkm.addEventListener('click', function onClick() {
    menu__blockm.style.display = 'block';
});


document.addEventListener ( "click", function(event) {
  if (event.target == menu__blockm) {
    menu__blockm.style.display = "none";
  }
});

const nav__linkw = document.getElementById("nav__item-womens")
const menu__blockw = document.getElementById("item__block-womens");

nav__linkw.addEventListener('click', function () {
    menu__blockw.classList.toggle('item__block-active');
});

const nav__linklc = document.getElementById("nav__item-lc")
const menu__blocklc = document.getElementById("item__block-lc");

nav__linklc.addEventListener('click', function () {
    menu__blocklc.classList.toggle('item__block-active');
});

const nav__linkbk = document.getElementById("nav__item-bk")
const menu__blockbk = document.getElementById("item__block-bk");

nav__linkbk.addEventListener('click', function () {
    menu__blockbk.classList.toggle('item__block-active');
});