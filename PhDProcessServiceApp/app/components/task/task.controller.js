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
		tc.taskFormProperties = [];
		tc.unsuccessfulPostFormData = false;
		tc.claimTask = claimTask;
		tc.submitTaskForm = submitTaskForm;

		loadTask();
		loadTaskFormData();

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

		function loadTaskFormData() {
			taskService.getTaskFormDataByTaskId(tc.taskId, credentials,
				function (response) {
					tc.taskFormProperties = response.data.formProperties;
				}, function () {

				});
		}

		function postTaskFormData() {
			var properties = [];

			if (tc.taskFormProperties) {
				for (var i = 0; i < tc.taskFormProperties.length; i++) {
					var property = {
						id: tc.taskFormProperties[i].id,
						value: tc.taskFormProperties[i].value
					};
				}
			}

			taskService.postTaskFormData(tc.taskId, properties, credentials,
				function (response) {
					$state.go("task-list");
				},
				function () {
					tc.unsuccessfulPostFormData = true;
				});
		}

		function submitTaskForm(isValid) {
			if (isValid) {
				postTaskFormData();
			}
		}
	}
} (angular));
