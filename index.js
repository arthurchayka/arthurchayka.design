$( document ).ready(function() {
  $( "#dribbble" ).on({
      mouseenter: function() {
        $( '#image' ).removeClass( "show-me" );
        $( '#image' ).addClass( "hide-me" );
      },
      mouseleave: function() {
          $( '#image' ).removeClass( "hide-me" );
          $( '#image' ).addClass( "show-me" );
      }
  });
  $( "#instagram" ).on({
      mouseenter: function() {
        $( '#image' ).removeClass( "show-me" );
        $( '#image' ).addClass( "hide-me" );
      },
      mouseleave: function() {
          $( '#image' ).removeClass( "hide-me" );
          $( '#image' ).addClass( "show-me" );
      }
  });

});
jQuery(function($){

  // Cycle plugin
  $('.slides').cycle({
    fx:     'none',
    speed:   150,
    timeout: 5
  }).cycle("pause");

  // Pause &amp; play on hover
  $('#instagram').hover(function(){
    $('.slideshow-block').find('.slides').addClass('active').cycle('resume');
  }, function(){
    $('.slideshow-block').find('.slides').removeClass('active').cycle('pause');
  });

  $('#dribbble').hover(function(){
    $('.slideshow-block').find('.slides').addClass('active').cycle('resume');
  }, function(){
    $('.slideshow-block').find('.slides').removeClass('active').cycle('pause');
  });

});
