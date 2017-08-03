import { GeolocationService } from '../services/GeolocationService';

const Header = {
	template: `
		<md-toolbar ng-show="!$header.showSearch" class="md-whiteframe-1dp">
			<div class="md-toolbar-tools">
				<h2 md-truncate flex>Forecastr</h2>
				<md-button ng-click="$header.showSearch = !$header.showSearch" md-colors="::{color: 'white'}">
					<md-icon>search</md-icon>
				</md-button>
			</div>
		</md-toolbar>
		<md-toolbar md-colors="::{background: 'white'}" ng-show="$header.showSearch" id="module-header-search" class="md-whiteframe-1dp">
			<form ng-submit="$header.searchLocation()">
				<div class="md-toolbar-tools">
					<md-button ng-click="$header.showSearch = !$header.showSearch">
						<md-icon md-colors="::{color: 'black'}">arrow_back</md-icon>
					</md-button>
					<md-input-container flex class="input-container">
						<label>&nbsp;</label>
						<input placeholder="Search city, zip, or place" ng-model="$header.searchTerm" autocomplete="off">
					</md-input-container>
					<md-button class="md-raised md-primary" type="submit">Search</md-button>
				</div>
			</form>
		</md-toolbar>
	`,
	controller: class HeaderController {
		name: string;
		searchTerm: string;
		showSearch: boolean;

		static $inject = ['GeolocationService', '$location'];
		constructor(private geolocationService: GeolocationService, private $location: ng.ILocationService) { }

		$onInit() {
			this.name = "Forecastr";
		}

		public searchLocation() {
			this.geolocationService.getCoordinates(this.searchTerm).then((res: any) => {
				let latLong = res.results[0].geometry.location;
				this.$location.url(`${latLong.lat}/${latLong.lng}`);
				this.searchTerm = '';
				this.showSearch = false;
			});
		}

	},
	controllerAs: "$header"
};

export default Header;
