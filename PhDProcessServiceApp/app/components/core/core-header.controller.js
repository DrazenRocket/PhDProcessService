(function (angular) {
	"use strict";

	angular
		.module("app.core")
		.controller("HeaderController", HeaderController);

	HeaderController.$inject = ["$state", "userService"];
	function HeaderController(userService) {
		var hc = this;

		hc.logout = logout;

		function logout() {
			userService.removeUserCredentialsFromLocalStorage();
			$state.go("login");
		}
	}
} (angular));