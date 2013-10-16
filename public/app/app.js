var angular = require("angular");

var ExampleControl = require("./views/example_control");
var MessageService = require("./services/MessageService");

console.log("Loaded: JQuery", !!$);
console.log("Loaded: Angular", !!angular);

angular.module('app', []).factory("MessageService", MessageService.service).config(function main($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/example', { templateUrl: '/app/views/example.html', controller: ExampleControl });

    $routeProvider.otherwise({ redirectTo: '/example' });
});

angular.bootstrap($(document), ['app']);

//# sourceMappingURL=file:////Users/seanhess/projects/angularjs-bootstrap/public/app/app.js.map
