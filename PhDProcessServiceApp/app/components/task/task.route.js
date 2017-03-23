(function (angular) {
	"use strict";

	angular
		.module("app.task")
		.config(configRoute);

	configRoute.$inject = ["$locationProvider", "$stateProvider"];
	function configRoute($locationProvider, $stateProvider) {
		$locationProvider.hashPrefix("");
		$stateProvider
			.state("task", {
				url: "/task/:id",
				views: {
					headerView: {
						templateUrl: "app/components/core/core-header.html",
						controller: "CoreHeaderController",
						controllerAs: "chc"
					},
					mainView: {
						templateUrl: "app/components/task/task.html",
						controller: "TaskController",
						controllerAs: "tc"
					}
				}
			});
	}
} (angular));
