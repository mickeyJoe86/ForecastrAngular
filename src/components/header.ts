import { GeolocationService } from '../services/GeolocationService';

const Header = {
	template: `
		<div layout="column" layout-fill>
			<md-toolbar>
				<div class="md-toolbar-tools">
					<h2 md-truncate flex>Forecastr</h2>
				</div>
				<md-content>
					<div id="main-containter">
						<ui-view></ui-view>
					</div>
				</md-content>
			</md-toolbar>
		</div>
	`,
	controller: class HeaderController {
		name: string;
		searchTerm: string;

		static $inject = ['GeolocationService', '$location'];
		constructor(private geolocationService: GeolocationService, private $location: ng.ILocationService) { }

		$onInit() {
			this.name = "Forecastr";
		}

		public searchLocation() {
			this.geolocationService.getCoordinates(this.searchTerm).then((res: any) => {
				let latLong = res.results[0].geometry.location;
				this.$location.url(`${latLong.lat}/${latLong.lng}`);
			});
		}

	},
	controllerAs: "$ctrl"
};

export default Header;
