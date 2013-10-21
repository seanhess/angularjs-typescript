/// <reference path="../all.d.ts" />
/// <reference path="../services/MessageService.ts" />

angular.module('app')
.controller('ExampleControl', function($scope:any, $location:ng.ILocationService, MessageService:IMessageService) {
    load()

    function load() {
        $scope.fakePeople = [
            {name: "test"}, 
            {name: "asdf"},
            {name: "Catherine is hot, baby"}
        ]

        return MessageService.query().then(function(messages) {
            $scope.messages = messages
        })
    }

    $scope.details = function(thing) {
        $location.path("/stuff/" + thing.id) 
    }

    $scope.createNewMessage = function() {
        var message:IMessage = {
            name: "Bob",
            body: "This is a message"
        }
        MessageService.save(message)
        .then(load)
    }
})
