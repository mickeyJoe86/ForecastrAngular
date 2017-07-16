import {} from 'jasmine';
import * as ng from "angular";
import "angular-mocks";

import { ForecastService } from "../src/services/ForecastService";

describe("ForecastService", () => {

    let service: ForecastService;
    let $rootScope: ng.IRootScopeService;

    beforeEach(ng.mock.module("ForecastrApp"));

    beforeEach(inject((_service_, _$rootScope_) => {
        service = _service_;
        $rootScope = _$rootScope_;
    }));

    it("should get message", () => {
		expect(1+2).toEqual(3);
	});
});
