angular.module("vendaCarros").controller("carlistcontroller", function ($scope, contatosAPI, operadorasAPI, serialGenerator) {
	$scope.app = "Venda de carross";
	$scope.carros = [];
	$scope.operadoras = [];

	var carregarContatos = function () {
		contatosAPI.getContatos().success(function (data) {
			data.forEach(function (item) {
				item.serial = serialGenerator.generate();
			});
			$scope.carros = data;
		}).error(function (data, status) {
			$scope.message = "Aconteceu um problema: " + data;
		});
	};

	var carregarOperadoras = function () {
		operadorasAPI.getOperadoras().success(function (data) {
			$scope.operadoras = data;
		});
	};

	$scope.adicionarContato = function (contato) {
		// contato.serial = serialGenerator.generate();
		contato.data = new Date();
		contatosAPI.saveContato(contato).success(function (data) {
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			carregarContatos();
		});
	};
	$scope.apagarCarros = function (contatos) {
		$scope.contatos = contatos.filter(function (contato) {
			if (!contato.selecionado) return contato;
		});
	};
	$scope.isContatoSelecionado = function (carros) {
		return carros.some(function (carro) {
			return carro.selecionado;
		});
	};
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	carregarContatos();
	carregarOperadoras();
});