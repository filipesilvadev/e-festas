$( function() {

	//House and Buffets tab
	$('#tabs').tabs();

	//Animations
	var logo   = $('.hp-head .efestas-logo'),
		slogan = $('.hp-head .slogan'),
		search = $('.hp-search');

		//Entrances
		logo.addClass('animated slideInDown');
		slogan.addClass('animated rollIn');
		search.addClass('animated slideInUp');

		//Hover action	
		logo.hover(function() {
			if (!logo.hasClass('pulse')) {
				logo.removeClass('slideInDown');
				logo.addClass('pulse');
			};
		},function() {
			logo.removeClass('pulse');
		});

});

