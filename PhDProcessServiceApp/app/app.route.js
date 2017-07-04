(function (angular) {
	"use strict";

	angular
		.module("app")
		.config(configRoute);

	configRoute.$inject = ["$locationProvider", "$stateProvider", "$urlRouterProvider"];
	function configRoute($locationProvider, $stateProvider, $urlRouterProvider) {
		$locationProvider.hashPrefix("");
		$urlRouterProvider.otherwise("/login");
	}
} (angular));