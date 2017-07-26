export const Config = ['$stateProvider', '$urlRouterProvider', (
	$stateProvider: angular.ui.IStateProvider,
	$urlRouterProvider: angular.ui.IUrlRouterProvider) => {

	let helloState = {
		name: 'home',
		url: '/home',
		component: 'Main'
	}

	$stateProvider.state(helloState);
	$urlRouterProvider.otherwise('/foo');
}];
