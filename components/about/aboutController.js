	// create the controller and inject Angular's $scope
	
	var scotchApp = $App.getApp();
	scotchApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});
