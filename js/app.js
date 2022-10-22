$(function() {
    // Fixed Header

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);

    })

    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    // Smooth scroll

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top - 50;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset -65
        }, 700);
    });

    //navToggle

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });
});

// $(document).ready(function (){
//     $('.slider').slick()
// })

