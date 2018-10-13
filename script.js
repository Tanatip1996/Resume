$(function() {
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();

			if (scroll >= 0) {
				$('.navigation').addClass('fixed');
				$('header').css({
					"border-bottom": "none",
					"padding": "15px 0"
				});
				

			} else {
				$('.navigation').removeClass('fixed');
				$('header').css({
					"border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
					"padding": "20px 0"
				});
			}
		});
	});
