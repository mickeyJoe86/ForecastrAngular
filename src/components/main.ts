import { ForecastService } from '../services/ForecastService';

const Main = {
	template: `
		<tabs forecastdata="$ctrl.model"></tabs>		
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
