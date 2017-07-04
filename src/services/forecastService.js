angular.module('services.forecast', [])
	.service('ForecastService', ['$http', function ($http) {
		var ForecastService = {};

		ForecastService.getForecast = function (lat, lng) {
			return $http({
				url: '/api/forecast',
				method: 'POST',
				data: { lat: lat, lng: lng }
			}).then(function (data) {
				return data;
			});
		};

		return ForecastService;
	}]);
