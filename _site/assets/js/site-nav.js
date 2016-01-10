jQuery(document).ready(function($){

	var $rootElement = $(document.documentElement);

	// open/close site navigation
	$('.nav-trigger').on('click', function(event){
		event.preventDefault();
		toggleNav();
	});

	// make sticky navigation by duplicate site-nav
	var $stickyHeader = $('.header-nav').clone().insertAfter('.header-nav');
	$stickyHeader.addClass('sticky-header');

	// detect scroll position and toggle the sticky header
	var waypoint = $('.page').waypoint({
	  handler: function(direction) {
		  $rootElement.toggleClass('sticky', direction === 'down');
	  },
	  offset: -300
	});


	function toggleNav(){
		var navIsVisible = ( !$rootElement.hasClass('menu-shown') ) ? true : false;
		$rootElement.toggleClass('menu-shown', navIsVisible);
		if( !navIsVisible ) {
			$('.site-nav').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){});
		}
	}
});
