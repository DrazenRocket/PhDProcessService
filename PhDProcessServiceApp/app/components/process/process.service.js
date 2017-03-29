(function (angular) {
	"use strict";

	angular
		.module("app.process")
		.service("processService", ["$http", "$base64", ProcessService]);

	function ProcessService($http, $base64) {
		this.$http = $http;
		this.$base64 = $base64;
	}

	ProcessService.property.getProcessDefinitionById = function (id, credentials, successcb, errorcb) {
		var request = {
			method: "GET",
			url: "http://localhost:8080/activiti-rest/service/repository/process-definitions/" + id,
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": "Basic " + this.$base64.encode(credentials)
			}
		};

		this.$http(request).then(successcb, errorcb);
	};

	ProcessService.prototype.getProcessDefinitionListAll = function (credentials, successcb, errorcb) {
		var request = {
			method: "GET",
			url: "http://localhost:8080/activiti-rest/service/repository/process-definitions?size=1000",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": "Basic " + this.$base64.encode(credentials)
			}
		};

		this.$http(request).then(successcb, errorcb);
	};

	ProcessService.property.getProcessDefinitionListByName = function (name, credentials, successcb, errorcb) {
		var request = {
			method: "GET",
			url: "http://localhost:8080/activiti-rest/service/repository/process-definitions?size=1000&name=" + name,
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": "Basic " + this.$base64.encode(credentials)
			}
		};

		this.$http(request).then(successcb, errorcb);
	};

	ProcessService.property.getProcessDefinitionListByCategory = function (category, credentials, successcb, errorcb) {
		var request = {
			method: "GET",
			url: "http://localhost:8080/activiti-rest/service/repository/process-definitions?size=1000&category=" + category,
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": "Basic " + this.$base64.encode(credentials)
			}
		};

		this.$http(request).then(successcb, errorcb);
	};

	ProcessService.property.getProcessDefinitionListByStartableByUser = function(startableByUser, credentials, successcb, errorcb) {
		var request = {
			method: "GET",
			url: "http://localhost:8080/activiti-rest/service/repository/process-definitions?size=1000&startableByUser=" + startableByUser,
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": "Basic " + this.$base64.encode(credentials)
			}
		};

		this.$http(request).then(successcb, errorcb);
	};

	ProcessService.prototype.getProcessDefinitionFormData = function (processDefinitionId, credentials, successcb, errorcb) {
		var request = {
			method: "GET",
			url: "http://localhost:8080/activiti-rest/service/form/form-data?processDefinitionId=" + processDefinitionId,
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": "Basic " + this.$base64.encode(credentials)
			}
		};

		this.$http(request).then(successcb, errorcb);
	};

	ProcessService.prototype.postProcessDefinitionFormData = function (processDefinitionId, businessKey, properties, credentials, successcb, errorcb) {
		var request = {
			method: "POST",
			url: "http://localhost:8080/activiti-rest/service/form/form-data",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": "Basic " + this.$base64.encode(credentials)
			},
			data: {
				processDefinitionId: processDefinitionId,
				businessKey: businessKey,
				properties: properties
			}
		};

		this.$http(request).then(successcb, errorcb);
	};
} (angular));
