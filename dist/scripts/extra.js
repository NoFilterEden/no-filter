$(document).ready(function () {
    $('.new-pay-btn').click(function(){
        $('.new-payment-method').addClass('payment-method-active');
        $('.old-payment-method').removeClass('payment-method-active');
    });
    $('.existing-pay-btn').click(function(){
        $('.old-payment-method').addClass('payment-method-active');
        $('.new-payment-method').removeClass('payment-method-active');
    });
    $('.new-pay-btn').click(function(){
        $('.pm-checkbox-two span').addClass('active');
        $('.pm-checkbox-one span').removeClass('active');
    });
    $('.existing-pay-btn').click(function(){
        $('.pm-checkbox-one span').addClass('active');
        $('.pm-checkbox-two span').removeClass('active');
    });
    // -----Email validation----
    $("#email").on('keyup', function () {
        var email = $("#email").val();
        if (email !== '') {
          var regx = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
          if (regx.test(email)) {
            $('.email-empty').css({
              'display': 'none',
            });
            $('.email-invalid').css({
              'display': 'none',
            });
          } else {
            $('.email-empty').css({
              'display': 'none',
            });
            $('.email-invalid').css({
              'display': 'block',
            });
          }
        } else {
          $('.email-empty').css({
            'display': 'block',
          });
          $('.email-invalid').css({
            'display': 'none',
          });
        }
    });
    // ==========Post header top button----------
    $('.post-top-menu-btn').click(function(){
      $('.post-header-menu').toggleClass('phm-btn-active');
    });
    // ==========All Notifications----------
    $('.header-notify-btn').click(function(){
      $('.notification-menu').toggleClass('notify-btn-active');
    });
    // =============Payment page-----
    $('.old-single-card').click(function(){
      $('.old-single-card').addClass('active');
    });
    // =============Post type page-----
    $('.pyc-btn').click(function(){
      $('.post-type-option').toggleClass('active');
    });



    // -----------Post poll-----------
    jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });
});
