(function (angular) {
	"use strict";

	angular
		.module("app.core")
		.controller("CoreHeaderController", CoreHeaderController);

	CoreHeaderController.$inject = ["$state", "userService"];
	function CoreHeaderController($state, userService) {
		var chc = this;

		chc.logout = logout;
		chc.username = userService.getUserUsernameFromLocalStorage();

		function logout() {
			userService.removeUserCredentialsFromLocalStorage();
			$state.go("login");
		}
	}
} (angular));