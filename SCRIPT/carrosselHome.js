

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        1900: {
            slidesPerView: 4,
            spaceBetween: 80,
        },
    },
});


var swiper = new Swiper(".novosProdutos-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    grabCursor: true,
    pagination: {
        clickable: true,
        dynamicBullets: true,
    },
    keyboard:true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1240: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1900: {
            slidesPerView: 7,
            spaceBetween: 40,
        },
    },
});