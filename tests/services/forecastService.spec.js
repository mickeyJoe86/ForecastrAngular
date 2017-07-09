describe('Forecast service', () => {
	var ForecastService, $q, $httpBackend;
	var RESPONSE_SUCCESS = {};
	beforeEach(angular.mock.module('services.forecast'));

	beforeEach(inject(function(_ForecastService_, _$q_, _$httpBackend_) {
		ForecastService = _ForecastService_;
		$q = _$q_;
		$httpBackend = _$httpBackend_;
	}));

	it('should exist', function() {
		expect(ForecastService).toBeDefined();
	});

	describe('getForecast()', function() {
		var result;
		var lat, lng;
		beforeEach(function() {
			result = {};
			spyOn(ForecastService, 'getForecast').and.callThrough();
		});
		it('should be defined', function() {
			expect(ForecastService.getForecast).toBeDefined();
		});
	});
});
