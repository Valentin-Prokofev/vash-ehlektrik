$(document).ready(function (){
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 1000,
        easing: "ease",
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive:[
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: false
                }
            }
        ]
    });
    $('.slider2').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        easing: "ease",
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive:[
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: false
                }
            }
        ]
    });
})