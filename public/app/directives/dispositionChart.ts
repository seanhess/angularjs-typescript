import types = module("../types")
import Disposition = module('../services/Disposition')


// I should have them pass me the whole array of dispositions
function controller($scope, $element, $attrs, DispositionService:Disposition.Service) {
    // $scope.dispositions = []
}

function link(scope, $element, $attrs) {

}

export function main():ng.IDirective {
    return {
        restrict: 'EACM',
        templateUrl: '/app/directives/dispositionChart.html',
        replace: true,              
        transclude: false,           
        scope: { 
            dispositions: '=',
        },
        // compile: compile,
        controller: controller,
        link: link,
    }
}