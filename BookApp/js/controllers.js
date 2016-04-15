app.controller('MainController', ['$scope', function($scope){
	$scope.title = "Book Ends";
	$scope.promo = "Read, Review, and Share";
	$scope.product = {
		name: "The 4-Hour Body",
		price: 39,
		pubdate: new Date(),
		cover: 'img/4-hour.jpg'
	},
	{
		name: "JavaScript the Good Parts",
		price: 14,
		pubdate: new Date(),
		cover: 'img/js-the-good.jpg'
	},
	{
		name: "The Hard Things About Hard Things",
		price: 21,
		pubdate: new Date()
		cover: 'img/hard-things.jpg'
	},
	{
		name: "HTML and CSS",
		price: 19,
		pubdate: new Date(),
		cover: 'img/html-and-css.jpg'
	},
	{
		name: "The Paleo Manifesto",
		price: 12,
		pubdate: new Date(),
		cover: 'img/paleo.jpg'
	},
	{
		name: "Zero To One",
		price: 16,
		pubdate: new Date(),
		cover: 'img/zero-to-one.jpg'
	}
}])