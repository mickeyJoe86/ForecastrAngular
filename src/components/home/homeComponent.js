angular.module('components.homeComponent', [])
	.component('homeComponent', {
		transclude: true,
		templateUrl: './dist/components/home/homeView.html',
		controller: ['ForecastService', '$stateParams', function (ForecastService, $stateParams) {
			var ctrl = this;

			ForecastService.getForecast($stateParams.lat, $stateParams.long).then(function (res) {
				ctrl.currently = res.data.currently;
			});
		}]
	});
