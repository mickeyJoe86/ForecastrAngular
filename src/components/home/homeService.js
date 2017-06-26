angular.module('components.homeService', [])
    .service('HomeService', ['$http', '$q', function ($http, $q) {
        this.getForecast = function(lat, lng) {
            var deferred = $q.defer();
            $http({
                url: '/api/forecast',
                method: 'POST',
				data: { lat: lat, lng: lng }
            }).then(function(data){
                deferred.resolve(data);
            });
            return deferred.promise;
        }
    }]);
