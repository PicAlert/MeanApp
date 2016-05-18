angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'HomeController'
		})

        // 404 page
		.when('/404', {
			templateUrl: 'views/404.html',
			controller: '404Controller'
		})

        // Login page
		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'LoginController'
		})

		// Devices page
		.when('/devices', {
			templateUrl: 'views/devices.html',
			controller: 'DevicesController'
		})
		
		// Sign Up page
		.when('/signup', {
			templateUrl: 'views/signup.html',
			controller: 'SignUpController'
		})

        // Other pages


        // Redirect all others to 404
		.otherwise('/404');

	$locationProvider.html5Mode(true);

}]);
