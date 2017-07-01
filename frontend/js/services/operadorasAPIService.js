angular.module("vendaCarros").service("operadorasAPI", function ($http, config) {
	this.getOperadoras = function () {
		return $http.get(config.baseUrl + "/cars");
	};
});