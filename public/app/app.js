var _ = require("underscore");

var ExampleControl = require("./views/example_control");
var MessageService = require("./services/MessageService");

console.log("Loaded: Underscore", !!_);
console.log("Loaded: JQuery", !!$);
console.log("Loaded: Angular", !!angular);

angular.module('services', []);
angular.module('app', ['services']).factory("MessageService", MessageService.service).config(function main($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/example', { templateUrl: '/app/views/example.html', controller: ExampleControl }).otherwise({ redirectTo: '/example' });
});

angular.bootstrap($(document), ['app']);

//# sourceMappingURL=file:////Users/seanhess/projects/angularjs-typescript/public/app/app.js.map
