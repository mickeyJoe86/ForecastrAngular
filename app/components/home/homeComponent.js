angular.module('components.homeComponent', [])
    .controller('HomeComponentController', function (HomeService) {
        this.userName = HomeService.name;
    });