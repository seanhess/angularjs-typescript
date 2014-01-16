/// <reference path="types.ts"/>
var todomvc = angular.module('todomvc', ['ngRoute']).config(function ($routeProvider) {
    $routeProvider.when('/', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html'
    }).when('/:status', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html'
    }).otherwise({
        redirectTo: '/'
    });
});
