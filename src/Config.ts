export const Config = ['$stateProvider', '$urlRouterProvider', (
	$stateProvider: angular.ui.IStateProvider,
	$urlRouterProvider: angular.ui.IUrlRouterProvider) => {

	let helloState = {
		name: 'home',
		url: '/:lat/:long',
		component: 'main'
	}

	$stateProvider.state(helloState);
	$urlRouterProvider.otherwise('/38.9071923/-77.0368707');
}];
