/**
 * @author ctola
 */
angular
    .module("app")
    .config(appConfig);

appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function appConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('cadastro', {
            url: '/cadastro',
            templateUrl: "views/cadastro.html",
            controller: "CadastroController"
        })
        .state('relatorio', {
            url: '/relatorio',
            templateUrl: "views/relatorio.html",
            controller: "RelatorioController"
        });
}