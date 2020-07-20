$(function () {
	
    var swiper = new Swiper('.swiper-container', {
		loop: true,
		effect: 'fade',
		autoplay: false,
		pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
		},
		navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
		},
    });
    
	$(".swiper-button-play").click(function(){
		swiper.autoplay.start();
		$(this).hide();
		$(".swiper-button-pause").show();
	});
	$(".swiper-button-pause").click(function(){
		swiper.autoplay.stop();
		$(this).hide();
		$(".swiper-button-play").show();
	});	
	
	
});
