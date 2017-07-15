export class ForecastService {

	static $inject = ['$http'];
	constructor(private $http: ng.IHttpService) { }

	public getForecast(lat: number, lng: number) {
		return this.$http({
			url: '/api/forecast',
			method: 'POST',
			data: { lat: lat, lng: lng }
		}).then(function (data) {
			return data;
		});
	}
};
