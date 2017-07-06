describe('HeaderComponentController', function() {
	var $controller, HeaderComponentController, GelocationService, $location;

	beforeEach(angular.mock.module('ui.router'));
	beforeEach(angular.mock.module('components.headerComponent'));
	beforeEach(angular.mock.module('services.geolocation'));

	beforeEach(inject(function (_$controller_, _GelocationService_, _$location_) {
		$controller = _$controller_;
		GelocationService = _GelocationService_;
		$location = _$location_;

		HeaderComponentController = $controller('HeaderComponentController', { GelocationService: GelocationService, $location: $location });
	}));

	it('should exist', function() {
		expect(HeaderComponentController).toBeDefined();
	});

	describe('ctrl.name', function() {
		it('Should be named Forecastr', function() {
			expect(HeaderComponentController.name).toEqual('Forecastr');
		});
	});
	describe('ctrl.searchLocation()', function() {
		it('should be defined', function() {
			expect(HeaderComponentController.searchLocation).toBeDefined();
		});
	});
});
