$(".carosual").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 10,
  slidesToScroll: 1,
  prevArrow: '<i class="far fa-angle-left left"></i>',
  nextArrow: '<i class="far fa-angle-right right"></i>',
  autoplay: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ]
});

$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});
