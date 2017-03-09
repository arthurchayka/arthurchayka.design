$( document ).ready(function() {
  $( "#see-more" ).on({
      mouseenter: function() {
        $( '#img' ).removeClass( "show-me" );
        $( '#img' ).addClass( "hide-me" );
        $( '#honey' ).removeClass( "hide-me" );
        $( '#honey' ).addClass( "show-me" );
      },
      mouseleave: function() {
          $( '#img' ).removeClass( "hide-me" );
          $( '#img' ).addClass( "show-me" );
          $( '#honey' ).removeClass( "show-me" );
          $( '#honey' ).addClass( "hide-me" );
      }
  });
  $( "#feel-more" ).on({
      mouseenter: function() {
        $( '#img' ).removeClass( "show-me" );
        $( '#img' ).addClass( "hide-me" );
        $( '#colour-bomb' ).removeClass( "hide-me" );
        $( '#colour-bomb' ).addClass( "show-me" );
      },
      mouseleave: function() {
          $( '#img' ).removeClass( "hide-me" );
          $( '#img' ).addClass( "show-me" );
          $( '#colour-bomb' ).removeClass( "show-me" );
          $( '#colour-bomb' ).addClass( "hide-me" );
      }
  });
});
