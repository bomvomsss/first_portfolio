$(function(){
    $('.headerwrap, .depth2').hide();
    

    $('#gnb>ul').mouseenter(function(){
        $('.headerwrap').stop().slideDown(300);
        $('.depth2').stop().slideDown(400);
    });
    $('.headerInner').mouseleave(function(){
        $('.headerwrap').stop().slideUp(300);
        $('.depth2').stop().slideUp(200);
    })
    

    $('#fullpage').fullpage({
		//options here
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage','footer'],
		autoScrolling:true,
		scrollHorizontally: true,
        navigation: true,
        credits: false,
        navigationTooltips: ['홈', '브랜드', '메뉴', '서비스', '사회공헌','SNS', '커뮤니티'],
        showActiveTolltips: true,

        afterLoad: function(anchorLink,index){
              
            if (index == 2){
                var counter= 35041427;
  
                $({ val : 0 }).animate({ val : counter }, {
                 duration: 1000,
                step: function() {
                  var num = numberWithCommas(Math.floor(this.val));
                  $(".active .count").text(num);
                },
                complete: function() {
                  var num = numberWithCommas(Math.floor(this.val));
                  $(".active .count").text(num);
                }
                });
                
                //3자리마다 , 찍기
                function numberWithCommas(x) {
                    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }
            };

            if(index == 3){
                var counter= 16;
  
                $({ val : 0 }).animate({ val : counter }, {
                 duration: 1000,
                step: function() {
                  var num = numberWithCommas(Math.floor(this.val));
                  $(".active .count").text(num);
                },
                complete: function() {
                  var num = numberWithCommas(Math.floor(this.val));
                  $(".active .count").text(num);
                }
                });
                
                //3자리마다 , 찍기
                function numberWithCommas(x) {
                    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }
            };
            if (index == 8){
                $('header').addClass('on');

                $('#gnb>ul').mouseenter(function(){
                    $('header').removeClass('on');
                });
                $('.headerInner').mouseleave(function(){
                    $('header').addClass('on');
                });
            }else if(index <=8){
                $('header').removeClass('on'); 
                $('#gnb>ul').mouseenter(function(){
                    $('header').removeClass('on');
                });
                $('.headerInner').mouseleave(function(){
                    $('header').removeClass('on');
                });
            };
        }
        
	});

    // ---------------카운터
    // var counter= 35041427;
  
    // $({ val : 0 }).animate({ val : counter }, {
    //  duration: 1000,
    // step: function() {
    //   var num = numberWithCommas(Math.floor(this.val));
    //   $(".active .count").text(num);
    // },
    // complete: function() {
    //   var num = numberWithCommas(Math.floor(this.val));
    //   $(".active .count").text(num);
    // }
    // });
    
    // //3자리마다 , 찍기
    // function numberWithCommas(x) {
    //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // }
// ////////////////////////////////////////////////////////
    $('.visual').slick({
        slide: 'div',
        dots: true,
        arrows: false,
        slideToScroll: true,
        draggable: true,
        // fade: true,
        autoplay: true,
        customPaging: function(slider, i) {
			var tit = $(slider.$slides[i]).find('.visual-dot-nav').html();
			return '<div class="pager-tit" class=' + i + '>'+ tit + '</div>';
		},
		autoplaySpeed: 40000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });
    
    $('.visual').on('afterChange',function(event,slick,currentSlide,nextSlide){
	    $("#vid").get(0).currentTime = 0;
       
        if(currentSlide == 0) {
           $('.visual').slick('slickSetOption','autoplaySpeed','40000');
           $('#vid').trigger('play');
        } else {
           $('.visual').slick('slickSetOption','autoplaySpeed','8000');
           $('#vid').trigger('pause');
        };
    });
    
    $('.slick-dots>li').mouseenter(function(){
        let idx = $(this).index();
        $('.visual').slick('slickGoTo',idx);
        $('.visual').slick('slickSetOption', 'autoplay', false).slick('slickPause');

    }).mouseleave(function(){
        $('.visual').slick('slickSetOption', 'autoplay', true).slick('slickPlay');
    })



});