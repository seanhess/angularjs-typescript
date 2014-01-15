/// <reference path="all.d.ts"/>

// also App.Services, App.Controllers, etc?
var app = angular.module('app', [])
.config(function main($routeProvider: ng.IRouteProvider, $locationProvider: ng.ILocationProvider) {
    $locationProvider.html5Mode(true)
    $routeProvider
        .when('/example', {templateUrl: '/app/views/example.html', controller: "ExampleControl"})
        .otherwise({redirectTo: '/example'})
