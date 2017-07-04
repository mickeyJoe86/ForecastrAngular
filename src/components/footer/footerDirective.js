angular.module('components.footerDirective', [])
    .directive('sharedFooter', [function(){
        return {
            templateUrl: './dist/components/footer/footerView.html'
        }
    }]);
