var App = angular.module('controllers', []);

function EditCtrl($scope, ListaCompras, $routeParams, $location) {
    var id = $routeParams.id;
    ListaCompras.profile(id).then(function(data) {
        $scope.item = data.data;
    })

    $scope.atualizar = function(item) {
        console.log(item);
        ListaCompras.update(item, item.id).then(function(data) {
            $location.path('/');
        });
    }
}