angular.module("vendaCarros").controller("carlistcontroller", function ($scope, contatosAPI, operadorasAPI, serialGenerator) {
	$scope.app = "Venda de carross";
	$scope.carros = [];
	$scope.carrosRelatorio = [];
	$scope.showRelatorio = false;

	$scope.gerarRelatorio = function () {
		console.log('gerarRelatorio')
		$scope.showRelatorio = true;
		contatosAPI.getRelatorio().success(function (data) {
			$scope.carrosRelatorio = data;
		}).error(function (data, status) {
			$scope.message = "Aconteceu um problema: " + data;
		});
	};

	var carregarContatos = function () {
		$scope.showRelatorio = false;
		contatosAPI.getContatos().success(function (data) {
			data.forEach(function (item) {
				item.serial = serialGenerator.generate();
			});
			$scope.carros = data;
		}).error(function (data, status) {
			$scope.message = "Aconteceu um problema: " + data;
		});
	};


	$scope.esconderRelatorio = function (car) {
		$scope.showRelatorio = false;

	};
	$scope.adicionarCarro = function (car) {
		if (car == undefined ||
			car.color == undefined ||
			car.model == undefined ||
			car.price == undefined) {
			$scope.showError = true
		} else {
			$scope.showError = false
			contatosAPI.saveCar(car).success(function (data) {
				delete $scope.car;
				$scope.carrosForm.$setPristine();
				carregarContatos();
			});
		}

	};
	$scope.apagarCarro = function (car) {
		contatosAPI.deleteCar(car).success(function (data) {
			delete $scope.car;
			$scope.carrosForm.$setPristine();
			carregarContatos();
		});
	};
	$scope.marcarComoVendido = function (car) {
		contatosAPI.sellCar(car).success(function (data) {
			delete $scope.car;
			$scope.carrosForm.$setPristine();
			carregarContatos();
		});
	};

	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	carregarContatos();
});