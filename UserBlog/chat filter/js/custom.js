$('document').ready(function () {
    $('.users-list .more p').click(function () {
        $('.users-list ul li.h11').slideDown();
        $(this).hide();
    });
    
    
    $('.chat-op .box .q1').click(function(){
        $('.w1').toggle();
        $('.chat-op .box .q1').toggle();
        $('.drop1').addClass('dell');
    });
    $('.w1').click(function(){
        $('.q1').toggle();
        $('.w1').toggle();
        $('.drop1').removeClass('dell');
    });
    
    
    
    $('.chat-op .box .q2').click(function(){
        $('.w2').toggle();
        $('.chat-op .box .q2').toggle();
        $('.drop2').addClass('dell');
    });
    $('.w2').click(function(){
        $('.q2').toggle();
        $('.w2').toggle();
        $('.drop1').removeClass('dell');
    });
    
    
    $('.chat-op .box .q3').click(function(){
        $('.w3').toggle();
        $('.chat-op .box .q3').toggle();
    });
    $('.w3').click(function(){
        $('.q3').toggle();
        $('.w3').toggle();
    });
    
    $('.chat-op .box .q4').click(function(){
        $('.w4').toggle();
        $('.chat-op .box .q4').toggle();
    });
    $('.w4').click(function(){
        $('.q4').toggle();
        $('.w4').toggle();
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
    $('.tex4').click(function () {
        $('.drop4').slideToggle();
        $('.chat-op .box .text h6 span.down1').toggle();
        $('.chat-op .drop2').slideUp();
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

    $('#te11').keyup(function (event) {
        var chars = $('#te11').val().length;
        var charsleft = max - chars;
        $('#max').text(charsleft);

        if (chars >= max) {
            event.preventDefault();
        }

        if (chars >= 5) {
            //$('input[type=submit]').show();
            $('#min span').text('reached');
        } else {
            $('input[type=submit]').hide();
            $('#min span').text('5');
        }
    });




    $('.topic h5 span').click(function () {
        $('.topic .text textarea').show();
        $('.topic .text p').addClass('hid');
        $(this).hide();
        $('.topic .buttons').show();
    });


    $('.topic .buttons span').click(function () {
        $('.topic .buttons span').hide();
        $('.topic .text textarea').hide();
        $('.topic .text p').removeClass('hid');
        $('.topic h5 span').show();
    });




    $('.cname button').click(function () {
        $('.cname .c23 ul').slideToggle();
    });
    $('.l-responsive').click(function(){
        $('.left-bar').addClass('active');
        $('.overlay').show();
    });
    $('.overlay').click(function(){
        $('.left-bar').removeClass('active');
        $('.overlay').hide();
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
