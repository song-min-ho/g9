$(function(){       
    /*카테고리 클릭*/    
    $(".category").toggle(function(){                  
		$(this).addClass('click')		
		$('.category a').addClass('click')		
        $('.submenu').animate({"left":"142px"})
        $('.toggle').show();        
    },function(){        
		$(this).removeClass('click')		
		$('.category a').removeClass('click')		
        $('.submenu').animate({"left":"-20px"})
    });
	
	/*slide_item 텍스트 변경*/
	$(".item_slide .select li").click(function(){
		$(".item_slide .select li").removeClass('selected')
		$(this).addClass('selected')
	})
	$(".item_slide .select li:eq(0)").click(function(){
		$(".item_slide .more_wrap span").removeClass('selected')
		$(".item_slide .more_wrap span:eq(0)").addClass('selected')		
	})
	$(".item_slide .select li:eq(1)").click(function(){
		$(".item_slide .more_wrap span").removeClass('selected')
		$(".item_slide .more_wrap span:eq(1)").addClass('selected')		
	})
	$(".item_slide .select li:eq(2)").click(function(){
		$(".item_slide .more_wrap span").removeClass('selected')
		$(".item_slide .more_wrap span:eq(2)").addClass('selected')		
	})
	$(".item_slide .select li:eq(3)").click(function(){
		$(".item_slide .more_wrap span").removeClass('selected')
		$(".item_slide .more_wrap span:eq(3)").addClass('selected')		
	})
	
	/*하트 채우기*/
    $('.jjim').toggle(function(){
		$(this).addClass('click')
	},function(){
		$(this).removeClass('click')
	})
     
    /*top button 스크롤*/
    $(window).scroll(function () {
        var height = $(document).scrollTop();
        ahe(height);
    });
    function ahe(x) {        
        if(x > 1){
            $('.button').stop().animate({'right':'20px'});          
        }
        if(x==0){
            $('.button').stop().animate({'right':'-100px'});           
        };
    }   
});