const nav = document.querySelector("#mainNav");
const mobileMenu = document.querySelector("#mobileMenu");
const mobileMenuIcons = mobileMenu.querySelectorAll("svg");
const mainMenu = document.querySelector("#mainMenu");
const back2Top = document.querySelector("#back2Top");
const htmlEl = document.querySelector("html");
htmlEl.style.scrollBehavior = "smooth";

//functions
const easing = (t) => {
  //easeInOutCubic
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
};

const smoothScroll = (target, duration) => {
  const ssTarget = document.querySelector(target);
  const ssStart = window.pageYOffset;
  const ssTargetTop = ssTarget.getBoundingClientRect().top;
  let startTime = 0;

  const ssAni = (now) => {
    if (startTime === 0) startTime = now;

    let elapsedTime = now - startTime;
    let ease = easing(Math.min(elapsedTime / duration, 1));

    window.scroll(0, ssStart + ssTargetTop * ease);
    console.log(elapsedTime / duration, " ease:", ease);
    if (elapsedTime < duration) {
      requestAnimationFrame(ssAni);
    }
  };

  requestAnimationFrame(ssAni);
};

const toggleBurger = () => {
  mobileMenuIcons.forEach((mmi) => {
    if (mmi.classList.contains("hidden")) {
      mmi.classList.remove("hidden");
    } else {
      mmi.classList.add("hidden");
    }
  });
};

//debounce toggleStickyNav function
const toggleStickyNav = debounce(function () {
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
  if (getComputedStyle(htmlEl).scrollBehavior === "smooth") {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  } else {
    smoothScroll("html", 1000);
  }
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
