
// Angular ngMock Directive Example

// load the controllers module

beforeEach(module('confusionApp'));
var MenuController, scope, $httpBackend;

// initialize the controller and a mock scope

beforeEach(inject(function($controller, _$httpBackend_, $rootScope, menuFactory) {
	
	// mocked dependencis
	
	$httpBackend = _$httpBackend_;
	$httpBackend.expectGET("http://localhost:3000/dishes"), respond([...]);
	scope = $rootScope.$new();
	MenuController = $controller('MenuController', {
		$scope: scope, menuFactory: menuFactory }
	);
	$httpBackend.flush();
	
}));