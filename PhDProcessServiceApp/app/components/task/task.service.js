(function (angular) {
	"use strict";

	angular
		.module("app.task")
		.service("taskService", ["$http", "$base64", TaskService]);

	function TaskService($http, $base64) {
		this.$http = $http;
		this.$base64 = $base64;
	}

	TaskService.prototype.getTaskListByAssignee = function (assignee, credentials, successcb, errorcb) {
		var request = {
			method: "GET",
			url: "http://localhost:8080/activiti-rest/service/runtime/tasks?assignee=" + assignee,
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": "Basic " + this.$base64.encode(credentials)
			}
		};

		this.$http(request).then(successcb,errorcb);
	};

	TaskService.prototype.getTaskListByCandidateUser = function (candidateUser, credentials, successcb, errorcb) {
		var request = {
			method: "GET",
			url: "http://localhost:8080/activiti-rest/service/runtime/tasks?candidateUser=" + candidateUser,
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": "Basic " + this.$base64.encode(credentials)
			}
		};

		this.$http(request).then(successcb, errorcb);
	};

	TaskService.prototype.getTaskListByInvolvedUser = function (involvedUser, credentials, successcb, errorcb) {
		var request = {
			method: "GET",
			url: "http://localhost:8080/activiti-rest/service/runtime/tasks?involvedUser=" + involvedUser,
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": "Basic " + this.$base64.encode(credentials)
			}
		};

		this.$http(request).then(successcb, errorcb);
	};
} (angular));
