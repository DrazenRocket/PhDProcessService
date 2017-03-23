(function (angular) {
	"use strict";

	angular
		.module("app.task")
		.controller("TaskController", TaskController);

	TaskController.$inject = ["$state", "$stateParams"];
	function TaskController($state, $stateParams) {
		var tc = this;

		tc.taskId = $stateParams.id;
	}
} (angular));
