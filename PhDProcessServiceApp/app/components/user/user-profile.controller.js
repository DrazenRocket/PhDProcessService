(function (angular) {
	"use strict";

	angular
		.module("app.user")
		.controller("UserProfileController", UserProfileController);

	UserProfileController.$inject = ["userService"];
	function UserProfileController(userService) {
		var upc = this;

		var credentials = userService.getUserCredentialsFromLocalStorage();

		upc.username = userService.getUserUsernameFromLocalStorage();

		userService.getUserById(upc.username, credentials,
			function (response) {
				upc.user = response.data;
			}, function () {

			});
	}
} (angular));
