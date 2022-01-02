(function ($) {
    $(window).load(function () {
        $('#preloader').delay(600).fadeOut('slow');
    });
    $(function () {
        //swiper
        {
            let mySwiper = new Swiper('.swiper-container', {
                direction: 'horizontal',
                loop: true,

                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            })

        }
    })
})(jQuery);
