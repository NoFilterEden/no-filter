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

$(".video-carsual").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: '<i class="fas fa-caret-left"></i>',
  nextArrow: '<i class="fas fa-caret-right"></i>',
  autoplay: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

// mobile menu slide from the left
$('[data-toggle="slide-collapse"]').on("click", function() {
  $navMenuCont = $($(this).data("target"));
  $navMenuCont.animate({ width: "toggle" }, 350);
  $(".main-wraper").toggleClass("active");
  $(".overlay-full").toggleClass("active");
});

// $(".search-tigger i").click(function() {
//   $(".search-tigger").toggleClass("active");
//   $(".toggle-nav-bar").toggleClass("active");
// });

tinymce.init({
  selector: ".tinyMCE",
  height: 280
});

$(".chosen-select").chosen({ disable_search_threshold: 10 });

$(".description-arrow").click(function() {
  $(".video__description").toggleClass("active");
});

$(".__up,.__down,.follow,.suscribe").click(function() {
  $(this).toggleClass("active");
});

$(".archive").click(function() {
  $(this).toggleClass("show");
});
