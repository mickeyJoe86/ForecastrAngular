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
	controller: class HeaderController {
		name: string;
		model: {};

		static $inject = ['ForecastService'];
		constructor(private forecastService: ForecastService) {}

		$onInit() {
			this.forecastService.getForecast(38.328732, -85.764771).then((res) => {
				this.model = res.data;
			});

		}

	},
	controllerAs: "$ctrl"
};

export default Main;
