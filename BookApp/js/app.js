angular.module('myApp', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider

		.state('app', {
			url:'/',
			views: {
				'header': {
					templateUrl: 'views/header.html',
					controller: 'IndexController'
				},
				'content': {
					templateUrl: 'views/main.html',
					controller: 'MainController'
				},
				'footer': {
					templateUrl: 'views/footer.html',
				}
			}
		})
		.state('app.bookdetails', {
			url: '/:id',
			views: {
				'content@': {
					templateUrl: 'views/book.html',
					controller: 'MainController'
				}
			}
		});
	$urlRouterProvider.otherwise('/');
}]);

