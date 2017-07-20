export class GeolocationService {

	static $inject = ['$http'];
	API: string = '/api/geolocate/';

	constructor(private $http: ng.IHttpService) { }

	public getCoordinates(searchTerm: string) {
		return this.$http({
			url: this.API,
			method: 'POST',
			data: { searchTerm: searchTerm }
		}).then(function (res) {
			return res.data;
		});
	}
}
