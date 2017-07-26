import * as angular from 'angular';
import 'angular-ui-router';

import { ForecastService } from './services/ForecastService';
import { GeolocationService } from './services/GeolocationService';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

angular.module('ForecastrApp', ['ui.router'])
	.service('GeolocationService', GeolocationService)
	.service('ForecastService', ForecastService)
	.component('header', Header)
	.component('main', Main)
	.component('footer', Footer);

angular.element(document).ready(function () {
	angular.bootstrap(document, ['ForecastrApp']);
});
