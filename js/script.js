$(function () {
	// ==============Attract-slider================
	$('.attract-slider').slick({
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>'
	});
	// ==============Attract-slider================
	$('.route-slider').slick({
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>'
	});
	/*------POPAP-------------*/
	$('.route-link').click(function (e) {
		e.preventDefault();
		$('#exampleModal').arcticmodal();
	})
	 // плавное перемещение страницы к нужному блоку 
	 $('.go').click(function (e) {
		e.preventDefault();
			elementClick = $(this).attr('href');
			destination = $(elementClick).offset().top;
			$('body,html').animate({scrollTop: destination }, 1500);
		});
});
