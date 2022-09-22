$(function(){
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        
        autoplay: {
            delay:3000,
            disableOnInteraction:false,
        },
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      
      });


      $('.dp2').hide();
      $('#gnb>ul>li').click(function(){
        $(this).toggleClass('active').siblings().removeClass('active');
        
        $(this).children('.dp2').slideToggle();
        $(this).siblings().children('.dp2').slideUp();
        

      });

      $('.allWrap').hide();

      $('.m_btn').click(function(){
        $('.sideMenu').animate({
          'right': 0
        });
        $('.allWrap').fadeIn();
        $('body').addClass('fixed');
      });
      $('.mClose').click(function(){
        $('.sideMenu').animate({
          'right': '100%'
        });
        $('.allWrap').fadeOut();
        $('body').removeClass('fixed');
        $('.dp2').slideUp();
        $('#gnb>ul>li').removeClass('active');

      })
      
})