	// create the controller and inject Angular's $scope
	
	var scotchApp = $App.getApp();
	scotchApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
		$scope.message2 = 'this is cool stuff!';
	});