describe('Geolocation service', () => {
	let GelocationService, $q, $httpBackend;
	let API = '/api/geolocate/';
	let RESPONSE_SUCCESS = {
		results: [
			{
				formatted_address: "Louisville, KY, USA",
				geometry: {
					location: {
						lat: 38.2526647,
						lng: -85.7584557
					}
				}
			}
		]
	};
	beforeEach(angular.mock.module('services.geolocation'));
	beforeEach(inject((_GelocationService_, _$q_, _$httpBackend_) => {
		GelocationService = _GelocationService_;
		$q = _$q_;
		$httpBackend = _$httpBackend_;
	}));
	it('should exist', () => {
		expect(GelocationService).toBeDefined();
	});
	describe('getCoordinates()', () => {
		let result;

		beforeEach(() => {
			result = {};
			spyOn(GelocationService, 'getCoordinates').and.callThrough();
		});
		it('should be defined', () => {
			expect(GelocationService.getCoordinates).toBeDefined();
		});
		it('should return a location when called with a search term', () => {
			let searchTerm = "Louisville, KY";
			$httpBackend.whenPOST(API, { searchTerm: searchTerm }).respond(200, $q.when(RESPONSE_SUCCESS));

			expect(GelocationService.getCoordinates).not.toHaveBeenCalled();
			expect(result).toEqual({});

			GelocationService.getCoordinates(searchTerm)
				.then((res) => {
					result = res;
				});
			$httpBackend.flush();
			expect(result.results[0]).toBeDefined();
			expect(result.results[0].formatted_address).toEqual("Louisville, KY, USA");
			expect(typeof result.results[0].geometry.location.lat).toEqual('number')
			expect(typeof result.results[0].geometry.location.lng).toEqual('number')
		});
	});
});
