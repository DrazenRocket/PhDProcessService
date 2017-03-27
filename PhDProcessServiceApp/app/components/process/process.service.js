(function (angular) {
	"use strict";

	angular
		.module("app.process")
		.service("processService", ["$http", "$base64", ProcessService]);

	function ProcessService($http, $base64) {
		this.$http = $http;
		this.$base64 = $base64;
	}
} (angular));
