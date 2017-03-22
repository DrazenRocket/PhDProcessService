(function (angular) {
	"use strict";

	angular
		.module("app.user")
		.service("userService", ["$http", "$base64", "localStorageService", UserService]);

	function UserService($http, $base64, localStorageService) {
		this.$http = $http;
		this.$base64 = $base64;
		this.localStorageService = localStorageService;
	}

	UserService.prototype.saveUserCredentialsToLocalStorage = function (credentials) {
		this.localStorageService.set("user.credentials", credentials);
	};

	UserService.prototype.removeUserCredentialsFromLocalStorage = function () {
		this.localStorageService.remove("user.credentials");
	}

	UserService.prototype.getUserCredentialsFromLocalStorage = function () {
		var credentials = this.localStorageService.get("user.credentials");

		return credentials;
	};

	UserService.prototype.getUserById = function (id, credentials, successcb, errorcb) {
		var req = {
			method: "GET",
			url: "http://localhost:8080/activiti-rest/service/identity/users/"+id,
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": "Basic " + this.$base64.encode(credentials)
			}
		};

		this.$http(req).then(successcb, errorcb);
	};
} (angular));
