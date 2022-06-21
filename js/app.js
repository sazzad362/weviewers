// IIFE with jQuery Wrapper
(function($) {
  'use strict';
  /*
   *----------------------------------
   * Document Ready
   *----------------------------------
   */
	$(document).ready(function() {
		
    /* ---- Back to top ----- */

    if ($('#scrollUp').length) {
        var btn = $('#scrollUp');
        $(window).scroll(function() {
          if ($(window).scrollTop() > 500) {
            btn.addClass('show');
          } else {
            btn.removeClass('show');
          }
        });
        btn.on('click', function(e) {
          e.preventDefault();
          $('html, body').animate({scrollTop:0}, '300');
        });
    }


	});// DOM Ready
}(jQuery)); // IIFE
