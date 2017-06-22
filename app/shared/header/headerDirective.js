angular.module('shared.headerDirective', [])
    .directive('sharedHeader', function(){
        return {
            templateUrl: './shared/header/headerView.html'
        }
    });