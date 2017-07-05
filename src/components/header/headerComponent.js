angular.module('components.headerComponent', [])
	.controller('HeaderComponentController', ['GelocationService', '$location', function (GelocationService, $location) {
		var ctrl = this;
		ctrl.name = "Forecastr";
		ctrl.searchLocation = function () {
			GelocationService.getCoordinates(ctrl.searchTerm).then(function (res) {
				var latLong = res.results[0].geometry.location;
				$location.url(latLong.lat + '/' + latLong.lng);
			});
		}
	}])
	.component('headernavComponent', {
		templateUrl: './dist/components/header/headerView.html',
		controller: 'HeaderComponentController'
	});
