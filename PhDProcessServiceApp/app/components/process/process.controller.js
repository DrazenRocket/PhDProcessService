(function (angular) {
	"use strict";

	angular
		.module("app.process")
		.controller("ProcessController", ProcessController);

	ProcessController.$inject = ["$stateParams", "$state", "userService", "processService"]
	function ProcessController($stateParams, $state, userService, processService) {
		var pc = this;
		var credentials = userService.getUserCredentialsFromLocalStorage();

		pc.processDefinitionId = $stateParams.id;
		pc.processDefinition = {};
		pc.processDefinitionFormProperties = [];
		pc.unsuccessfulPostFormData = false;
		pc.messageUnsuccessfulPostFormData = "";
		pc.submitProcessDefinitionForm = submitProcessDefinitionForm;

		loadProcessDefinition();
		loadProcessDefinitionFormProperties();

		function loadProcessDefinition() {
			processService.getProcessDefinitionById(pc.processDefinitionId, credentials,
				function (response) {
					pc.processDefinition = response.data;
				},
				function () {

				});
		}

		function loadProcessDefinitionFormProperties() {
			processService.getProcessDefinitionFormData(pc.processDefinitionId, credentials,
				function (response) {
					pc.processDefinitionFormProperties = response.data.formProperties;

					for (var i = 0; i < pc.processDefinitionFormProperties.length; i++) {
						if (pc.processDefinitionFormProperties[i].type == 'long') {
							var parsedValue = parseInt(pc.processDefinitionFormProperties[i].value);

							pc.processDefinitionFormProperties[i].value = parsedValue;
						}
					}
				},
				function () {

				});
		}

		function postProcessDefinitionFormData() {
			var properties = [];

			if (pc.processDefinition.formProperties) {
				for (var i = 0; i < pc.processDefinitionFormProperties.length; i++) {
					var property = {
						id: pc.processDefinitionFormProperties[i].id,
						value: pc.processDefinitionFormProperties[i].value
					};

					if (pc.processDefinitionFormProperties[i].writable) {
						properties.push(property);
					}
				}
			}

			processService.postProcessDefinitionFormData(pc.processDefinitionId,
				pc.processDefinition.key, properties, credentials,
				function (response) {
					$state.go("task-list");
				},
				function (response) {
					pc.unsuccessfulPostFormData = true;
					pc.messageUnsuccessfulPostFormData = response;
				})
		}

		function submitProcessDefinitionForm(isValid) {
			if (isValid) {
				postProcessDefinitionFormData();
			}
		}
	}
} (angular));
