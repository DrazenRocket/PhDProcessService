(function (angular) {
	"use strict";

	angular
		.module("app.task")
		.controller("TaskListQueuedController", TaskListQueuedController);

	TaskListQueuedController.$inject = ["userService", "taskService"];
	function TaskListQueuedController(userService, taskService) {
		var tlqc = this;
		var credentials = userService.getUserCredentialsFromLocalStorage();

		tlqc.username = userService.getUserUsernameFromLocalStorage();
		tlqc.candidateUser = tlqc.username;
		tlqc.taskList = [];
		tlqc.claimTask = claimTask;

		loadTaskList();

		function loadTaskList() {
			taskService.getTaskListByCandidateUser(tlqc.candidateUser, credentials,
				function (response) {
					tlqc.taskList = response.data.data;
				},
				function () {

				});
		}

		function claimTask(taskId) {
			taskService.claimTask(taskId, tlqc.username, credentials,
				function (response) {
					loadTaskList();
				},
				function () {

				});
		}
	}
} (angular));
