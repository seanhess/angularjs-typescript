/// <reference path="../all.d.ts"/>

interface IMessageService {
    query():ng.IPromise<IMessage[]>;
    save(message:IMessage):ng.IPromise<void>;
}

angular.module('app')
.factory('MessageService', function($http: ng.IHttpService, $q:ng.IQService):IMessageService {
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