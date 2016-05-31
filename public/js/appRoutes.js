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
			templateUrl: 'views/signin.html',
			controller: 'SignUpController'
		})

		// About Page
		.when('/about', {
			templateUrl: 'views/aboutPage.html',
			controller: 'SignUpController'
		})

		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'SignUpController'
		})

		// Alerts Page
		.when('/alerts', {
			templateUrl: 'views/alerts.html',
			controller: 'AlertsController'
		})
        // Other pages


        // Redirect all others to 404
		.otherwise('/404');

	$locationProvider.html5Mode(true);

}]);
