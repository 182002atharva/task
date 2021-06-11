var app = angular.module('demo2');
	app.component('navigator', {
		template: 'TBD: menu no. {{$ctrl.qwerty}}',
		controller: ['$routeParams', 
		function navigatorController($routeParams) {
			this.qwerty = $routeParams.data;
		}
		]
	});