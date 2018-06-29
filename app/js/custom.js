;(function($) {

// Form registration
	$("#reg-form").validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			name: 'Please enter a valid name!',
			email: 'Please enter a valid email address!'
		}
	});

	$( ".input" ).focus(function() {
		$(this).parent().find('.input-label, .error').addClass('active');
	});

	$( ".input" ).blur(function() {
		var inputVal = $(this).val();
		if (!inputVal) {
			$(this).parent().find('.input-label, .error').removeClass('active');
		}
	});

//Mobile-menu
	$('#mobile-menu_btn').on ('click', function(){
		$("body").addClass("menu_active");
		$(".menu_mask").css ({'display':'block'});
		$(".menu_mask").animate ({opacity:0.3}, 400);
	});

	$('#menu_close, .menu_mask').on ('click', function(){
		$("body").removeClass("menu_active");
		$(".menu_mask").animate ({opacity:0}, 400, function(){
			$(".menu_mask").css ({'display':'none'});
		});
	});

	if (window.screen.width <= '900') {	
		$('#how-it-work-slider').slick({
			prevArrow: '<div class="slick-prev"></div>',
			nextArrow: '<div class="slick-next"></div>',
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 2,
			slidesToScroll: 2,
			responsive: [
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			]
		});
	}
	if (window.screen.width <= '600') {	
		$('#plans-slider').slick({
			prevArrow: '<div class="slick-prev"></div>',
			nextArrow: '<div class="slick-next"></div>',
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
		});
	}
})(jQuery);