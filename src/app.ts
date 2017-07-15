import * as angular from 'angular';
import { ForecastService } from './services/ForecastService';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/Footer';

let module = angular.module("ForecastrApp", [])
	.service('ForecastService', ForecastService)
	.component('header', Header)
	.component('main', Main)
	.component('footer', Footer);

export default module;

angular.element(document).ready(function () {
	angular.bootstrap(document, ["ForecastrApp"]);
});
