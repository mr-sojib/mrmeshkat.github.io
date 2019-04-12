(function ($){

	$(document).ready(function(){


		$('.portfolio-filter li').on( 'click', function() {
		  var filterValue = $(this).attr('data-filter');
		  $('.portfolio-list').isotope({
		  	filter: filterValue
		  });
		});



		$('.portfolio-list').isotope({
			itemSelector: '.single-portfolio-item',
			percentPosition: true,
			masonry: {
		    	columnWidth: '.single-portfolio-item',
		    	horizontalOrder: true
			}
		});



		//owl-carousel js
		 $(".testimonial-lists").owlCarousel({
		 	items: 1,
		 	autoplay: true,
		 	autoplayTimeout: 5000,
		 	loop:true
		 });

		// counterup js
		$('.counter').counterUp({
		    delay: 10,
		    time: 1000
		});

	});

}(jQuery));