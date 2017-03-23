(function (angular) {
	"use strict";

	angular
		.module("app.user")
		.controller("UserLoginController", UserLoginController);

	UserLoginController.$inject = ["$state", "userService"];
	function UserLoginController($state, userService) {
		var ulc = this;

		ulc.login = login;
		ulc.username = "";
		ulc.password = "";
		ulc.unsuccessfulLogin = false;

		function login(isValid) {
			if (isValid) {
				var credentials = ulc.username + ":" + ulc.password;

				userService.getUserById(ulc.username, credentials,
					function (response) {
						userService.saveUserCredentialsToLocalStorage(credentials);
						$state.go("profile")
					}, function () {
						ulc.unsuccessfulLogin = true;
					});
			}
		}
	}
} (angular));
