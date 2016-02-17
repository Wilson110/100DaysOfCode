// Step 1: Define templates in html as variables in the JS code
// There are 4 templates in use: albums, photos, photo, and slideshow
// No need to define the values at this time

var albums_template, photos_template, photo_template, slideshow_template;

// Step 2: Define 2 variables and assign them and index of 0 in the "gallery" object and "photos" array within it
// This will be the current, or default data displayed
// These will be used later on 
var current_album = gallery.albums[0];
var current_photo = current_album.photos[0];

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
	var source = $("#albums-template").html();
	albums_template = Handlebars.compile(source);

	source = $('#photos-template').html();
	photos_template = Handlebars.compile(source);

	source   = $("#modal-template").html();
    var modal_template = Handlebars.compile(source);

	source = $('#photo-template').html();
	photo_template = Handlebars.compile(source);

	source = $('#slideshow-template').html();
	slideshow_template = Handlebars.compile(source);

	//image data for search
	var data = {images:[
        {	
			src : "images/img_1.jpg",
			title : "Earth", 
			description : "View of the Mid-Pacific Ocean from Galileo",
			author: "NASA"
		}, 
		{	
			src : "images/img_4.jpg",
			title : "Iapetus", 
			description : "Saturn moon founded in 1671 by Cassini",
			author: "NASA"		
		},  
        {	
			src : "images/img_6.jpg",
			title : "Mars", 
			description : "Late spring on Mars",
			author: "NASA"
		}, 
		{	
			src : "images/img_7.jpg",
			title : "Jupiter", 
			description : "Three-color filter of Jupiter",
			author: "NASA"	
		}, 
		{	
			src : "images/img_8.jpg",
			title : "Saturn", 
			description : "Full color filter of Saturn and its rings",
			author: "NASA"		
		}
		{	
			src : "images/img_9.jpg",
			title : "Dione", 
			description : "Saturn IV moon founded in 1684 by Cassini",
			author: "NASA"		
		}, 
		{	
			src : "images/img_12.jpg",
			title : "Titan", 
			description : "Saturn VI moon founded in 1655 by Huygens",
			author: "NASA"
		}
		{	
			src : "images/img_16.jpg",
			title : "Shephard Plants Flag", 
			description : "Moonwalk pic from JSC Center. EVAs",
			author: "NASA"
		}, 
		{	
			src : "images/img_17.jpg",
			title : "With bean samples", 
			description : "Moonwalk pic from JSC Center. EVAs",
			author: "NASA"
		}, 
		{	
			src : "images/img_18.jpg",
			title : "Scott gives salute", 
			description : "Moonwalk pic from JSC Center. EVAs",
			author: "NASA"
		}   
    ]};

	//Step 6: Create a click function for #albums-tab from the HTML
	$("#albums-tab").click(function(){
		// use the helper function to display albums_template compiled code and data from gallery object
		showTemplate(albums_template, gallery);
		// remove .active class from all other nav-tabs
		$(".nav-tabs .active").removeClass("active");
		// add .active class to the #albums-tab
		$("#albums-tab").addClass("active");
		// create a callback click function for the album thumbnail
		$(".album-thumbnail").click(function(){
			// grab data index and assign it to a variable
			var index = $(this).data("id");
			// assign data from gallery object to the variable "current_album"
			// index is used as a parameter, evaluates to 0
			current_album = gallery.albums[index];
			// use helper function to display photos_template and data now assigned to current_album
			showTemplate(photos_template, current_album);
			// create same click function for the photo thumbnail
			// assign data to a variable and use helper function to display it
			$(".photo-thumbnail").click(function(){
				var index = $(this).data("id");
				// set the current photo to selected (this) photo
				current_photo = current_album.photos[index];
				//  display the single photo_template using helper function
				showTemplate(photo_template, current_photo);
			});
		});
	});
	// Repeat steps 6 and substeps for all other tabs
	$("#photos-tab").click(function () {

		showTemplate(photos_template, current_album);

		$(".nav-tabs .active").removeClass("active");
		
		$("#photos-tab").addClass("active");

		$(".photo-thumbnail").click(function (){
			var index = $(this).data("id");
			current_photo = current_album.photos[index];
			showTemplate(photo_template, current_photo);
		});
	});

	// Use helper function to display slideshow_template and current_album data
	// remove classes from all other tabs except #slideshow-tab when clicked

	$("#slideshow-tab").click(function () {

		showTemplate(slideshow_template, current_album);
		
		$(".nav-tabs .active").removeClass("active");

		$("#slideshow-tab").addClass("active");
	});

	// start the page by showing the albums view upon click
	$("#albums-tab").click();

	// Modal function 
	 function displayModal(event){
        var imageNumber = $(this).data("id");
        // get the image out of the array using the image
        // number and render it using the modal template
        var html    = modal_template(data.images[imageNumber]);
        // put the modal template in the DOM
        $('#modal-container').html(html);
        // show the modal
        $("#imageModal").modal('show');
    }
    // display the modal when you click on a thumbnail
    $('.thumbnail').click(displayModal);

    // Search function
    $('#searchbox').keypress(function (e) {
      // the return key has an id of 13, if it's pressed...
      if (e.which == 13) {
        // get the search text which is the contents of the search box
        var search_text = $('#searchbox').val();
        // print the search box (for debugging)
        console.log(search_text)
        // create a new array of data with only the data that contains the search string
        var filteredData = {
          images: data.images.filter(function(d){
            // return true if the title contains the search text
            if (d.title.search(search_text) > -1){
              return true;
            }
            // return true if the author contains the search text
            if (d.author.search(search_text) > -1){
              return true;
            }
            // if we reach here it means we haven't found a match so return false
            return false;
          })
        };
        
        // pass the newly filtered data into
        // the template to generate new html
        var html    = template(filteredData);
        $('#content').html(html);

        // display the modal when you click on a thumbnail
        $('.thumbnail').click(displayModal);
      }
});