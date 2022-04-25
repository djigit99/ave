const nav__linkm = document.getElementById("nav__item-mens")
const menu__blockm = document.getElementById("item__block-mens");

let check = 0;

nav__linkm.addEventListener('click', function onClick() {
    menu__blockm.style.display = 'flex';
    check = check + 1;
});

window.addEventListener ( "click", function(event) {
  const isDescendant = function (parent, child) {
    let node = child;
    while (node) {
        if (node === parent) {
            return true;
        }
  
        // Traverse up to the parent
        node = node.parentNode;
    }
    // Go up until the root but couldn't find the parent
    return false;
  };
  console.log(event.target);
  console.log(menu__blockm.children);
  if (isDescendant(menu__blockm,event.target)) return;
  if (event.target !== nav__linkm) {
    menu__blockm.style.display = "none";
  }else
  {
    if( check %2 === 0)
    {
      menu__blockm.style.display = "none";
    }
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