const nav = document.querySelector('#mainNav');
const mobileMenu = document.querySelector('#mobileMenu');
const mobileMenuIcons = mobileMenu.querySelectorAll('svg');
const mainMenu = document.querySelector('#mainMenu');

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

mobileMenu.addEventListener('click', (e) => {
    e.preventDefault();

    if (mainMenu.classList.contains('hidden')) {
        mainMenu.classList.remove('hidden');
    } else {
        mainMenu.classList.add('hidden');
    }

    toggleBurger();
});
