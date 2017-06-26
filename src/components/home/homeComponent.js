angular.module('components.homeComponent', [])
	.component('homeComponent', {
		transclude: true,
		templateUrl: './dist/components/home/homeView.html',
		controller: ['HomeService', '$stateParams', function (HomeService, $stateParams) {
			var ctrl = this;

			HomeService.getForecast($stateParams.lat, $stateParams.long).then(function (res) {
				ctrl.currently = res.data.currently;
			});
		}]
	});
