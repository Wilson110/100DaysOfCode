$(document).ready(function(){
	var princeWisdom = [
		{
			quote: "Everyone has their own experience. That's why we are here, to go through our experience, to learn, to go down those paths and eventually you may have gone down so many paths and learned so much that you don't have to come back again.",
			source: "The Guardian, 2011"
		},
		{
			quote: "There are no accidents. And if there are, it's up to us to look at them as something else. And that bravery is what creates new flowers.",
			source: "Details Magazine, 1991"
		},
		{
			quote: "Cool means being able to hang with yourself. All you have to ask yourself is 'Is there anybody I’m afraid of? Is there anybody who if I walked into a room and saw, I’d get nervous?' If not, then you're cool.",
			source: "Rolling Stone, 1990"
		},
		{
			quote: "I'm very sincere in my beliefs. I pray every night, and I don't ask for much. I just say 'thank you'.",
			source: "VH1, 1988"
		},
		{
			quote: "As human beings we suffer from an innate tendancy to jump to conclusions; to judge people too quickly and to pronounce them failures or heroes without due consideration of the actual facts and ideals of the period.",
			source: "Unsourced"
		},
		{
			quote: "There is something that happens when you get emancipated. You approach life differently. You eat differently. You respect yourself more. You respect the gift you have been given.",
			source: "Chris Rock Show, 1997"
		},
		{
			quote: "All seven and we'll watch them fall, They stand in the way of love, and we will smoke them all, with our intellect and a savior-faire, no one in the whole universe will ever compare.",
			source: "'7' lyrics, Symbol album"
		},
		{
			quote: "I have written a song that says: If you ever lose someone dear to you, never say the words, 'They're gone,' and they'll come back.",
			source: "Interview Magazine, 2014"
		},
		{
			quote: "Spirits come and spirits go. Some stick around for the aftershow. Don't have to say I miss you, Cause I think you already know",
			source: "'Comeback' lyrics, The Truth album"
		},
		{
			quote: "I am transformed.",
			source: "April 19, 2016, Twitter"
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