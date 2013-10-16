/// <reference path="../all.d.ts"/>

import server = require("../../../server/types")

export function service($http: ng.IHttpService, $q:ng.IQService) {
    // return $resource("/stuff/:id", {}, {
    //     update: {method:'PUT', params:{id:"@id"}}
    // })
    return {
        query: function():ng.IPromise<server.IMessage[]> {
            return $http.get("/messages")
            .then((rs) => rs.data)
        }
    }
} 

