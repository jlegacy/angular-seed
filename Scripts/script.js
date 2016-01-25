	(function () {
		
	var $App = function () {};

	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute','kubernetesUI']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : '/components/home/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : '/components/about/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : '/components/contacts/contact.html',
				controller  : 'contactController'
			})
			
			// route for the contact page
			.when('/graph', {
				templateUrl : '/components/graph/graph.html',
				controller  : 'graphController'
			});
	});
	
	$App.getApp = function() 
	{
		return scotchApp;
	}
	
	window.$App = $App;
	return (this);
}());
