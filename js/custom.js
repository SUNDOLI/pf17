$(function () {
    const MAINVISUALSLIDE = new Swiper('.main_visual_slide', {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.main_visual .arrows .next',
            prevEl: '.main_visual .arrows .prev',
        },
    })
    const MAINCONTENTSLIDE = new Swiper('.main_content_slide', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1920: {
                slidesPerView: 5,
                spaceBetween: 50,
            },

        },
        navigation: {
            nextEl: '.main_conent .arrows .next',
            prevEl: '.main_content .arrows .prev',
        },

    })
    const MAINSTORYCUTSLIDE = new Swiper('.main_storycut_slide', {
        navigation: {
            nextEl: '.main_story .arrows .next',
            prevEl: '.main_story .arrows .prev',
        },
        slidesPerView: 1,
        spaceBetween: 5,
        centeredSlides: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1920: {
                slidesPerView: 5,
                spaceBetween: 50,
            },

        },

    })
    $('.mopen').on('click', function () {
        $('.header .gnb').toggleClass('on')
    })
});

$(function () {

    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $('.header .gnb>ul ul').slideUp();
            $(this).next().slideDown();
        }
    });

})

$(function () {
    $('#bgndVideo').YTPlayer({
        videoURL: 'https://youtu.be/RGQCPtxiKe8',
        containment: '.moive_box',
        showControls: false,

    });
})



