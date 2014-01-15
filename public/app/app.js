/// <reference path="all.d.ts"/>
// Underscore "just works" from NPM
var _ = require("underscore");

// Angular and JQuery are loaded by hand from bower
console.log("Loaded: Underscore", !!_);
console.log("Loaded: JQuery...", !!$);
console.log("Loaded: Angular", !!angular);

// also App.Services, App.Controllers, etc?
var app = angular.module('app', []).config(function main($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/example', { templateUrl: '/app/views/example.html', controller: "ExampleControl" }).otherwise({ redirectTo: '/example' });
});

$(function () {
    // give the other modules a chance to register
    // since they are concatted below
    angular.bootstrap($(document), ['app']);
});

