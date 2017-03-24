(function (angular) {
	"use strict";

	angular
		.module("app.task")
		.controller("TaskListInvolvedController", TaskListInvolvedController);

	TaskListInvolvedController.$inject = ["userService", "taskService"];
	function TaskListInvolvedController(userService, taskService) {
		var tlic = this;
		var credentials = userService.getUserCredentialsFromLocalStorage();

		tlic.username = userService.getUserUsernameFromLocalStorage();
		tlic.involvedUser = tlic.username;
		tlic.taskList = [];

		taskService.getTaskListByInvolvedUser(tlic.involvedUser, credentials,
			function (response) {
				tlic.taskList = response.data.data;
			},
			function () {

			});
	}
} (angular));
