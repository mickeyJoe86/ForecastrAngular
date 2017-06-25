angular.module('app', ['ui.router', 'ui.bootstrap', 'shared.module', 'components.module'])
	.config(['$stateProvider', function ($stateProvider) {
		var helloState = {
			name: 'home',
			url: '/',
			template: '<home-component></home-component>'
		}
		$stateProvider.state(helloState);
	}]);
