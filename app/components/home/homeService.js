angular.module('components.homeService', [])
    .service('HomeService', function ($http, $q) {
        this.getUser = function() {
            var deferred = $q.defer();
            $http({
                url: '/api/forecast',
                method: 'GET'
            }).then(function(data){
                deferred.resolve(data);
            });
            return deferred.promise;
        }
    });