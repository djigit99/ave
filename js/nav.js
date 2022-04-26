const nav__linkm = document.getElementById("nav__item-mens")
const menu__blockm = document.getElementById("item__block-mens");

let check1 = 0;

nav__linkm.addEventListener('click', function onClick() {
    menu__blockm.style.display = 'flex';
    check1 = check1+ 1;
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

  if (isDescendant(menu__blockm,event.target)) return;
  if (event.target !== nav__linkm) {
    menu__blockm.style.display = "none";
  }else
  {
    if( check1 %2 === 0)
    {
      menu__blockm.style.display = "none";
    }
  }
});

const nav__linkw = document.getElementById("nav__item-womens")
const menu__blockw = document.getElementById("item__block-womens");

let check2 = 0;

nav__linkw.addEventListener('click', function onClick() {
    menu__blockw.style.display = 'flex';
    check2 = check2 + 1;
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

  if (isDescendant(menu__blockw,event.target)) return;
  if (event.target !== nav__linkw) {
    menu__blockw.style.display = "none";
  }else
  {
    if( check2 %2 === 0)
    {
      menu__blockw.style.display = "none";
    }
  }
});

const nav__linklc = document.getElementById("nav__item-lc")
const menu__blocklc = document.getElementById("item__block-lc");

let check3 = 0;

nav__linklc.addEventListener('click', function onClick() {
    menu__blocklc.style.display = 'flex';
    check3 = check3 + 1;
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

  if (isDescendant(menu__blocklc,event.target)) return;
  if (event.target !== nav__linklc) {
    menu__blocklc.style.display = "none";
  }else
  {
    if( check3 %2 === 0)
    {
      console.log(check3);
      menu__blocklc.style.display = "none";
    }
  }
});

const nav__linkbk = document.getElementById("nav__item-bk")
const menu__blockbk = document.getElementById("item__block-bk");

let check4 = 0;

nav__linkbk.addEventListener('click', function onClick() {
    menu__blockbk.style.display = 'flex';
    check4 = check4 + 1;
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

  if (isDescendant(menu__blockbk,event.target)) return;
  if (event.target !== nav__linkbk) {
    menu__blockbk.style.display = "none";
  }else
  {
    if( check4 %2 === 0)
    {
      menu__blockbk.style.display = "none";
    }
  }
});