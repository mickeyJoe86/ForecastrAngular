describe('Forecast service', () => {
	let ForecastService, $q, $httpBackend;
	let RESPONSE_SUCCESS = {};
	beforeEach(angular.mock.module('services.forecast'));

	beforeEach(inject((_ForecastService_, _$q_, _$httpBackend_) => {
		ForecastService = _ForecastService_;
		$q = _$q_;
		$httpBackend = _$httpBackend_;
	}));

	it('should exist', () => {
		expect(ForecastService).toBeDefined();
	});

	describe('getForecast()', () => {
		let result;
		let lat, lng;
		beforeEach(() => {
			result = {};
			spyOn(ForecastService, 'getForecast').and.callThrough();
		});
		it('should be defined', () => {
			expect(ForecastService.getForecast).toBeDefined();
		});
	});
});
