/// <reference path="../d.ts/angular.d.ts"/>

function service($http: ng.IHttpService, $resource: ng.resource.IResourceService) {
    return $resource("/stuff/:id", {}, {
        update: {method:'PUT', params:{id:"@id"}}
    })
}

export = service