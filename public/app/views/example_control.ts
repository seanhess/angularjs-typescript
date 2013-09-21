/// <reference path="../d.ts/angular.d.ts"/>

function ExampleControl($scope:any, $location:ng.ILocationService, SomeService) {
    load()

    function load() {
        $scope.stuff = SomeService.query()        
        $scope.fakePeople = [{name: "bob"}, {name: "will"}]
    }

    $scope.details = function(thing) {
        $location.path("/stuff/" + thing.id)
    }
}

export = ExampleControl