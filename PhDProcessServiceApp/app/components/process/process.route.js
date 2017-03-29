(function (angular) {
	"use strict";

	angular
		.module("app.process")
		.config(configRoute);

	configRoute.$inject = ["$locationProvider", "$stateProvider"];
	function configRoute($locationProvider, $stateProvider) {
		$stateProvider
			.state("process-list", {
				url: "/process-list",
				views: {
					headerView: {
						templateUrl: "app/components/core/core-header.html",
						controller: "CoreHeaderController",
						controllerAs: "chc"
					},
					mainView: {
						templateUrl: "app/components/process/process-list.html",
						controller: "ProcessListController",
						controllerAs: "plc"
					}
				}
			});
	}
} (angular));
