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
			})
			.state("task-list", {
				url: "/task-list",
				views: {
					headerView: {
						templateUrl: "app/components/core/core-header.html",
						controller: "CoreHeaderController",
						controllerAs: "chc"
					},
					mainView: {
						templateUrl: "app/components/task/task-list.html",
						controller: "TaskListController",
						controllerAs: "tlc"
					}
				}
			})
			.state("task-list-involved", {
				url: "/task-list-involved",
				views: {
					headerView: {
						templateUrl: "app/components/core/core-header.html",
						controller: "CoreHeaderController",
						controllerAs: "chc"
					},
					mainView: {
						templateUrl: "app/components/task/task-list-involved.html",
						controller: "TaskListInvolvedController",
						controllerAs: "tlic"
					}
				}
			})
			.state("task-list-queued", {
				url: "/task-list-queued",
				views: {
					headerView: {
						templateUrl: "app/components/core/core-header.html",
						controller: "CoreHeaderController",
						controllerAs: "chc"
					},
					mainView: {
						templateUrl: "app/components/task/task-list-queued.html",
						controller: "TaskListQueuedController",
						controllerAs: "tlqc"
					}
				}
			});
	}
} (angular));
