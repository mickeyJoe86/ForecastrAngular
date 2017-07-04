describe('Geolocation service', () => {
	let GelocationService, $q, $httpBackend;
	let RESPONSE_SUCCESS = {};
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

		beforeEach(() => {
			result = {};
			spyOn(GelocationService, 'getCoordinates').and.callThrough();
		});
		it('should be defined', () => {
			expect(GelocationService.getCoordinates).toBeDefined();
		});
	});
});
