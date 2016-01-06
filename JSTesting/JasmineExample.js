
//Jasmine Testing Example

describe('Controller:MenuController', function(){
	it("should create 'dishes' with 2 dishes fetched from xhr", function(){
		expect(scope.showMenu).toBeTruthy();
		expect(scope.dishes).toBeDefined();
		expect(scope.dishes.length).toBe(2);
	});
});