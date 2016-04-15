app.controller('MainController', ['$scope', function($scope){
	$scope.title = "Book Ends";
	$scope.promo = "Read, Review, and Share";
	$scope.products = [
		{
			name: "The 4-Hour Body",
			price: 39,
			pubdate: new Date('2014', '12', '14'),
			cover: 'img/4-hour.jpg'
		},
		{
			name: "Scope & Closures",
			price: 11,
			pubdate: new Date('2008', '05', '01'),
			cover: 'img/know-js.jpg'
		},
		{
			name: "The Hard Things About Hard Things",
			price: 21,
			pubdate: new Date('2014', '03', '04'),
			cover: 'img/hard-things.jpg'
		},
		{
			name: "HTML and CSS",
			price: 19,
			pubdate: new Date('2011', '10', '25'),
			cover: 'img/html-and-css.jpg'
		},
		{
			name: "The Paleo Manifesto",
			price: 12,
			pubdate: new Date('2014', '05', '20'),
			cover: 'img/paleo.jpg'
		},
		{
			name: "Zero To One",
			price: 16,
			pubdate: new Date('2014', '09', '16'),
			cover: 'img/zero-to-one.jpg'
		}
	];
}])