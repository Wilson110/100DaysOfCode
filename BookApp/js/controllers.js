angular.module('myApp')

	.controller('IndexController', ['$scope', function($scope){
		$scope.title = "Book Ends";
		$scope.promo = "Read, Review, and Share";
	}])

	.controller('MainController', ['$scope', '$stateParams', function($scope, $stateParams){
		$scope.products = [
			{
				id: 0,
				name: "The 4-Hour Body",
				price: 39,
				pubdate: new Date('2014', '12', '14'),
				cover: 'img/4-hour.jpg',
				likes: 0,
				dislikes: 0
			},
			{
				id: 1,
				name: "Scope & Closures",
				price: 11,
				pubdate: new Date('2008', '05', '01'),
				cover: 'img/know-js.jpg',
				likes: 0,
				dislikes: 0
			},
			{
				id: 2,
				name: "The Hard Things About Hard Things",
				price: 21,
				pubdate: new Date('2014', '03', '04'),
				cover: 'img/hard-things.jpg',
				likes: 0,
				dislikes: 0
			},
			{
				id: 3,
				name: "HTML and CSS",
				price: 19,
				pubdate: new Date('2011', '10', '25'),
				cover: 'img/html-and-css.jpg',
				likes: 0,
				dislikes: 0
			},
			{
				id: 4,
				name: "The Paleo Manifesto",
				price: 12,
				pubdate: new Date('2014', '05', '20'),
				cover: 'img/paleo.jpg',
				likes: 0,
				dislikes: 0
			},
			{
				id: 5,
				name: "Zero To One",
				price: 16,
				pubdate: new Date('2014', '09', '16'),
				cover: 'img/zero-to-one.jpg',
				likes: 0,
				dislikes: 0
			}
		];
		$scope.plusOne = function(index) {
			$scope.products[index].likes += 1;
		};
		$scope.minusOne = function(index) {
			$scope.products[index].dislikes += 1;
		};
		//$scope.book_id = $scope.products.id;
	}])

	.controller('ListController', ['$scope', function($scope){
		$scope.list = reviews;
	}])

	.controller('ReviewsController', ['$scope', function($scope){
		$scope.review = {};
		$scope.addReview = function(list) {
			list.push($scope.review);
			list.review = {};
			//$scope.reviewForm.$setPristine();
		};
	}])
;