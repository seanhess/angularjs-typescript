/// <reference path="../all.d.ts" />

import server = require("../../../server/types")

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

    $scope.createNewMessage = function() {
        var message:server.IMessage = {
            name: "Bob",
            body: "This is a message"
        }
        MessageService.save(message)
        .then(load)
    }
}

export = ExampleControl