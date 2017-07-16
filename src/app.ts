import * as angular from 'angular';
import { ForecastService } from './services/ForecastService';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

angular.module("ForecastrApp", [])
	.service('ForecastService', ForecastService)
	.component('header', Header)
	.component('main', Main)
	.component('footer', Footer);

angular.element(document).ready(function () {
	angular.bootstrap(document, ["ForecastrApp"]);
});
