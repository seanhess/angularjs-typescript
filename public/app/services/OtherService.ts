/// <reference path="../all.d.ts"/>
// we need to make this easier
// it's SUPER easy to concat everything, especially walking the tree

import _ = require('underscore')

angular.module('app')
.factory('BobService', function($http: ng.IHttpService, $q:ng.IQService) {
    return {
        query: function() {
            return $http.get("/messages")
            .then((rs) => rs.data)
        },

        save: function(message) {
            return $http.post('/messages', message)
            .then(() => null)
        }
    }
})