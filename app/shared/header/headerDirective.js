angular.module('shared.headerDirective', [])
    .directive('sharedHeader', function(){
        return {
            templateUrl: './app/shared/header/headerView.html'
        }
    });