$(function(){
    var swiper = new Swiper('.swiper',{
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {//자동슬라이드 (false-비활성화)          
            delay: 5000, // 시간 설정          
            disableOnInteraction: false, // false-스와이프 후 자동 재생},
        },
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true, // 버튼 클릭 여부
        },
        loopAdditionalSlides : 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보이지 않는 현상 수정
        effect : 'fade',
        on : {
            slideNextTransitionStart : function() {
                $('.swiper-slide .box_wrap').removeClass('on');
                $('.swiper-slide-active .box_wrap').addClass('on');
            }
        }
    });


    $('.dep2, .dep2bg').hide();
    $('.dep1').mouseenter(function(){
        $('.dep2, .dep2bg').stop().slideDown();
    });
    $('.dep1').mouseleave(function(){
        $('.dep2, .dep2bg').stop().slideUp();
    });

    $('.w_langlink > ul').hide();
    $('.w_langlink > button').click(function(){
        $('.w_langlink > ul').slideToggle();
    });

    $('.mbtn').click(function(){
        $('.mbtn').toggleClass('active');
        $('.mgnbList').toggleClass('on');
        $('.mdep1').removeClass('on');
        $('.mdep2').slideUp();
    });

    $('.mlanglink>ul').hide();
    $('.mlanglink').click(function(){
        $('.mlanglink>ul').slideToggle();
    });

    $('.mdep2').hide();
    $('.mdep1').click(function(){
        $(this).toggleClass('on').siblings().removeClass('on');
        $(this).find('div').slideToggle();
        $(this).siblings().find('div').slideUp();
    });

    $('.txtbox').mouseenter(function(){
        $(this).stop().addClass('on');
    });
    $('.txtbox').mouseleave(function(){
        $(this).stop().removeClass('on');
    })

    $(window).scroll(function (){ 
        var scrollValue = $(document).scrollTop(); 
        // console.log(scrollValue);

        if(scrollValue >= 500){
            $('.square2').addClass('on');
            $('.go_top').addClass('on');
        }else{
            $('.go_top').removeClass('on');
        };
        if(scrollValue >= 1100){
            $('.square3').addClass('on');
        };
        $('.go_top').on('click', function () {
            $('html, body').stop().animate({
                scrollTop: 0
            }, 500);
        });
    });

    $('.modal_wrap').hide();
    $('.modal_button').click(function(){
        $('.modal_wrap').show();
        $('body').css('overflow', 'hidden');
    });
    $('.close, .modal_bg').click(function(){
        $('.modal_wrap').hide();
        $('body').css('overflow', 'auto');
    })


    $('.family_site>ul').hide();
    $('.family_site>button').click(function(){
        $('.family_site>ul').slideToggle();
        $('.family_site>button').toggleClass('on');
    })
});
