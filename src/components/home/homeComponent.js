angular.module('components.homeComponent', [])
    .controller('HomeComponentController', ['HomeService',function (HomeService) {
       var self = this;
        HomeService.getUser().then(function(res){
            self.currently = res.data.currently
            //console.log(res.data);
        });
    }]);
