var _ = require("underscore");

console.log("Loaded: Underscore", !!_);
console.log("Loaded: JQuery...", !!$);
console.log("Loaded: Angular", !!angular);

var app = angular.module('app', []).config(function main($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/example', { templateUrl: '/app/views/example.html', controller: "ExampleControl" }).otherwise({ redirectTo: '/example' });
});

$(function () {
    angular.bootstrap($(document), ['app']);
});

//# sourceMappingURL=app.js.map
