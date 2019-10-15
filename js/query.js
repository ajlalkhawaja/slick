$(document).ready(function(){
    $(".menu-btn").click(function(){
        $(".top-nav").toggleClass("active");
    });
    $('.two-time').slick({
        centerMode: false,
        centerPadding: '60px',
        slidesToShow: 1,
        dots: false,
        arrows: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              arrows: false,
              centerMode: false,
              dots: true,
              centerPadding: '40px',
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              dots:true,
              centerMode: false,
              centerPadding: '40px',
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 360,
            settings: {
              arrows: false,
              dots:true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1,
            }
          }
        ]
      });
      $('.one-time').slick({
        centerMode: false,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              arrows: false,
              centerMode: false,
              dots: true,
              centerPadding: '40px',
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: false,
              dots: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 360,
            settings: {
              dots: true,
              arrows:false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1,
            }
          }
        ]
      });
});