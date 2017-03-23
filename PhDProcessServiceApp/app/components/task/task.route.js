(function (angular) {
	"use strict";

	angular
		.module("app.task")
		.config(configRoute);

	configRoute.$inject = ["$locationProvider", "$stateProvider"];
	function configRoute($locationProvider, $stateProvider) {
		$locationProvider.hashPrefix("");
	}
} (angular));
