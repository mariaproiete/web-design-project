//Parallax effect on images
(function($, $doc) {
	
	$doc.ready(function() {
		var parallaxBgImg1 = $('.parallax-img-bg');

		$doc.on('scroll', function(){
			var currScrollPosition = $doc.scrollTop();
			// change the background position: We only want to change the Y position, so X=0. We place a '-' to the backgroung go up
			parallaxBgImg1.css('background-position', '0 ' + -currScrollPosition/2 + 'px');
		});
	});

})(jQuery, jQuery(document));


//Fly effect on text "Welcome"
(function($){
	$(document).ready(function() {
		setTimeout(function () {
	 	 $('.fly-in-text').removeClass('hidden')
	 }, 100);
	});
})(jQuery);
