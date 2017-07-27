import { ForecastService } from '../services/ForecastService';

const Main = {
	template: `
		<div>
			<div id="currently">
				<h2>Currently</h2>
				<hr />
				<p>Temperature: {{ $ctrl.model.currently.apparentTemperature }}&deg</p>
				<p>Precip: {{ $ctrl.model.currently.precipProbability }}&#37</p>
				<p>Description: {{ $ctrl.model.currently.summary }}</p>
			</div>
		</div>
	`,
	controller: class MainController {
		name: string;
		model: {};

		static $inject = ['ForecastService', '$stateParams'];
		constructor(private forecastService: ForecastService, private $stateParams: ng.ui.IStateParamsService) {}

		$onInit() {
			this.forecastService.getForecast(this.$stateParams.lat, this.$stateParams.long).then((res) => {
				this.model = res.data;
			});
		}

	},
	controllerAs: "$ctrl"
};

export default Main;
