$( function() {

	//House and Buffets tab
	$('#tabs').tabs();

	//Animations
	var logo   = $('.hp-head .efestas-logo'),
		slogan = $('.hp-head .slogan'),
		search = $('.hp-search');

		//Entrances
		logo.addClass('animated bounceInDown');
		slogan.addClass('animated zoomIn');
		search.addClass('animated bounceInUp');

		//Hover action	
		logo.hover(function() {
			if (!logo.hasClass('pulse')) {
				logo.removeClass('bounceInDown');
				logo.addClass('pulse');
			};
		},function() {
			logo.removeClass('pulse');
		});

	//Sliders
	$('.business-slider').sliderPro({
				width: 960,
				height: 500,
				arrows: true,
				buttons: false,
				waitForLayers: true,
				thumbnailWidth: 180,
				thumbnailHeight: 150,
				thumbnailPointer: true,
				autoplay: false,
				autoScaleLayers: false,
	});
    
});

