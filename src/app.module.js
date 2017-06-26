angular.module('app', ['ui.router', 'ui.bootstrap', 'shared.module', 'components.module'])
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		var helloState = {
			name: 'home',
			url: '/:lat/:long',
			template: '<home-component></home-component>'
		}
		$stateProvider.state(helloState);
		$urlRouterProvider.otherwise('/38.9071923/-77.0368707');
	}]);
