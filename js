//instaSlide
	$('.instaSlide').slick({
		arrows:true,
		dots: false,
		//speed: 1000,
		autoplay: false,
		infinite: true,
		variableWidth: true,
		prevArrow: $('.prevSlide'),
		nextArrow: $('.nextSlide'),
	});
	mouseOnSl = function(){
		$('.instaSlide').one('mouseenter', function (e) {
			$('.leftHide').fadeOut(2500);
			false
		});
		var winW = $(window).width();
		if (winW > 768){
			$('.slick-arrow').each(function(){
				$(this).bind('click', function(){
					$('.leftHide').fadeOut(2500);
				});
			});
		} else {
			$('.instaSlide').on('mouseenter',function () {
				$('.leftHide').fadeOut(2500);
			});
		}
	}
	mouseOnSl();
