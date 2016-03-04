var list_template, cities_template, city_template;

var current_list = city_data.info[0];
var current_city = current_list.cities[0];

function showTemplate(template, data) {
	var html = template(data);
	$('#current').html(html);
}

$(document).ready(function(){

	var source = $("#list-template").html();
	list_template = Handlebars.compile(source);

	source = $("#cities-template").html();
	cities_template = Handlebars.compile(source);

	source = $("#city-template").html();
	city_template = Handlebars.compile(source);

	$("#list-page").click(function(){
		showTemplate(list_template, city_data);
		$("#cities-page").removeClass("active");
		$("#list-page").addClass("active");
		$(".region-thumbnail").click(function(){
			var index = $(this).data("id");
			current_list = city_data.info[index];
			showTemplate(cities_template, current_list);
			$(".city-thumbnail").click(function(){
				var index = $(this).data("id");
				current_city = current_list.cities[index];
				showTemplate(city_template, current_city);
			});
		});
	}); // ends list-page click function

	$("#cities-page").click(function(){
		showTemplate(cities_template, current_list);
		$("#list-page").removeClass("active");
		$("#cities-page").addClass("active");
		$(".city-thumbnail").click(function(){
			var index = $(this).data("id");
			current_city = current_list.cities[index];
			showTemplate(city_template, current_city);
		});
	});

	$("#list-page").click();

});