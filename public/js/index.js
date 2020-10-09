const nav = document.querySelector('#mainNav');
const mobileMenu = document.querySelector('#mobileMenu');
const mobileMenuIcons = mobileMenu.querySelectorAll('svg');
const mainMenu = document.querySelector('#mainMenu');
const back2Top = document.querySelector('#back2Top');

//functions
function toggleBurger() {
    mobileMenuIcons.forEach((mmi) => {
        if (mmi.classList.contains('hidden')) {
            mmi.classList.remove('hidden');
        } else {
            mmi.classList.add('hidden');
        }
    });
}

window.addEventListener('scroll', (e) => {
    if (window.scrollY >= 400) {
        nav.classList.add('stickyNav');

        back2Top.classList.remove('hidden');
        back2Top.classList.add('block');
    } else {
        nav.classList.remove('stickyNav');

        back2Top.classList.remove('block');
        back2Top.classList.add('hidden');
    }
});

mobileMenu.addEventListener('click', (e) => {
    e.preventDefault();

    if (mainMenu.classList.contains('hidden')) {
        mainMenu.classList.remove('hidden');
    } else {
        mainMenu.classList.add('hidden');
    }

    toggleBurger();
});

back2Top.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
});
