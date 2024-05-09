let alertopi = 'Welcome Back, Neil !';

alert ('alertopi')
// <image-slider-script> //
const swiper = new Swiper('.swiper', {
    autoplay: {
        Delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,


    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },


    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});
// </image-slider-script> //
