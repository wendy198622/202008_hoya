$(document).ready(function(){
    // 手機版選單
    var $mobile = $('#mobile') ,
        $toggle = $mobile.find('.toggle') ,
        $menu = $mobile.find('.wrap');
     
    $toggle.click(function(e) {
        $menu.slideToggle()
    });


    if($(window).width() < 991)
    {
      $('.mob_slider').addClass("slider");
    } else {
      $('.mob_slider').removeClass("slider");
    }

    if($(window).width() > 992)
    {
      $('.section8').addClass("js_height");
      $('.section9').addClass("js_height");
    } else {
      $('.section8').removeClass("js_height");
      $('.section9').removeClass("js_height");
    }
    var max = 0;
    $('.js_height').each(function (T) {
      T = $(this).outerHeight(), T > max && (max = T);
    }).outerHeight(max);


    $('.slider').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        dots: true
    });

   

    $('.close').click(function() {
        $('.popup').removeClass('is_acted');
    });

  //   $('.slider_popup').slick({
  //     infinite: true,
  //     autoplay: true,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     arrows: true,
  //     dots: true
  // });
    
  new WOW().init();



});

