$(function(){
    // hero slider
    var swiper = new Swiper(".banner_slider", {
        speed: 500,
        effect: "fade",
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
          pagination: {
            el: ".hero_arrow_dots",
            type: "fraction",
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' + "  " + '<span class="' + totalClass + '"></span>';
            },
            formatFractionCurrent: function (number) {
                return "0" + number;
            },
            formatFractionTotal: function (number) {
                return "05";
            },
          },
          navigation: {
            nextEl: ".arrow_next",
            prevEl: ".arrow_prev",
          },
    });
    //sticky navbar
    var menuTop = $(".navSticky").offset().top;
    $(window).on("scroll", function () {
      var scrollToTop = $(window).scrollTop();
  
      //js
      if (scrollToTop > menuTop) {
        $(".navSticky").addClass("menuFix");
      } else {
        $(".navSticky").removeClass("menuFix");
      }
      // back top button js
      if (scrollToTop > 500) {
        $(".backtop").fadeIn(400);
      } else {
        $(".backtop").fadeOut(500);
      }
    });
     //backtop js
     $('.backtop ').on('click',function(){
      $('html,body').animate({
        scrollTop: 0
      },500);
    });
})