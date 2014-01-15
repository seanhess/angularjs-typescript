/// <reference path="all.d.ts"/>

var app = angular.module('app', [])
.config(function main($routeProvider:ng.IRouteProvider) {
    $routeProvider
        .when('/example', {templateUrl: '/app/views/example.html', controller: "ExampleControl"})
        .otherwise({redirectTo: '/example'})
})
