$(function(){
    $('.depth2, .gnbBg').hide();
    $('.depth1').mouseenter(function(){
        $('.depth2, .gnbBg').stop().slideDown();
        $('header').addClass('on');
    });
    $('header').mouseleave(function(){
        $('.depth2, .gnbBg').stop().slideUp();
        $('header').removeClass('on');
    });

    $('.depth1').mouseenter(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('.depth1').mouseleave(function(){
        $(this).removeClass('active');
    });

    $('.lang2').hide();
    $('.lang').click(function(){
        $('.lang').addClass('on');
        $('.lang2').stop().slideDown();
    });
    $('.lang').mouseleave(function(){
        $('.lang').removeClass('on');
        $('.lang2').stop().slideUp();
    });

    $('.gnbArea').hide();
    $('.gnbBt').click(function(){
        $('.gnbArea').show().animate({
            left : 0
        })
    });
    $('.closeBt').click(function(){
        $('.gnbArea').animate({
            left : '100%',
        })
        $('.gnbArea').hide(0.1);
    });

    


    $('.twoD').hide();
    $('.oneD').click(function(){
        $(this).toggleClass('on').siblings().removeClass('on');
        
        $('.twoD').stop().slideUp();
        $(this).next('.twoD').stop().slideToggle();
    })
    $('.mobileVisual').slick({
        slide: 'div',
        infinite: true,
        autoplay: true,
        fade: false,
        dots: false,
        arrows: false
    }); 
    $(".mainVisual .scroll").click(function(){
        
        $('html,body').animate({scrollTop:$('.mainCon1').offset().top}, 500);
    });


    $(window).scroll(function (){ 
        var scrollValue = $(document).scrollTop(); 
        console.log(scrollValue);

        if(scrollValue >= 300){
            $('.mainCon1 .bg').animate({
                left: '100%'
            },1000);
            $('.mainCon1 .mask').animate({
                left: '100%'
            },1000);
        };
        if(scrollValue >= 700){
            $('.imgbox>.bg').animate({
                left: '100%'
            },1000);
            $('.imgbox>.mask').animate({
                left: '100%'
            },1000);
        }
    });

    
    
    $('.mainCon1 .inner li').mouseenter(function(){
        $(this).siblings().children('a').css({
            opacity: 0.4
        });
    });
    $('.mainCon1 .inner li').mouseleave(function(){
        $('.mainCon1 .inner li a').css({
            opacity:1
        });
    })
    $('.mRecruit').slick({
        slide: 'div',
        infinite: true,
        autoplay: false,
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    })
    $('.slickRecruit').slick({
        slide: 'div',
        infinite: true,
        autoplay: false,
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,

    });

    $('.slickNews').slick({
        slide:'div',
        infinite: true,
        autoplay: false,
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [ // 반응형 웹 구현 옵션
					
                    {breakpoint: 760, //모바일
                        settings: {	
                            initialSlide: 1,
                            slidesToShow: 1,
                            slidesToScroll:1
                        } 
                    }
				]
    });
    $('.innerFamily').hide();
    $('.family>button').click(function(){
        $(this).toggleClass('on');
        $('.innerFamily').stop().slideToggle();
    });
    

});
