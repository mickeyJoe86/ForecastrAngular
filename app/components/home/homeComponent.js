angular.module('components.homeComponent', [])
    .controller('HomeComponentController', function (HomeService) {
        var self = this;
        HomeService.getUser().then(function(res){
            self.userName = res.data.name;
        });
    });