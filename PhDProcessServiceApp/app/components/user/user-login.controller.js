(function (angular) {
	"use strict";

	angular
		.module("app.user")
		.controller("UserLoginController", UserLoginController);

	UserLoginController.$inject = ["userService"];
	function UserLoginController(userService) {
		var ulc = this;

		ulc.login = login;
		ulc.username = "";
		ulc.password = "";
		ulc.unsuccessfulLogin = false;

		function login(isValid) {
			if (isValid) {
				var credentials = ulc.username + ":" + ulc.password;

				userService.getUserById(ulc.username, credentials,
					function (data) {
						userService.saveUserCredentialsToLocalStorage(credentials);
						var credi = userService.getUserCredentialsFromLocalStorage();
						userService.removeUserCredentialsFromLocalStorage();
					}, function () {
						ulc.unsuccessfulLogin = true;
					});
			}
		}
	}
} (angular));
