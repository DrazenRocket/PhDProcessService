(function (angular) {
	"use strict";

	angular
		.module("app.task")
		.controller("TaskListController", TaskListController);

	TaskListController.$inject = ["taskService", "userService"];
	function TaskListController(taskService, userService) {
		var tlc = this;
		var credentials = userService.getUserCredentialsFromLocalStorage();

		tlc.username = userService.getUserUsernameFromLocalStorage();
		tlc.assignee = tlc.username;
		tlc.taskList = [];

		taskService.getTaskListByAssignee(tlc.assignee, credentials,
			function (response) {
				tlc.taskList = response.data;
			},
			function () {

			});
	}
} (angular));
