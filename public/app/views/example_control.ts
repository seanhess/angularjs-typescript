
function ExampleControl($scope:any, $location:ng.ILocationService, MessageService) {
    load()

    function load() {
        MessageService.query().then(function(messages) {
            $scope.messages = messages
        })
        $scope.fakePeople = [
            {name: "test"}, 
            {name: "asdf"},
            {name: "Catherine is hot, baby"}
        ]
    }

    $scope.details = function(thing) {
        $location.path("/stuff/" + thing.id) 
    }
}

export = ExampleControl