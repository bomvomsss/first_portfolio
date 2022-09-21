$(function(){

    $('.gnb>li').mouseover(function(){
        let submenu = $(this).children('ul');
        $(submenu).stop().slideDown(300);
    });
    $('.gnb>li, .depth2').mouseleave(function(){
        $('.depth2').stop().slideUp(300);
    });

    $('.closepopup').click(function(){
        $('.pop').hide();
    });
    $('.btn_fam').click(function(){
        $('.f_d2').stop().slideToggle(300);
    });

    $('.lang').click(function(){
        $('.lang').toggleClass('langon');
        $('.lang>li:last-child').slideToggle();
    });
    $('.allmenu-x').click(function(){
        $('.allmenu-x').toggleClass('open');
        $('.allmenu').slideToggle();
    });

    $('.itemSlide:gt(0)').hide();

    $('.item-btn>li').click(function(){
        $(this).addClass('on').siblings().removeClass('on');

        let p = $(this).index();

        $('.itemSlide').eq(p).show().siblings().hide();
    });

    $('.itemSlide').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: false,
        variableWidth: true
    });

})