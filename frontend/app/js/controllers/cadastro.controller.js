function CadastroController($scope) {
    $scope.adicionaItem = function() {
        $scope.itens.push({ produto: $scope.item.produto, quantidade: $scope.item.quantidade, comprado: false });
        $scope.item.produto = $scope.item.quantidade = '';
        toastr.success("Item adicionado com sucesso.");
    };

    $scope.editarItem = function(index) {
        $scope.item = $scope.itens[index];
        $scope.edit = true;
    };

    $scope.applyChanges = function(index) {
        $scope.item = {};
        $scope.edit = false;
        toastr.success("Item alterado com sucesso.");
    };

    $scope.deleteItem = function(index) {
        $scope.itens.splice(index, 1);
        toastr.success("Item removido com sucesso.");
    };
}