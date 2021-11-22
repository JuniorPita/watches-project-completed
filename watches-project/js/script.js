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
    loop: 'true',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});