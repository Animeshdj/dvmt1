const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const nav_menu = document.querySelector('.main-nav');
const cart_btn = document.querySelector('.cart');
const main_sec = document.querySelector('main');

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active')
    mobile_menu.classList.toggle('is-active')
    nav_menu.classList.toggle('is-active')
    cart_btn.classList.toggle('is-active')
    main_sec.classList.toggle('is-active')
})