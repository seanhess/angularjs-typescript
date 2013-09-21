/// <reference path="d.ts/angular.d.ts"/>
/// <reference path="d.ts/underscore/underscore.d.ts"/>
var ExampleControl = require("./views/example_control");
var SomeService = require("./services/SomeService");

// import Disposition = require('services/Disposition')
// import formcontrol = require('directives/formcontrol')
// import dispositionSelector = require('directives/dispositionSelector')
// import dispositionChart = module('directives/dispositionChart')
// import popup = module('directives/popup')
// import toKey = module('filters/toKey')
console.log("Loaded: Angular Bootstrap");
angular.module('app', ['ngResource']).factory("SomeService", SomeService).config(function main($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/example', { templateUrl: '/app/views/example.html', controller: ExampleControl });

    // $routeProvider.when('/clients/:id', {templateUrl: '/app/views/client_details.html', controller: clients.details})
    $routeProvider.otherwise({ redirectTo: '/example' });
});

angular.bootstrap($(document), ['app']);

