(function (angular) {
	"use strict";

	angular
		.module("app.task")
		.service("taskService", ["$http", TaskService]);

	function TaskService($http) {
		this.$http = $http;
	}
} (angular));
