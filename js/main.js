$(function(){
  $('.ab1').hide();
  $('.ab2').hide();
  $('.ab3').hide();
  

  $('#fullpage').fullpage({
    navigation: true,
    navigationPosition: 'top',
    sectionsColor: ['#FFF2D0','#FFFBF0','#ffffff','#FFFBF0'],
    credits: false,
    anchors: ['home','aboutMe','portfolio','contact'],
    afterLoad: function (anchorLink, index){
      if(index == 2){
        $('.level').addClass('ani');
      }else{
        $('.level').removeClass('ani');
      }

      if(index == 3){
        $('.btnSlide').fadeIn();
      }else{
        $('.btnSlide').fadeOut();
      }
    }

  });

  $('.slick').slick({
    draggable: true,
    infinite: true,
    dots: false,
    initialSlide: 0,
    arrows: true,
    variableWidth: true,
    slidesToShow: 1,
  });

  
  $('.slick:gt(0), .name:gt(0)').hide();

  $('.btnSlide li').click(function(){
    $(this).addClass('on').siblings().removeClass('on');
    
    let num = $(this).index();
   
    $('.slick').hide();
    $('.slick').eq(num).fadeIn();
    $('.name').hide();
    $('.name').eq(num).fadeIn();
  });

  

  $('.ad1').click(function(){
    $('.ab1').fadeIn(300);
    // $('body').addClass('fixed');
    $('body').on('scroll touchmove mousewheel', function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
    });
  });




  $('.ab1 .back').click(function(){
    $('.ab1').fadeOut(300);
    $('body').off('scroll touchmove mousewheel');
  })

  $('.ad2').click(function(){
    $('.ab2').fadeIn(300);
    $('body').on('scroll touchmove mousewheel', function(event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
      });
  })
  $('.ab2 .back').click(function(){
    $('.ab2').fadeOut(300);
    $('body').off('scroll touchmove mousewheel');
    
  })

  $('.ad3').click(function(){
    $('.ab3').fadeIn(300);
    $('body').on('scroll touchmove mousewheel', function(event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
      });
  })
  $('.ab3 .back').click(function(){
    $('.ab3').fadeOut(300);
    $('body').off('scroll touchmove mousewheel');
  })


  $('#goTop>a').on('click',function(){
    $.fn.fullpage.moveTo(1);
  });


});