import {} from 'jasmine';
import * as ng from "angular";
import 'angular-mocks';

import { GeolocationService } from '../src/services/GeolocationService';

describe('GelocationService', () => {

    let service: GeolocationService;
	let http: ng.IHttpService;
	let RESPONSE_SUCCESS = {};

    beforeEach(ng.mock.module('ForecastrApp'));

    beforeEach(inject((ForecastService: GeolocationService, $http: ng.IHttpService) => {
        service = ForecastService;
        http = $http;
    }));

    it('should exist', () => {
		expect(service).not.toBeNull();
	});
});
