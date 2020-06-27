/*https://kutar37.tistory.com/entry/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C%EC%87%BC-%EA%B5%AC%ED%98%84-cssjavascriptjquery*/

$(document).ready(function () {
    
    /* 카테고리 오버*/
    $(".category a").hover(function(){
        $(this).children("img").attr("src","images/common/more2.png")
    }, function(){
        $(this).children("img").attr("src","images/common/more1.png")
    })
    
    /*카테고리 클릭*/    
    $(".category a").click(function(){                  
        $('.submenu').animate({"left":"142px"})
        $('.toggle').show();
        return false;
    });
    $(".toggle").click(function(){        
        $('.submenu').animate({"left":"-20px"})
        $(this).hide();
    });
    
    /*슬라이드 화살표 클릭*/    
    $(".right_button").click(function(){
        $(".slide_circle div").attr('class', '')
    })
    
});
