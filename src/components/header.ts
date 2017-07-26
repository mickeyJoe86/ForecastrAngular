import { IGeolocationService, GeolocationService }  from '../services/GeolocationService';

const Header = {
	template: `
		<nav class="navbar navbar-inverse navbar-fixed-top">
			<div class="container">
				<div class="navbar-header">
					<a class="navbar-brand" href="#">{{ $ctrl.name }}</a>
				</div>
				<div id="navbar" class="navbar-collapse collapse">
					<form ng-submit="$ctrl.searchLocation()" class="navbar-form navbar-right">
						<div class="form-group">
							<input type="text" placeholder="Search your location" class="form-control" ng-model="$ctrl.searchTerm">
						</div>
						<button type="submit" class="btn btn-success">Search</button>
					</form>
				</div>
			</div>
		</nav>
	`,
	controller: class HeaderController {
		name: string;
		searchTerm: string;

		static $inject = ['GeolocationService'];
		constructor(private geolocationService: GeolocationService) { }

		$onInit() {
			this.name = "Forecastr";
		}

		public searchLocation () {
			this.geolocationService.getCoordinates(this.searchTerm).then((res) => {
				console.log(res);
			});
		}

	},
	controllerAs: "$ctrl"
};

export default Header;
