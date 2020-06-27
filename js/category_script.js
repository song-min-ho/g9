$(document).ready(function(){ 
    
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
    
    
    
});