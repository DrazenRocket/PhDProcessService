(function (angular) {
	"use strict";

	angular
		.module("app.user")
		.controller("UserProfileController", UserProfileController);

	UserProfileController.$inject = ["$stateParams", "userService"];
	function UserProfileController($stateParams, userService) {
		var upc = this;
		var credentials = userService.getUserCredentialsFromLocalStorage();

		upc.username = $stateParams.id;
		upc.user = {};

		userService.getUserById(upc.username, credentials,
			function (response) {
				upc.user = response.data;
			},
			function () {

			});
	}
} (angular));
