angular.module('components.homeService', [])
	.service('HomeService', ['$http', function ($http) {
		var HomeService = {};

		HomeService.getForecast = function (lat, lng) {
			return $http({
				url: '/api/forecast',
				method: 'POST',
				data: { lat: lat, lng: lng }
			}).then(function (data) {
				return data;
			});
		};

		return HomeService;
	}]);
