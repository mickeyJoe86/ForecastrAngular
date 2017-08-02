export const Config = ['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', (
	$stateProvider: angular.ui.IStateProvider,
	$urlRouterProvider: angular.ui.IUrlRouterProvider,
	$mdThemingProvider: any) => {

	let helloState = {
		name: 'home',
		url: '/:lat/:long',
		component: 'main'
	}

	$stateProvider.state(helloState);
	$urlRouterProvider.otherwise('/38.9071923/-77.0368707');	

	$mdThemingProvider.theme('default').primaryPalette('blue');
	
	var whiteMap = $mdThemingProvider.extendPalette('grey', { '500': '#ffffff', 'contrastDefaultColor': 'dark' });
	var blackMap = $mdThemingProvider.extendPalette('grey', { '500': '#aaaaaa', 'contrastDefaultColor': 'dark' });
	
	$mdThemingProvider.definePalette('white', whiteMap);
	$mdThemingProvider.definePalette('black', blackMap);
}];
