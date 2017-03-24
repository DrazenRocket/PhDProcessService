(function (angular) {
	"use strict";

	angular
		.module("app.task")
		.controller("TaskController", TaskController);

	TaskController.$inject = ["$state", "$stateParams", "userService", "taskService"];
	function TaskController($state, $stateParams, userService, taskService) {
		var tc = this;
		var credentials = userService.getUserCredentialsFromLocalStorage();

		tc.taskId = $stateParams.id;
		tc.task = {};

		taskService.getTaskById(tc.taskId, credentials,
			function (response) {
				tc.task = response.data;
			},
			function () {

			});
	}
} (angular));
