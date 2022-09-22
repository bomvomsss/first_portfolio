$(function(){
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });

      //switch 기능

    let sw = true;
    $('.btn_pause').click(function(){
      if(sw==true){
        $('.btn_pause').addClass('on');
        sw=false;
        //스와이퍼 슬라이더에서 일시정지
        swiper.autoplay.stop();
      }else{
        $('.btn_pause').removeClass('on');
        sw=true;
        //스와이퍼 자동실행
        swiper.autoplay.start(); 
      }
    });

    $('.slick1').slick({
      slide: 'div',
      infinite: false,
      autoplay: true,
      fade: true
    });
    $('.slick2').slick({
      slide: 'div',
      infinite: true,
      autoplay: true,
      dots: true
    });
    $('.slick3').slick({
      slide: 'div',
      infinite: true,
      autoplay: true,
      dots: true,
      autoplaySpeed: 3500
    });
    $('.slick4').slick({
      slide: 'div',
      infinite: true,
      autoplay: true,
      dots: false,
      // slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true
    });

    $('.list2:gt(0)').hide();

    $('.quest>li').click(function(){
      $(this).addClass('on').siblings().removeClass('on');
      $('.list2').hide();
      $(this).children('.list2').show();
      
    });

    $('.slick5').slick({
      slide: 'div',
      infinite: true,
      dots: true,
      autoplay: true
    });

    $(window).on('scroll', function(){
      if($(window).scrollTop()){
        $('.goTo').show();
      }else{
        $('.goTo').hide();
      }
    });

    $('.depth2:gt(0)').hide();

    $('.menu>li').click(function(){
      $(this).addClass('on').siblings().removeClass('on');
      let num = $(this).index();
      $('.depth2').hide();
      // $('.depth2').index(num).show();
      $(this).children('.depth2').show();
    });

    $('.depth3').hide();

    $('.two').click(function(){
      $(this).toggleClass('on');
      $(this).children('.depth3').slideToggle();
    });

    $('.allBg').hide();
    $('.m_gnb').click(function(){
      $('.sideMenu').animate({
        'left' : 0
      })
      $('.allBg').fadeIn();
    });
    $('.allX').click(function(){
      $('.two').removeClass();
      $('.depth3').hide();
      $('.menu>li:gt(0)').removeClass('on');
      $('.menu>li:first-child').addClass('on');
      $('.menu>li>.depth2').hide();
      $('.menu>li:first-child>.depth2').show();
      $('.allBg').fadeOut();

      $('.sideMenu').animate({
        'left':-345
      })
      
    });
})