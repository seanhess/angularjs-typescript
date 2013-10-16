/// <reference path="all.d.ts"/>

// JQuery is included globally by hand
// var $:JQueryStatic = require("jquery")

// Can't depend on the module authors to declare angular as an external module
var angular:ng.IAngularStatic = require("angular") 

// it thinks it is node!
// import _ = require("underscore")

import ExampleControl = require('views/example_control')
import MessageService = require('services/MessageService')  

// import Disposition = require('services/Disposition')
// import formcontrol = require('directives/formcontrol')
// import dispositionSelector = require('directives/dispositionSelector')
// import dispositionChart = module('directives/dispositionChart')
// import popup = module('directives/popup')
// import toKey = module('filters/toKey')

// console.log("Loaded: Underscore", !!_)
console.log("Loaded: JQuery", !!$) 
console.log("Loaded: Angular", !!angular)

angular.module('app', [])
.factory("MessageService", MessageService.service)

// .directive("formcontrol", formcontrol.main)
// .filter("toKey", toKey.main)

.config(function main($routeProvider: ng.IRouteProvider, $locationProvider: ng.ILocationProvider) {
    $locationProvider.html5Mode(true)
    $routeProvider.when('/example', {templateUrl: '/app/views/example.html', controller: ExampleControl})
    // $routeProvider.when('/clients/:id', {templateUrl: '/app/views/client_details.html', controller: clients.details})
    $routeProvider.otherwise({redirectTo: '/example'})
})

// the problem is to boo
$(function() {
    angular.bootstrap($(document), ['app'])    
})

