describe('HeaderComponentController', () => {
	let $controller, HeaderComponentController, GelocationService, $location;

	beforeEach(angular.mock.module('ui.router'));
	beforeEach(angular.mock.module('components.headerComponent'));
	beforeEach(angular.mock.module('services.geolocation'));

	beforeEach(inject(function (_$controller_, _GelocationService_, _$location_) {
		$controller = _$controller_;
		GelocationService = _GelocationService_;
		$location = _$location_;

		HeaderComponentController = $controller('HeaderComponentController', { GelocationService: GelocationService, $location: $location });
	}));

	it('should exist', () => {
		expect(HeaderComponentController).toBeDefined();
	});

	describe('ctrl.name', () => {
		it('Should be named Forecastr', () => {
			expect(HeaderComponentController.name).toEqual('Forecastr');
		});
	});
	describe('ctrl.searchLocation()', () => {
		it('should be defined', () => {
			expect(HeaderComponentController.searchLocation).toBeDefined();
		});
	});
});
