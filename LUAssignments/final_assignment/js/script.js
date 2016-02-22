// Step 1: Define templates in html as variables in the JS code
// There are 4 templates in use: albums, photos, photo, and slideshow
// No need to define the values at this time

var collections_template, animals_template, animal_template, slideshow_template;

// Step 2: Define 2 variables and assign them and index of 0 in the "gallery" object and "photos" array within it
// This will be the current, or default data displayed
// These will be used later on 
var current_collection = animals_data.category[0];
var current_animal = current_collection.animals[0];

// Step 3: Create a helper function that will attach the data to the template, and display in the "content" HTML <div>
// The helper function is defined globally and will be used several times in the code
function showTemplate(template, data) {
	var html = template(data);
	$('#content').html(html);
}

// Step 4: Ready your document for jQuery code. All other code will go within it
$(document).ready(function(){
	// Step 5: Compile all templates used in HTML to handlebars.js. Assign to "source" variable
	// Do this for every template, assign the compiled code to template variables defined earlier
	var source = $("#collections-template").html();
	collections_template = Handlebars.compile(source);

	source = $('#animals-template').html();
	animals_template = Handlebars.compile(source);

	source = $('#animal-template').html();
	animal_template = Handlebars.compile(source);

	source = $('#slideshow-template').html();
	slideshow_template = Handlebars.compile(source);

	

	//Step 6: Create a click function for #albums-tab from the HTML
	$("#collections-tab").click(function(){
		// use the helper function to display albums_template compiled code and data from gallery object
		showTemplate(collections_template, animals_data);
		// remove .active class from all other nav-tabs
		$(".nav-tabs .active").removeClass("active");
		// add .active class to the #albums-tab
		$("#collections-tab").addClass("active");
		// create a callback click function for the album thumbnail
		$(".collection-thumbnail").click(function(){
			// grab data index and assign it to a variable
			var index = $(this).data("id");
			// assign data from gallery object to the variable "current_album"
			// index is used as a parameter, evaluates to 0
			current_collection = animals_data.category[index];
			// use helper function to display photos_template and data now assigned to current_album
			showTemplate(animals_template, current_collection);
			// create same click function for the photo thumbnail
			// assign data to a variable and use helper function to display it
			$(".animal-thumbnail").click(function(){
				var index = $(this).data("id");
				// set the current photo to selected (this) photo
				current_animal = current_collection.animals[index];
				//  display the single photo_template using helper function
				showTemplate(animal_template, current_animal);
			});
		});
	});
	// Repeat steps 6 and substeps for all other tabs
	$("#animals-tab").click(function () {

		showTemplate(animals_template, current_collection);

		$(".nav-tabs .active").removeClass("active");
		
		$("#animals-tab").addClass("active");

		$(".animal-thumbnail").click(function (){
			var index = $(this).data("id");
			current_animal = current_collection.animals[index];
			showTemplate(animal_template, current_animal);
		});
	});

	// Use helper function to display slideshow_template and current_album data
	// remove classes from all other tabs except #slideshow-tab when clicked

	$("#slideshow-tab").click(function () {

		showTemplate(slideshow_template, current_collection);
		
		$(".nav-tabs .active").removeClass("active");

		$("#slideshow-tab").addClass("active");
	});

	// start the page by showing the albums view upon click
	$("#collections-tab").click();
	
});