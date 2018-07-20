var windoww = 0;
var windowh = 0;

var square = 0;

function fitAll(){
/*--------------------------------------------------------- CIRCLE SIZE ---------------------------------------------------------*/
  $('.square').each(function() {
    square = $(this).width();
    $(this).css('height', square);
  });
}

$(window).on( 'load', function(){
/*--------------------------------------------------------- fitAll ---------------------------------------------------------*/
  $(window).on( 'resize', function(){
    fitAll();
  });
});

$(document).ready(function(){
/*--------------------------------------------------------- fitAll ---------------------------------------------------------*/
  fitAll();
});