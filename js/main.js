// Can also be used with $(document).ready()
$(window).on('load', function() {
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: "thumbnails"
  });
});


$('.burger').on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	$('nav').addClass('open');
});
$('.close').on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	$('nav').removeClass('open');
});