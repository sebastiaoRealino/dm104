angular.module("vendaCarros").factory("contatosAPI", function ($http, config) {
	var _getContatos = function () {
		return $http.get(config.baseUrl + "/cars");
	};

	var _getRelatorio = function () {
		return $http.get(config.baseUrl + "/cars?is_sold=true");
	};

	var _saveCar = function (carro) {
		carro = JSON.stringify(carro)
		return $http.post(config.baseUrl + "/cars", carro,
			{
				headers: {
					'Content-Type': 'application/json; charset=UTF-8'
				}
			}
		);
	};

	var _sellCar = function (carro) {
		carro.is_sold = 1;
		var markIsSold = {
			is_sold: 1
		}

		return $http.put(config.baseUrl + "/cars/" + carro.id, markIsSold,
			{
				headers: {
					'Content-Type': 'application/json; charset=UTF-8'
				}
			}
		);
	};

	var _deleteCar = function (carro) {
		return $http.delete(config.baseUrl + "/cars/" + carro.id,
			{
				headers: {
					'Content-Type': 'application/json; charset=UTF-8'
				}
			}
		);
	};


	return {
		getContatos: _getContatos,
		saveCar: _saveCar,
		sellCar: _sellCar,
		deleteCar: _deleteCar,
		getRelatorio: _getRelatorio
	};
});

