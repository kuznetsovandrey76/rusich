$( document ).ready(function() {

	ymaps.ready(init); 
    function init(){         
        var myMap;        
        myMap = new ymaps.Map("map", {
            center: [55.645436, 37.860180],
            zoom: 10,
            controls: ['']
        });
        var myPlacemark = new ymaps.Placemark([55.645436, 37.860180]);        
        myMap.geoObjects.add(myPlacemark);
    }



	// menu-toggler
	$(document).on('click', '.menu-toggler', function () {
		$(this).toggleClass('active');
		$('body').toggleClass('header__menu_active');
	});	
	$(window).on('resize', function () {
		if ($(this).width() >= 1200 && $('.menu-toggler').hasClass('active')) {
			$('.menu-toggler').toggleClass('active');
			$('body').toggleClass('header__menu_active');
		}
	});

});