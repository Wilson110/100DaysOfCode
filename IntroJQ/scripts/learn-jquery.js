$(document).ready(function(){
	//BASIC SELECTORS

	//BASIC ANIMATIONS
	//$('.box:first').slideUp(500).slideDown(800);

	//$('.box:second').animate({bottom: '200px', left: '200px',}, 800);

	//INDEX FILTERS
	//$('p:gt(2)').css('border', '4px solid red');

	//RELATIONSHIP FILTERS
	//$('h2:has(span)').css('color', 'blue');
	//$('.box:empty').css('border', '4px solid grey');

	//ATTRIBUTE FILTERS
	//$('p[name="shorty"]').css('background-color', 'yellow');

	//ATTRIBUTE METHODS
	//$('p:first').attr('class', 'not-lead');
	//$('img').attr("src", "img2.jpg");
	$('img').delay(400).fadeOut(500, function(){
		$(this).attr('src', 'img2.jpg').fadeIn(500);
	})

	//CLASS METHODS
	//$('p').toggleClass('blue').removeClass('lead');

	//CONTENT METHODS
	$('p:first').text('Hey you guyyyysss!');
	//alert($('p:first').text());
	$('input').val('yo dude!');
});