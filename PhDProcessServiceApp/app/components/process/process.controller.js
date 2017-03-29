(function (angular) {
	"use strict";

	angular
		.module("app.process")
		.controller("ProcessController", ProcessController);

	ProcessController.$inject = ["$stateParams", "userService", "processService"]
	function ProcessController($stateParams, userService, processService) {
		var pc = this;
		var credentials = userService.getUserCredentialsFromLocalStorage();

		pc.processDefinitionId = $stateParams.id;
		pc.processDefinition = {};

		processService.getProcessDefinitionById(pc.processDefinitionId, credentials,
			function (response) {
				pc.processDefinition = response.data;
			},
			function () {

			});
	}
} (angular));
