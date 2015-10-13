/**
 * App module.
 */
var app = angular.module('app', [
    'ngSanitize',
    'ngResource',
    'ui.router',
    'app.config',
    'app.constants',
    'app.user-list',
    'xeditable'
])
    .config(function($urlRouterProvider, $stateProvider)
    {
        $urlRouterProvider.otherwise('/users');

        $stateProvider
            .state('app', {
                abstract: true,
                template: '<ui-view/>'
            });
    })
    .run(function(editableOptions) {
        editableOptions.theme = 'bs3';
    });