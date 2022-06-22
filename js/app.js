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


    /*---canvas menu activation---*/
      $('.canvas_open').on('click', function(){
          $('.Offcanvas_menu_wrapper,.off_canvars_overlay').addClass('active')
      });
      $('.canvas_close,.off_canvars_overlay').on('click', function(){
          $('.Offcanvas_menu_wrapper,.off_canvars_overlay').removeClass('active')
      });

      /*---Off Canvas Menu---*/
    var $offcanvasNav    = $('.offcanvas_main_menu'),
    $offcanvasNavSubMenu = $offcanvasNav.find('.sub-menu');
      $offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="fa fa-angle-down"></i></span>');
      $offcanvasNavSubMenu.slideUp();
      $offcanvasNav.on('click', 'li a, li .menu-expand', function(e) {
          var $this = $(this);
          if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
              e.preventDefault();
              if ($this.siblings('ul:visible').length){
                  $this.siblings('ul').slideUp('slow');
              }else {
                  $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
                  $this.siblings('ul').slideDown('slow');
              }
          }
          if( $this.is('a') || $this.is('span') || $this.attr('clas').match(/\b(menu-expand)\b/) ){
            $this.parent().toggleClass('menu-open');
          }else if( $this.is('li') && $this.attr('class').match(/\b('menu-item-has-children')\b/) ){
            $this.toggleClass('menu-open');
          }
      });

	});// DOM Ready
}(jQuery)); // IIFE