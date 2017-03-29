(function (angular) {
	"use strict";

	angular
		.module("app.process")
		.controller("ProcessListController", ProcessListController);

	ProcessListController.$inject = ["userService", "processService"];
	function ProcessListController(userService, processService) {
		var plc = this;
		var credentials = userService.getUserCredentialsFromLocalStorage();

		plc.processDefinitions = [];

		processService.getProcessDefinitionListAll(credentials,
			function (response) {
				plc.processDefinitions = response.data.data;
			},
			function () {

			});
	}
} (angular));
