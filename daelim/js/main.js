$(function(){
    $('.util>li:last-child').click(function(){
        $('.allmenu_wrap').show();
    })
    $('.btn_allx').click(function(){
        $('.allmenu_wrap').hide();
    })
    $('.btn_sh').click(function(){
        $('.search_form').stop().slideToggle(100);
    })
    $('.search_form').mouseleave(function(){
        $('.search_form').stop().slideUp(100);
    });

    $('#mainSlide').slick({
        draggable: false,
        infinite: false,
        dots: false,
        initialSlide: 0
    });
// 메인 화살표 클릭 이동
    $('.slideToIn').click(function(){
        $('#mainSlide').slick('slickGoTo', 0);
    });
    $('.slideToNews').click(function(){
        $('#mainSlide').slick('slickGoTo', 1);
    });
    $('.slideToStory').click(function(){
        $('#mainSlide').slick('slickGoTo', 2);
    });
    

// 메뉴슬라이드
    $('header .gnb>li').mouseenter(function(){
        $('.gnb_bg').stop().slideDown();
        $('.depth2').stop().slideDown();
    });
    $('header .gnb>li').mouseleave(function(){
        $('.gnb_bg').stop().slideUp();
        $('.depth2').stop().slideUp();
    });
    $('.btn_work').click(function(){
        $('.btn_work').toggleClass('on');
        $('.worklist').toggle();
        $('.companylist').hide();
        $('.btn_com').removeClass('on');
    })
    $('.work_close').click(function(){
        $('.worklist').hide();
        $('.btn_work').removeClass('on');
    });
    $('.btn_com').click(function(){
        $('.btn_com').toggleClass('on');
        $('.companylist').toggle();
        $('.worklist').hide();
        $('.btn_work').removeClass('on');
    });
    $('.com_close').click(function(){
        $('.companylist').hide();
        $('.btn_com').removeClass('on');
    });
        //slide script
        $('.sitemapslider').slick({
            //자동실행
            autoplay : {
                disableOnInteraction: false,
            },
            autoplaySpeed: 2000,
            //페이지버튼
            dots : true
          });

        $('.pause').click(function(){
            $('.pause').hide();
            $('.play').show();
            $('.sitemapslider').slick('slickPause');
        })
        $('.play').click(function(){
            $('.play').hide();
            $('.pause').show();
            $('.sitemapslider').slick('slickPlay');
        })
        
        $('.visual').slick({
            autoplay:{
                disableOnInteraction:false,
                delay:2000,
            },
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
          });
        //배열선언/ 배열명[0]

        let video_tit = ['D TOWER', 'Canakkale 1915 Bridge', 'Petrochemical Plant'];
        let video_sub = ['도시를 개발하다.', '세계 6번째 현수교 기술자립국, 세계최고의 기술력, DL이앤씨.', '1973년 해외플랜트 수출1호, 기본과 원칙으로 쌓아온 플랜트 노하우 43년.'];
        let video_list = ['https://www.youtube.com/embed/lAJ3SGjbdr4', 'https://www.youtube.com/embed/vM8b0CZd2Ww', 'https://www.youtube.com/embed/gehtA1gfXPc'];
        //닫기 클릭하면 modal_wrap을 서서히 사라지게
        $('.close').click(function(){
            $('.modal_wrap').fadeOut(300);
        });
        //.youtube>li를 클릭하면 클릭한 번째의 값이 모달팝업으로 뜨게 하기
        $('.youtube>li').click(function(){
            //여러요소중 선택된 요소값을 갖는 내장변수
            let num = $(this).index();
            //text함수=변수의값을 마크업 태그에 값을 기억시킬때
            $('.tit>h2').text(video_tit[num]);
            $('.tit>p').text(video_sub[num]);
            //해당태그 안에서 속성값을 가져올때사용
            $('.tit>iframe').attr('src', video_list[num])
            //modal팝업띄우기
            $('.modal_wrap').fadeIn(300);
            //이전버튼 클릭시
            $('.btn_list .prev').click(function(){
                if(num == 0){
                    num = 2;
                }else{
                    num--;
                };
                $('.tit>h2').text(video_tit[num]);
                $('.tit>p').text(video_sub[num]);
                $('.tit>iframe').attr('src', video_list[num]);
            })
            //다음버튼 클릭시
            $('.btn_list .next').click(function(){
                if(num==2){
                    num=0;
                }else{
                    num++;
                };
                $('.tit>h2').text(video_tit[num]);
                $('.tit>p').text(video_sub[num]);
                $('.tit>iframe').attr('src', video_list[num]);
            })
        });
    //3페이지 이미지 호버/클릭

    
        
    $('.right ul li').mouseenter(function(){
        $(this).addClass('on');
    });
    $('.right ul li').mouseleave(function(){
        $(this).removeClass('on');
    });
})
