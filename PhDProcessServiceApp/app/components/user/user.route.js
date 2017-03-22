(function (angular) {
	"use strict";

	angular
		.module("app.user")
		.config(configRoute);

	configRoute.$inject = ["$locationProvider", "$stateProvider"];
	function configRoute($locationProvider, $stateProvider) {
		$locationProvider.hashPrefix("");
		$stateProvider
			.state("login", {
				url: "/login",
				views: {
					mainView: {
						templateUrl: "app/components/user/user-login.html",
						controller: "UserLoginController",
						controllerAs: "ulc"
					}
				}
			});
	}
} (angular));
