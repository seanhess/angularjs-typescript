import types = module("../types")
import Disposition = module('../services/Disposition')


function controller($scope, $element, $attrs, DispositionService:Disposition.Service) {
    // WARNING: element does not have the transcluded stuff yet!
    // use link for that

    $scope.dispositions = DispositionService.allDispositions();

    $scope.select = function(disposition:types.Disposition, $event) {
        // var target = $event.currentTarget
        // var position = $($event.currentTarget).position()
        $scope.onSelect({disposition:disposition, $event:$event})
    }
}

function link(scope, $element, $attrs) {
    // console.log("PARENT SCOPE?", scope)
    // what happened to the parent scope??
    // oh, this is a "reusable" component, so I have NO ACCESS
    // interesting. So I need a way to eval
}

export function main():ng.IDirective {
    return {
        restrict: 'EACM',
        templateUrl: '/app/directives/dispositionSelector.html',
        replace: true,              
        transclude: false,           
        scope: { 
            onSelect: '&',
        },
        // compile: compile,
        controller: controller,
        link: link,
    }
}