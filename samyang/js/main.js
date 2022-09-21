$(function(){
    $('.gnb').mouseenter(function(){
        $('header').stop().animate({'height':'486'},200).css({'border-bottom':'1px solid #888'})
        $('.depth2').stop().slideDown(200);
    });
    $('header').mouseleave(function(){
        $('header').stop().animate({'height':'141'},200).css({'border-bottom': 'none'})
        $('.depth2').stop().slideUp(150);
    });
    $('.family>button').click(function(){
        $('.fs_d2').stop().slideDown(200);
    });
    $('.family>button').mouseleave(function(){
        $('.fs_d2').stop().slideUp(200);
    });

    //header 언어
    $('.lang').hide();
    $('.ht_btn>li>button').click(function(){
        $('.lang').stop().slideDown();
    });
    $('.ht_btn>li').mouseleave(function(){
        $('.lang').slideUp();
    });
    //slide sript
    $('.visual').slick({
        //자동실행
        autoplay : true,
        //페이지버튼
        dots : true
      });
    //메뉴슬라이드
    //퀵메뉴
    var currentPosition = parseInt($(".nav_wrap").css("top"));
    $(window).scroll(function() {
        var position = $(window).scrollTop(); 
        $(".nav_wrap").stop().animate({"top":position+currentPosition+"px"},500);
      });
      //tab슬라이드
      $('.slideList').slick({
          autoplay: true,
          arrows: false,
          slidesToShow:7,
          slidesToScroll:3,
          centerMode:false,
          infinite:true,
          dots:true,
          variableWidth: true
        });
        
        $('.slideList:gt(0)').hide();
        $('.food>li').click(function(e){
            e.preventDefault();
            $(this).addClass('on').siblings().removeClass('on');
            
            let num = $(this).index();
            $('.slideList').hide();
            $('.slideList').eq(num).show();
        })
    //mini 슬라이드
    $('.newSlide').slick({
        autoplay: true,
        dots: true,
        infinite:true,
        arrows: false
    })
      

})
