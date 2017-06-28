var App = angular.module('controllers', []);

function CreateCtrl($scope, ListaCompras, $location) {
    $scope.cadastrar = function(titulo) {
        var data = {
            titulo: titulo
        };

        ListaCompras.create(data).then(function(data) {
            $location.path('/');
        });
    }
}