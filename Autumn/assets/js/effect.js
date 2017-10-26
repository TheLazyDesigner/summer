var windoww = 0;
var windowh = 0;

function sceneParallax(){
/*--------------------------------------------------------- PARALLAX ---------------------------------------------------------*/
  if ( $('.scene-parallax').length ) {
    var $sceneparallax = $('.scene-parallax');

  	(resize = function() {
  		$sceneparallax[0].style.width = window.innerWidth + 'px';
  		$sceneparallax[0].style.height = window.innerHeight + 'px';
  	})();

  	window.onresize = _.debounce(resize, 200);
  	window.onscroll = _.debounce(resize, 200);

  	$sceneparallax.parallax();
  }
}

function runFaceCursor(){
/*--------------------------------------------------------- PARALLAX ---------------------------------------------------------*/
  if ( $('.face-cursor').length ) {
    $(".face-cursor .layer-img-wrapper").faceCursor({
  		// whether the element should face away from the cursor instead of toward it
  		avertCursor: false,

  		// CSS perspective for transforms
  		perspective: "15rem",

  		// whether height, width and offset of the elements should be cached instead of recalculated each frame (if the elements move around or you want the effect to be consistent during browser resizing, disable)
  		cacheElementData: true
	});
  }
}

$(window).on( 'load', function(){
  $('body').addClass('page-loading-step1');
  setTimeout(function () {
    $('body').addClass('page-loading-step2');
  }, 400 );
  setTimeout(function () {
    $('body').addClass('page-loading-step3');
  }, 800 );
  setTimeout(function () {
    $('body').addClass('page-loading-step4');
  }, 1200 );
});


$(document).ready(function(){
/*--------------------------------------------------------- PARALLAX ---------------------------------------------------------*/
  sceneParallax();
  
/*--------------------------------------------------------- PARALLAX 3D ---------------------------------------------------------*/
  runFaceCursor();
});