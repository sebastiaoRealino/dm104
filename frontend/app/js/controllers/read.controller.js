var App = angular.module('controllers', []);

function ReadCtrl($scope, ListaCompras, $route) {
    $scope.listacompras = [
        { titulo: 'Lembrete 1' },
        { titulo: 'Lembrete 2' },
        { titulo: 'Lembrete 3' },
        { titulo: 'Lembrete 4' }
    ];
    $scope.notFound = false;
    /* ListaCompras.read().then(function(data) {
         $scope.listacompras = data.data;
         if (data.data.length == 0) {
             $scope.notFound = true;
         }
     }, function(data) {
         console.log("data", data);
     });

     $scope.deletar = function(id) {
         ListaCompras.delete(id).then(function(data) {
             console.log(data);
             $route.reload();
         });
     }*/
}