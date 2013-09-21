

function link($scope, $element, $attrs) {
    $scope.$watch('anchor()', function(value) {
        if (!value) {
            $element.hide()
            return
        }
        var $anchor = $(value)
        var position = $anchor.position()    
        position.top -= $element.height()
        position.left += -$element.width()/2 + $anchor.width()/2
        $element.css(position)
        $element.show()
    })
}

export function main():ng.IDirective {
    return {
        restrict: 'EACM',
        templateUrl: '/app/directives/popup.html',
        replace: true,              
        transclude: true,           
        scope: { 
            anchor: '&',
        },
        // controller: controller,
        // compile: compile,
        link: link,
    }
}