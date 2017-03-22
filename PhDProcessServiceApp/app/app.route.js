(function (angular) {
	"use strict";

	configRoute.$inject = ["$locationProvider", "$stateProvider", "$urlRouterProvider"];
	function configRoute($locationProvider, $stateProvider, $urlRouterProvider) {
		$locationProvider.hashPrefix("");
		$urlRouterProvider.otherwise("/login");
	}
} (angular));