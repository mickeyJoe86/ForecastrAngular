describe('Home service', () => {
	let HomeService, $q, $httpBackend;
	let RESPONSE_SUCCESS = {};
	beforeEach(angular.mock.module('components.homeService'));

	beforeEach(inject((_HomeService_, _$q_, _$httpBackend_) => {
		HomeService = _HomeService_;
		$q = _$q_;
		$httpBackend = _$httpBackend_;
	}));

	it('should exist', () => {
		expect(HomeService).toBeDefined();
	});

	describe('getForecast()', () => {
		let result;
		let lat, lng;
		beforeEach(() => {
			result = {};
			spyOn(HomeService, 'getForecast').and.callThrough();
		});
		it('should be defined', () => {
			expect(HomeService.getForecast).toBeDefined();
		});
	});
});
