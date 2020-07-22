$(function () {
	
    var swiper = new Swiper('.swiper', {
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
	
	
	/*변수조심 일시정지 비활성화된다...*/
	var swiper2 = new Swiper('.swiper2', {
      slidesPerView: 8, /*보이는 개수*/
      spaceBetween: 0,
      slidesPerGroup: 3, /*움직이는 거리*/      
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });	
	
	/*css에서 안된다 여기서 줄여줘야함*/
	$(window).resize(function() {   
		var wid = $(window).width();
			if (wid < 1300) {
				swiper2.params.slidesPerView = 6
			} else { 
				swiper2.params.slidesPerView = 8
			}
	});    
	
});
 

