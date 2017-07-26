export interface IGeolocationService {
	getCoordinates(searchTerm: string): ng.IPromise<{}>;
}

export class GeolocationService implements IGeolocationService {

	static $inject = ['$http'];
	constructor(private $http: ng.IHttpService) { }

	public getCoordinates(searchTerm: string) {
		return this.$http({
			url: '/api/geolocate/',
			method: 'POST',
			data: { searchTerm: searchTerm }
		}).then(function (res) {
			return res.data;
		});
	}
}
