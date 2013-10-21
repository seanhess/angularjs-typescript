/// <reference path="all.d.ts"/>

// Angular and JQuery are loaded globally
// Underscore "just works" from NPM
import _ = require("underscore")

import ExampleControl = require('views/example_control')
import MessageService = require('services/MessageService')  

// import Disposition = require('services/Disposition')
// import formcontrol = require('directives/formcontrol')
// import dispositionSelector = require('directives/dispositionSelector')
// import dispositionChart = module('directives/dispositionChart')
// import popup = module('directives/popup')
// import toKey = module('filters/toKey')

console.log("Loaded: Underscore", !!_)
console.log("Loaded: JQuery", !!$) 
console.log("Loaded: Angular", !!angular)

angular.module('services', [])
angular.module('app', ['services'])

// to this part automatically
.factory("MessageService", MessageService.service)

// .directive("formcontrol", formcontrol.main)
// .filter("toKey", toKey.main)

.config(function main($routeProvider: ng.IRouteProvider, $locationProvider: ng.ILocationProvider) {
    $locationProvider.html5Mode(true)
    $routeProvider
        .when('/example', {templateUrl: '/app/views/example.html', controller: ExampleControl})
        .otherwise({redirectTo: '/example'})
        // $routeProvider.when('/clients/:id', {templateUrl: '/app/views/client_details.html', controller: clients.details})
})

angular.bootstrap($(document), ['app'])    

