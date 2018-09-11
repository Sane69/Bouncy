'use strict';

(function($) {
	
	$('.header__link, .header__scroll').click(function(e) {
		e.preventDefault();

		var target = $(this.hash);

		$('html, body').animate({
			scrollTop: target.offset().top
		}, 1000)
	})

	$('.team__slider').slick({
		dots:true,
		dotsClass: "my-dots",
		infinite: true,
		slidesToShow: 2, 
		slidesToScroll: 2
	});

	$('.test__slider').slick({
		dots:true,
		dotsClass: "my-dots",
		infinite: true,
		slidesToShow: 1, 
		slidesToScroll: 1,
		prevArrow: false,
		nextArrow: false,
		autoplay: true,
		autoplaySpeed: 4000,
	});


	var $portfolio__pictures = $('.portfolio__pictures').isotope({
		itemSelector: '.pictures__elem',
		masonry: {
			gutter: 10
		}
	});

	$('.filter__link--group').on( 'click', 'a', function(e) {
		e.preventDefault();
		var filterValue = $(this).attr('data-filter');
		$portfolio__pictures.isotope({ filter: filterValue });
	});


	$(window).on('load', function(){
		var	map;
		var mapContainer = $('#map')[0]
		var infoWindowText = $('.map__info').html();
		var mapCenter = {lat: 51.5093736, lng: 31.3289479};
		map = new google.maps.Map(mapContainer, {
			center: mapCenter,
			zoom: 15,

			disableDefaultUI: true
		});

		var marker = new google.maps.Marker({
			position: mapCenter,
			map: map,
			icon: "img/favicon.svg"
		});
		var infoWindow = new google.maps.InfoWindow({
			content: infoWindowText
		});
		infoWindow.open(map, marker)

		marker.addListener('click', function(){
			infoWindow.open(map, marker);
		})
	});

})(jQuery);