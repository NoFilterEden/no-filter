$('document').ready(function () {
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
        $('.b1').hide();
    });
    $('.del2').click(function () {
        $('.b2').hide();
    });
    $('.del4').click(function () {
        $('.b3').hide();
    });
    $('.del5').click(function () {
        $('.b4').hide();
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
    })




    $('.cname button').click(function () {
        $('.cname .c23 ul').slideToggle();
    });
    $('.l-responsive').click(function () {
        $('.left-bar').addClass('active');
        $('.overlay').show();
    });
    $('.overlay').click(function () {
        $('.left-bar').removeClass('active');
        $('.overlay').hide();
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


    $("#video, #video3, #video4, #video5, #video6, #video7, #video8, #video9, #video10").videoPopup({
        autoplay: 1,
        controlsColor: 'blue',
        showVideoInformations: 0,
        width: 1000,
        customOptions: {
            rel: 0,
            end: 120
        }
    });
    $("#video2").videoPopup({
        autoplay: 1,
        controlsColor: 'blue',
        showVideoInformations: 0,
        width: 1000,
        customOptions: {
            rel: 0,
            end: 120
        }
    });
    
    $( "#datepicker" ).datepicker();
    $( "#datepicker2" ).datepicker();
    
    
    
    $('.like').click(function(){
        $(this).toggleClass('active');
    });
    $('.dislike').click(function(){
        $(this).toggleClass('active');
    });
    
   /* $('.blog-content .like p').click(function(){
        $(this).toggleClass('active');
    }); */
    $('.blog-content .par p a').click(function(){
        $('.more-text').slideDown();
        $('.blog-content .par p a').hide();
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




});
