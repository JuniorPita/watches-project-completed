// Меню (верхушка страницы)
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Открытие меню
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Закрытие меню через иконку (крестик)
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Закрытие меню через нажатие на оглавление (название блока)
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    navMenu.classList.remove('show-menu');
}

navLink.forEach(event => event.addEventListener('click', linkAction));

// Заполнение цвета фона фиксированного верхнего меню при скролле
function scrollHeader() {
    const header = document.getElementById('header');

    if (this.scrollY >= 60) {
        header.classList.add('scroll-header');
    }
    else {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

// Свайпер (swiper) в отзывах
let testimonialSwiper = new Swiper('.testimonial-swiper', {
    spaceBetween: 30,
    direction: 'horizontal',
    mousewheel: true,
    keyboard: false,
    loop: 'true',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});

// Свайпер (swiper) в новинках
let newSwiper = new Swiper('.new-swiper', {
    spaceBetween: 24,
    direction: 'horizontal',
    mousewheel: true,
    keyboard: false,
    loop: 'true',
    breakpoints: {
        576: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 4
        },
        1024: {
            slidesPerView: 5
        }
    }
});

// Выделение активных блоков при скролле страницы
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']')
            .classList.add('active-link');
        }
        else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']')
            .classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

// Появление Scroll Up на странице
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');

    if (this.scrollY >= 400) {
        scrollUp.classList.add('show-scroll');
    }
    else {
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp);

// Корзина (верхушка страницы)
const cart = document.getElementById('cart');
const cartShop = document.getElementById('cart-shop');
const cartClose = document.getElementById('cart-close');

// Открытие и закрытие корзины при нажатии на её иконку
cartShop.addEventListener('click', () => {
    cart.classList.toggle('show-cart');
});

// Закрытие корзины через иконку (крестик)
if (cartClose) {
    cartClose.addEventListener('click', () => {
        cart.classList.remove('show-cart');
    });
}

// Изменение темы (цветовой гаммы, палитры) страницы (Dark/Light)
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

// Анимация разных блоков страницы
let sr = ScrollReveal({
    distance: '50px',
    duration: 2500,
    delay: 400,
    reset: false
});

sr.reveal(`.home__container`, {delay: 600});
sr.reveal(`.newsletter__bg`, {delay: 700});
sr.reveal(`.featured__container`, {delay: 900, origin: 'top'});
sr.reveal(`.testimonial__container`, {origin: 'left', interval: 100});
sr.reveal(`.story__data`, {origin: 'left', interval: 100});
sr.reveal(`.story__images`, {origin: 'right'});
sr.reveal(`.new__container`, {origin: 'top'});
sr.reveal(`.products__container, .footer__container`);