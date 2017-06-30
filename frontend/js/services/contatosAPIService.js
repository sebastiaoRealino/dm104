angular.module("vendaCarros").factory("contatosAPI", function ($http, config) {
	var _getContatos = function () {
		return $http.get(config.baseUrl + "/cars");
	};

	var _saveContato = function (contato) {
		return $http.post(config.baseUrl + "/cars", contato);
	};

	return {
		getContatos: _getContatos,
		saveContato: _saveContato
	};
});