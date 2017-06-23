angular.module('components.homeComponent', [])
    .controller('HomeComponentController', function (HomeService) {
        this.userName = "Mike";
        HomeService.getUser().then(function(res){
            this.userName = res.data.name;
        });
    });