$(document).ready(function () {
    //Слайдер
    $('.hero__slider').slick({
        slidesToShow: 1,
        fade: true,
        speed: 500,
        dots: true,
        arows: false,
        cssEase: 'linear',
        asNavFor: '.hero__photos-slider'
    });
    $('.hero__photos-slider').slick({
        slidesToShow: 1,
        asNavFor: '.hero__slider',
        speed: 500,
        fade: true,
        arrows: false,
        cssEase: 'linear'
    });
    //Слайдер

    //Прокрутка хедера
    window.addEventListener('scroll', function () {
        const header = document.getElementById('header');
        const scrollPosition = window.scrollY;

        if (scrollPosition > 50) { // Після прокрутки на 100px вниз встановлюємо новий колір
            header.style.backgroundColor = '#ffffff'; // Встановлюємо новий колір для шапки
            header.style.boxShadow = "0px 4px 15px 0px rgba(0, 0, 0, 0.05)";
        } else {
            header.style.backgroundColor = 'transparent'; // Повертаємо стандартний колір
            header.style.boxShadow = "";
        }
    });
    //Прокрутка хедера

    $('.team__slider').slick({
        slidesToShow: 1,
        fade: true,
        speed: 500,
        dots: true,
        arows: true,
        cssEase: 'linear',
        prevArrow: "<svg class='team__arrow-icon team__arrow-left'><use href='./img/icons.svg#icon-slider-arrow-left'></use></svg>",
        nextArrow: "<svg class='team__arrow-icon team__arrow-right'><use href='./img/icons.svg#icon-slider-arrow-right'></use></svg>"
    });

});