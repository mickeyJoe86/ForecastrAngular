angular.module('services.geolocation', [])
    .service('GelocationService', ['$http', function ($http) {
        var GelocationService = {};
		var API = '/api/geolocate/';
		GelocationService.getCoordinates = function(searchTerm) {
			return $http({
                url: API,
                method: 'POST',
				data: { searchTerm: searchTerm }
            }).then(function(res){
                return res.data;
            });
        };

		return GelocationService;
    }]);
