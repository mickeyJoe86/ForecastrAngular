angular.module('components.headerComponent', [])
    .component('headernavComponent', {
		templateUrl: './dist/components/header/headerView.html',
		controller: function () {
			var ctrl = this;
			ctrl.name = "Forecastr";
			ctrl.searchLocation = function () {
				alert(ctrl.searchTerm)
			}
		}
	});


