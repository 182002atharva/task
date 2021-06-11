
var app = angular.module('demo2');
	
	app.config(['$routeProvider',
		function config($routeProvider) {
			$routeProvider.
			when('/:data', {
				template: '<navigator></navigator>'
			});
		}]);
