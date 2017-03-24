(function (angular) {
	"use strict";

	angular
		.module("app.task")
		.controller("TaskController", TaskController);

	TaskController.$inject = ["$state", "$stateParams", "userService", "taskService"];
	function TaskController($state, $stateParams, userService, taskService) {
		var tc = this;
		var credentials = userService.getUserCredentialsFromLocalStorage();

		tc.username = userService.getUserUsernameFromLocalStorage();
		tc.taskId = $stateParams.id;
		tc.task = {};
		tc.claimTask = claimTask;

		loadTask();

		function loadTask() {
			taskService.getTaskById(tc.taskId, credentials,
				function (response) {
					tc.task = response.data;
				},
				function () {

				});
		}
		
		function claimTask() {
			taskService.claimTask(tc.taskId, tc.username, credentials,
				function (response) {
					loadTask();
				}, function () {

				});
		}
	}
} (angular));
