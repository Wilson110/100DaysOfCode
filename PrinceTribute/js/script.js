$(document).ready(function(){
	var princeWisdom = [
		{
			quote: "",
			source: ""
		},
		{
			quote: "",
			source: ""
		},
		{
			quote: "",
			source: ""
		},
		{
			quote: "",
			source: ""
		},
		{
			quote: "",
			source: ""
		},
		{
			quote: "",
			source: ""
		},
		{
			quote: "",
			source: ""
		},
		{
			quote: "Spirits come and spirits go. Some don't wait until after the show. Don't have to say I miss you, I think you know",
			source: ""
		},
		{
			quote: "",
			source: ""
		}
	];
	/* When button with id 'quoteButton' is clicked, function event is 
	triggered. Two variables are assigned to the containers where the text
	from the princeWisdom array will go in the HTML file */
	$('#quoteButton').click(function(event){
		var quote = $('#quoteContainer p').text();
		var princeQuote = $('princeQuote').text();

		// prevents the browser's default action
		event.preventDefault();
		
		/* assign variable the length of the princeWisdom object array
		generate a random number within the length of the object array,
		this keeps the number generated less than the length of the array
		by default*/		
		var wisdomLength = princeWisdom.length;
		var randomNumber = Math.floor(Math.random() * wisdomLength);

		// create a counter to generate a new quote from the princeWisdom
		for(i=0;i<=wisdomLength;i++){
			var newQuoteText = princeWisdom[randomNumber].quote;
			var newPrinceQuote = princeWisdom[randomNumber].source;

			// test
			//console.log(newQuoteText, newPrinceQuote);
			var timeAnimation = 400;
			var quoteContainer = $('#quoteContainer');

			// fadeout animation
			quoteContainer.fadeOut(timeAnimation, function(){
				quoteContainer.html('');
				quoteContainer.append('<p>'+ newQuoteText + '</p>' + '<p id="princeQuote">' + '~ ' + newPrinceQuote + '</p>');
			
			// fadein animation
			quoteContainer.fadeIn(timeAnimation);
			});

			break;
		};
	}); // end of click function
});