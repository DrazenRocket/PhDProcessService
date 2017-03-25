(function (angular) {
	"use strict";

	angular
		.module("app.task")
		.service("taskService", ["$http", "$base64", TaskService]);

	function TaskService($http, $base64) {
		this.$http = $http;
		this.$base64 = $base64;
	}

	TaskService.prototype.getTaskById = function (taskId, credentials, successcb, errorcb) {
		var request = {
			method: "GET",
			url: "http://localhost:8080/activiti-rest/service/runtime/tasks/"+taskId,
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": "Basic " + this.$base64.encode(credentials)
			}
		};

		this.$http(request).then(successcb, errorcb);
	};

	TaskService.prototype.getTaskListByAssignee = function (assignee, credentials, successcb, errorcb) {
		var request = {
			method: "GET",
			url: "http://localhost:8080/activiti-rest/service/runtime/tasks?size=1000&assignee=" + assignee,
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
			url: "http://localhost:8080/activiti-rest/service/runtime/tasks?size=1000&candidateUser=" + candidateUser,
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
			url: "http://localhost:8080/activiti-rest/service/runtime/tasks?size=1000&involvedUser=" + involvedUser,
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": "Basic " + this.$base64.encode(credentials)
			}
		};

		this.$http(request).then(successcb, errorcb);
	};

	TaskService.prototype.claimTask = function (taskId, assignee, credentials, successcb, errorcb) {
		var request = {
			method: "POST",
			url: "http://localhost:8080/activiti-rest/service/runtime/tasks/" + taskId,
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": "Basic " + this.$base64.encode(credentials)
			},
			data: {
				action: "claim",
				assignee: assignee
			}
		};

		this.$http(request).then(successcb, errorcb);
	};

	TaskService.prototype.getTaskFormDataByTaskId = function (taskId, credentials, successcb, errorcb) {
		var request = {
			method: "GET",
			url: "http://localhost:8080/activiti-rest/service/form/form-data?taskId=" + taskId,
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": "Basic " + this.$base64.encode(credentials)
			}
		};

		this.$http(request).then(successcb, errorcb);
	};

	TaskService.prototype.postTaskFormData = function (taskId, properties, credentials, successcb, errorcb) {
		var request = {
			method: "POST",
			url: "http://localhost:8080/activiti-rest/service/form/form-data",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": "Basic " + this.$base64.encode(credentials)
			},
			data: {
				taskId: taskId,
				properties: properties
			}
		};

		this.$http(request).then(successcb, errorcb);
	};
} (angular));
