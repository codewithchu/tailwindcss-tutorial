const nav = document.querySelector("#mainNav");
const mobileMenu = document.querySelector("#mobileMenu");
const mobileMenuIcons = mobileMenu.querySelectorAll("svg");
const mainMenu = document.querySelector("#mainMenu");
const back2Top = document.querySelector("#back2Top");

//functions
function toggleBurger() {
  mobileMenuIcons.forEach((mmi) => {
    if (mmi.classList.contains("hidden")) {
      mmi.classList.remove("hidden");
    } else {
      mmi.classList.add("hidden");
    }
  });
}

//debounce toggleStickyNav function
let toggleStickyNav = debounce(function () {
  if (window.scrollY >= 400) {
    nav.classList.add("stickyNav");

    back2Top.classList.remove("hidden");
    back2Top.classList.add("block");
  } else {
    nav.classList.remove("stickyNav");

    back2Top.classList.remove("block");
    back2Top.classList.add("hidden");
  }
}, 250);
window.addEventListener("scroll", toggleStickyNav);

mobileMenu.addEventListener("click", (e) => {
  e.preventDefault();

  if (mainMenu.classList.contains("hidden")) {
    mainMenu.classList.remove("hidden");
  } else {
    mainMenu.classList.add("hidden");
  }

  toggleBurger();
});

back2Top.addEventListener("click", (e) => {
  e.preventDefault();
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
});

//debounce
//https://davidwalsh.name/javascript-debounce-function
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
}
