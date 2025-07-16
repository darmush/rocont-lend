const app = document.getElementById('app');
const burger = document.getElementById('burger');
const navbar = document.querySelector('.navbar');
const headerContainer = document.querySelector('.header .container');

let navbarIsOpened = false;

function toggleNavbar() {
    navbar.classList.toggle('-opened')
    headerContainer.classList.toggle('-opened')
    navbarIsOpened = !navbarIsOpened
}

app.addEventListener('click', element => {
    switch(element.target) {
        // Открытие/закрытие меню при клике по иконке бургер меню
        case burger:
            toggleNavbar()
            break
        // Закрытие меню
        default: if(navbarIsOpened) {toggleNavbar()}

    }
})
