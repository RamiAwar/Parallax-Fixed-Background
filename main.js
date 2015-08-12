


$(window).scroll(function(){

	var scrollVal = $(this).scrollTop();


	//400 -> 900 needs to become a value between 0 -> 1
	if ( scrollVal > 650){
		$('.mask').css({
			'opacity': (scrollVal - 650)/500
		});
	}


	//1800 -> 2400 needs to become a value betwen -500 and 0
	var offset = Math.min(0, -500 + ((scrollVal - 1800)/600)*500 );	

	$('.talk1').css({
		'transform':'translate(' + offset + 'px, ' + offset/5 + 'px)'
	});

	$('.talk2').css({
		'transform':'translate(' + 0 + 'px, ' + offset/2 + 'px)'
	});

	$('.talk3').css({
		'transform': 'translate(' + Math.abs(offset) + 'px, ' + offset/5 + 'px)'
	});

	





});



