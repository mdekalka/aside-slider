//piupiupiu
;(function($) {

	$.fn.asideSlider = function(options) {

		return this.each(function() {
			var settings = {
				speed: 5000,
				btnPrev: null,
				btnNext: null,
				mainDiv: null,
				item: null,
				paginator: null,

			};

			if (options || {}) {
				$.extend(settings, options)
			}
			//"global" var's:
			var $this = $(this),
					//prev/next buttons nav
					$aside_nav = $this.find('ul:first'),
					//paginator
					$aside_paginator = $this.find(settings.paginator),
					//main content
					$aside_content = $this.find(settings.mainDiv + '>' + settings.item),
					//number of content blocks
					$contentCount = $aside_content.length,
					currentState = 0,
					currentLink,
					nextLink,
					elementsNumber = 0;
			//create paginator		
			createList($aside_paginator, $contentCount);

			//auto play go-go		
			var timer = setInterval(function () {
				checkStateNext($aside_paginator, $aside_content)}, settings.speed);	

			//left button click:
			$(settings.btnPrev).on('click', function(e) {
				e.preventDefault();
				checkStatePrev($aside_paginator, $aside_content);
			});
			//right button click:
			$(settings.btnNext).on('click', function(e) {
				e.preventDefault();
				checkStateNext($aside_paginator, $aside_content);
			});	
			//hover stop moving, unhover continue moving
			$this.hover(function() {
				clearInterval(timer);
			}, function() {
				timer = setInterval(function() {
				checkStateNext($aside_paginator, $aside_content)
				}, settings.speed);
			});
			//click on paginator
			$aside_paginator.on('click', 'a', function(e) {
				e.preventDefault();
				var $this = $(this),
						state = $this.closest('li').index();
				//===========================
				showNext($this, state, $aside_content);
			});

		});
		//main func with styles:
		function showNext(link, state, content) {
			var $self = link,
					current_item = state;
			$self
				.closest('li')
				.addClass('active')
				.siblings()
				.removeClass('active');
			content.eq(current_item)
				.fadeIn('400')
				.addClass('active')
				.siblings()
				.fadeOut('100')
				.removeClass('active');		
		};//end of showNext

		//get current state and move right
		function checkStateNext(target, main) {
			currentState = target.find('li').filter('.active').index();
			currentLink = target.find('li').filter('.active');
			elementsNumber = target.find('li').length;
			if (currentState < elementsNumber - 1) {
				currentState++;

				nextLink = currentLink.next();
			} else {
				currentState = 0;
				nextLink = target.find('li').first();
			};
			showNext(nextLink, currentState, main);
		};//enf of checkStateNext
		
		//get current state and move left
		function checkStatePrev(target, main) {
			currentState = target.find('li').filter('.active').index();
			currentLink = target.find('li').filter('.active');
			elementsNumber = target.find('li').length;
			//=========================================================
			if (currentState !== 0 ) {
				currentState--;
				nextLink = currentLink.prev();
			} else {
				nextLink = target.find('li').filter(':last');
				currentState = elementsNumber - 1;
			};
			showNext(nextLink, currentState, main);
		}; //end of checkStatePrev

		//dynamically create lists(depends on count 'asideSlider-container')
		function createList(target, number) {
			var count = number,
					that = target,
					paginator_list = '';
			//==============================================		
			for (var i = 0; i < count; i++) {
				if (!i) {
					paginator_list+='<li class="active"><a href="#"></a></li>';
				} else {
					paginator_list+='<li><a href="#"></a></li>';
				}
			}
			target.append(paginator_list);
		}; //end of createList

	};// end of plugin

})(jQuery);