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

    // FAQ
    $("#accordion").on("hide.bs.collapse show.bs.collapse", e => {
      $(e.target)
        .prev()
        .find("i:last-child")
        .toggleClass("fa-angle-down fa-angle-up");
    });

    // One Page scroll
    $('.scrollTo').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        $('.modal').modal('hide');
        var target = $(this.hash);
        var headerH='0';
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top-headerH+"px"
          }, 1000);
          $('.Offcanvas_menu_wrapper,.off_canvars_overlay').removeClass('active');
          return false;
        }
      }
    });


	});// DOM Ready
}(jQuery)); // IIFE
