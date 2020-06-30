/*slick 매서드*/

$(function () {
    $('.slide_wrap .slide').slick({        
        arrows: true,
        dots: true,
        autoplay: false,
        fade: true,
        autoplaySpeed: 7000,
        pauseOnHover: false,
        pauseOnFocus: false
    });
    $('.slick-prev').text(" ");
    $('.slick-next').text(" ");   
});