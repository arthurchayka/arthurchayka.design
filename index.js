$( document ).ready(function() {
  $( "#see-more" ).on({
      mouseenter: function() {
        $( '#image' ).removeClass( "show-me" );
        $( '#image' ).addClass( "hide-me" );
        $( '#dribbble' ).removeClass( "hide-me" );
        $( '#dribbble' ).addClass( "show-me" );
      },
      mouseleave: function() {
          $( '#image' ).removeClass( "hide-me" );
          $( '#image' ).addClass( "show-me" );
          $( '#dribbble' ).removeClass( "show-me" );
          $( '#dribbble' ).addClass( "hide-me" );
      }
  });
  $( "#feel-more" ).on({
      mouseenter: function() {
        $( '#image' ).removeClass( "show-me" );
        $( '#image' ).addClass( "hide-me" );
        $( '#instagram' ).removeClass( "hide-me" );
        $( '#instagram' ).addClass( "show-me" );
      },
      mouseleave: function() {
          $( '#image' ).removeClass( "hide-me" );
          $( '#image' ).addClass( "show-me" );
          $( '#instagram' ).removeClass( "show-me" );
          $( '#instagram' ).addClass( "hide-me" );
      }
  });
});
