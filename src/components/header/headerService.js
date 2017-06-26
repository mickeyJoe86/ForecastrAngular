angular.module('components.headerService', [])
    .service('HeaderService', ['$http', '$q', function ($http, $q) {
        this.getCoordinates = function(searchTerm) {
            var deferred = $q.defer();
            $http({
                url: '/api/geolocate',
                method: 'POST',
				data: { searchTerm: searchTerm}
            }).then(function(data){
                deferred.resolve(data);
            });
            return deferred.promise;
        }
    }]);
