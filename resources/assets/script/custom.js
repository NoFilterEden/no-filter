$(".carosual").slick({
  dots: false,
  infinite: false,
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
  // $(".__category").toggleClass("active");
});

$(".__up,.__down,.follow,.suscribe").click(function() {
  $(this).toggleClass("active");
});

$(".archive").click(function() {
  $(this).toggleClass("show");
});



//chat.html jquery

$('.dropdown-submenu a.test').on("click", function(e){
    $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
});


    $('.users-list .more p').click(function () {
    $('.users-list ul li.h11').slideDown();
    $('.users-list .more .up').show();
    $('.users-list .more p').hide();
});

$('.users-list .more .up').click(function(){
    $('.users-list ul li.h11').slideUp();
    $('.users-list .more .up').hide();
    $('.users-list .more p').show();
});


$('.chat-op h5 span').click(function () {
    $('.chat-op .buttons, .box.bvf').slideDown(300);
    $('.chat-op h5 span').hide();
});
$('.chat-op .buttons span').click(function () {
    $('.chat-op .buttons, .box.bvf').slideUp();
    $('.chat-op h5 span').fadeIn(300);
});


$('.chat-op .box .q1').click(function () {
    $('.w1').toggle();
    $('.chat-op .box .q1').toggle();
    $('.drop1').addClass('dell');
});
$('.w1').click(function () {
    $('.q1').toggle();
    $('.w1').toggle();
    $('.drop1').removeClass('dell');
});



$('.chat-op .box .q2').click(function () {
    $('.w2').toggle();
    $('.chat-op .box .q2').toggle();
    $('.drop2').addClass('dell');
});
$('.w2').click(function () {
    $('.q2').toggle();
    $('.w2').toggle();
    $('.drop1').removeClass('dell');
});


$('.q3').click(function () {
    $('.w3').toggle();
    $('.chat-op .box .q3').toggle();
    $('.drop4').addClass('dell');
});
$('.w3').click(function () {
    $('.q3').toggle();
    $('.w3').toggle();
    $('.drop4').removeClass('dell');
});

$('.chat-op .box .q4').click(function () {
    $('.w4').toggle();
    $('.chat-op .box .q4').toggle();
});
$('.w4').click(function () {
    $('.q4').toggle();
    $('.w4').toggle();
});





$('.del1').click(function () {
    $('.dell-1').show();
});

$('.yes1 , .No1').click(function () {
    $('.dell-1').hide();
});
$('.yes1').click(function () {
    $('.b1').hide();
});

$('.del4').click(function () {
    $('.dell-2').show();
});

$('.yes2 , .No2').click(function () {
    $('.dell-2').hide();
});
$('.yes2').click(function () {
    $('.b3').hide();
});

$('.del5').click(function () {
    $('.dell-3').show();
});

$('.yes3 , .No3').click(function () {
    $('.dell-3').hide();
});
$('.yes3').click(function () {
    $('.b4').hide();
});

$(document).mouseup(function(e){
    var element = $(".dell-1 , .dell-2 , .dell-3");

    // If the target of the click isn't the element
    if(!element.is(e.target) && element.has(e.target).length === 0){
        element.hide();
    }
});


$('.chat-op .tex2').click(function () {
    $('.chat-op .drop1').slideToggle();
    $('.chat-op .box .text h6 span.down1').toggle();
    $('.chat-op .drop2').slideUp();
});
$('.chat-op .text3').click(function () {
    $('.chat-op .drop2').slideToggle();
    $('.chat-op .box .text h6 span.down2').toggle();
    $('.chat-op .drop1').slideUp();
});
$('.text4').click(function () {
    $('.drop4').slideToggle();

});
$('.tex1').click(function () {
    $('.drop3').slideToggle();

});



$('.d12 span.dot1').click(function () {
    $('.d1').slideToggle();
    $('.a1').toggle();
});

$('.d12 span.dot2').click(function () {
    $('.d2').slideToggle();
    $('.a2').toggle();
});

$('.d12 span.dot3').click(function () {
    $('.d3').slideToggle();
    $('.a3').toggle();
});

$('.d12 span.dot4').click(function () {
    $('.d4').slideToggle();
    $('.a4').toggle();
});



//textarea counter
$('form').submit(function (event) {
    // Remove this if you want to use the form
    event.preventDefault();
});

$('#te11[maxlength]')

var max = $("#te11").attr("maxlength");

if ($('#te11').val() <= 100) {
    $('#max').text(max);
    $('#min span').text('5');
}






$('.topic h5 span').click(function () {
    $('.topic .text textarea, .topic .text .count').show(300);
    $('.topic .text p').addClass('hid');
    $('.topic h5 span').hide();
    $('.topic .buttons').slideDown(400);
});


$('.topic .buttons').click(function () {
    $('.topic .buttons').hide();
    $('.topic .text textarea, .topic .text .count').hide();
    $('.topic .text p').removeClass('hid');
    $('.topic h5 span').fadeIn(320);
});

$('.topic .text p').dblclick(function () {
    $('.topic .text p').addClass('hid');
    $('.topic .text textarea').show();
    $('.topic .buttons').show();
    $('.topic h5 span').hide();
    $('.topic .text .count').show();
});




$('.cname button').click(function () {
    $('.cname .c23 ul').slideToggle();
});
$('.l-responsive').click(function () {
    $('.left-bar').addClass('active');
});

$(document).mouseup(function(e){
    var element = $(".left-bar");

    // If the target of the click isn't the element
    if(!element.is(e.target) && element.has(e.target).length === 0){
        element.removeClass("active");
    }
});



$.fn.extend({
    limiter: function (counter) {
        var limit = this.attr('maxlength');

        $(this).on("keyup focus", function () {
            setCounter(this, counter);
        });

        function setCounter(source, counter) {
            var chars = source.value.length;
            if (chars > limit) {
                source.value = source.value.substr(0, limit);
                chars = limit;
            }
            counter.html(limit - chars);
        }
        setCounter($(this)[0], counter);
    }
});

$(".limited-textarea").each(function () {
    var $textarea = $(this).find('.textarea');
    var $counter = $(this).find('.counter');
    $textarea.limiter($counter);
});



$(function () {
    $('[data-toggle="tooltip"]').tooltip()
}), $('[data-toggle="slide-collapse"]').on("click", function () {
    $navMenuCont = $($(this).data("target")), $navMenuCont.animate({
        width: "toggle"
    }, 350), $(".main-wraper").toggleClass("active"), $(".overlay-full").toggleClass("active")
}), tinymce.init({
    selector: ".tinyMCE",
    height: 280
}), $(".chosen-select").chosen({
    disable_search_threshold: 10
}), $(".description-arrow").click(function () {
    $(".video__description").toggleClass("active")
}), $(".__up,.__down,.follow,.suscribe").click(function () {
    $(this).toggleClass("active")
}), $(".archive").click(function () {
    $(this).toggleClass("show")
});

//chat.html jquery
