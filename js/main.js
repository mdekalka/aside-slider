;(function($, window, document, undefined) {
$(document).ready(function() {
	$('.asideSlider').asideSlider({
		speed: 5000,
		btnPrev: '.asideSlider-left',
		btnNext: '.asideSlider-right',
		mainDiv: '.main',
		item: '.asideSlider-container',
		paginator: '.asideSlider-pagination'
	});
	//aside slider
	//==========================================
	//variables:
	// var content_item = $('.asideSlider-container'),
	// 		$links = $('.asideSlider-pagination').find('li'),
	// 		prev = $('.asideSlider-left'),
	// 		next = $('.asideSlider-right'),
	// 		item_position,
	// 		index,
	// 		elementsNumber = $links.length,
	// 		currentState = 0,
	// 		currentLink,
	// 		nextLink;


	// //click event on links
	// $('.asideSlider-pagination').on('click', 'a', function(e) {
	// 	e.preventDefault();
	// 	var $this = $(this)
	// 			state = $this.closest('li').index();
	// 	//===========================
	// 	showNext($this, state);
		
	// });

	// //hover on main content:
	// content_item.hover(function() {
	// 	/* Stuff to do when the mouse enters the element */
	// 	clearInterval(timer);
	// }, function() {
	// 	/* Stuff to do when the mouse leaves the element */
	// 	timer = setInterval(checkStateNext, 5000);
	// });


	// //prev button click
	// prev.on('click', function(e) {
	// 	e.preventDefault();
	// 	checkStatePrev();
	// });
	// //next button click
	// next.on('click', function(e) {
	// 	e.preventDefault();
	// 	checkStateNext();
	// });

	// //show another part of content	
	// function showNext(link, state) {
	// 	var $self = link,
	// 			current_item = state;
	// 	//=========================
	// 	$self	
	// 		.closest('li')
	// 		.addClass('active')
	// 		.siblings()
	// 		.removeClass('active');
	// 	content_item.eq(current_item)
	// 		.fadeIn('400')
	// 		.addClass('active')
	// 		.siblings()
	// 		.fadeOut('100')
	// 		.removeClass('active');
	// };
	// //check current state of page and move to right
	// function checkStateNext() {
	// 	currentState = $links.filter('.active').index();
	// 	currentLink = $links.filter('.active');

	// 	if (currentState < elementsNumber - 1) {
	// 		currentState++;
	// 		nextLink = currentLink.next();
	// 	} else {
	// 		currentState = 0;
	// 		nextLink = $links.first();
	// 	};
	// 	showNext(nextLink, currentState);

	// };
	// function checkStatePrev() {
	// 	currentState = $links.filter('.active').index();
	// 	currentLink = $links.filter('.active');
	// 	if (currentState !== 0 ) {
	// 		currentState--;
	// 		nextLink = currentLink.prev();
	// 	} else {
	// 		nextLink = $links.filter(':last');
	// 		currentState = elementsNumber - 1;
	// 		console.log('last');
	// 	};
	// 	showNext(nextLink, currentState);
	// };
	// //run autoplay of slider
	// var timer = setInterval(checkStateNext, 5000);


});
})(jQuery, window, document);
