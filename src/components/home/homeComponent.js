angular.module('components.homeComponent', [])
	.component('homeComponent', {
		transclude: true,
		templateUrl: './dist/components/home/homeView.html',
		controller: ['HomeService', function (HomeService) {
			var ctrl = this;
			ctrl.name = "Mike"
			HomeService.getUser().then(function (res) {
				ctrl.currently = res.data.currently
				//console.log(res.data);
			});
		}]
	});
