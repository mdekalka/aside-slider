;(function($, window, document, undefined) {
$(document).ready(function() {
	//aside slider
	//==========================================
	//variables:
	var content_item = $('.asideSlider-container'),
			$links = $('.asideSlider-nav').find('li'),
			item_position,
			index,
			elementsNumber = $links.length;


	//click event on links
	$('.asideSlider-nav').on('click', 'a', function(e) {
		e.preventDefault();
		var $this = $(this)
				state = $this.closest('li').index();
		//===========================
		showNext($this, state);
		
	});

	//show another part of content	
	function showNext(link, state) {
		var $self = link,
				current_item = state;
		//=========================
		$self	
			.closest('li')
			.addClass('active')
			.siblings()
			.removeClass('active');
		content_item.eq(current_item)
			.fadeIn('400')
			.addClass('active')
			.siblings()
			.fadeOut('100')
			.removeClass('active');
	};

	function checkState() {
		var currentState = 0,
				currentLink,
				nextLink;
		//==========================
		currentState = $links.filter('.active').index();
		currentLink = $links.filter('.active');

		// if (currentLink.is(':last-child')) {
		// 	nextLink = $links.first();
		// 	console.log('last');
		// } else if (currentLink.is(':first-child')) {
		// 	nextLink = currentLink;
		// 	console.log('first');
		// } else {
		// 	nextLink = currentLink.next();
		// }
		if (currentState < elementsNumber - 1) {
			currentState++;
			nextLink = currentLink.next();
		} else {
			currentState = 0;
			nextLink = $links.first();
		};

		showNext(nextLink, currentState);

	};
	setInterval(checkState, 5000);


});
})(jQuery, window, document);
