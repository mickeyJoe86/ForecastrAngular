import * as angular from 'angular';
import 'angular-ui-router';
import 'angular-material';

import { ForecastService } from './services/ForecastService';
import { GeolocationService } from './services/GeolocationService';
import { Config } from './Config';

import App from './App';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


angular.module('ForecastrApp', ['ui.router', 'ngMaterial'])
	.service('GeolocationService', GeolocationService)
	.service('ForecastService', ForecastService)
	.component('app', App)
	.component('header', Header)
	.component('main', Main)
	.component('footer', Footer)
	.config(Config);

angular.element(document).ready(function () {
	angular.bootstrap(document, ['ForecastrApp']);
});
