angular.module('shared.footerDirective', [])
    .directive('sharedFooter', function(){
        return {
            templateUrl: './app/shared/footer/footerView.html'
        }
    });