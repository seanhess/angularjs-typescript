
// EXAMPLE
// <formcontrol state="error" label="Client Name" name="name">
//     <label>Client Name</label>
//     <input type="text" placeholder="ABC Corp" ng-model="name"/>
// </formcontrol>

// TRANSLATES TO
// <div class="control-group error">
//   <label class="control-label" for="name">Client Name</label>
//   <div class="controls input-icon">
//     <input type="text" id="name" class="m-wrap" placeholder="ABC Corp"/>
//     <span class="input-error tooltips" data-original-title="please write a valid email">
//       <i class="icon-ok"></i>
//     </span>
//   </div>
// </div>

// see: http://docs.angularjs.org/guide/directive


function controller($scope, $element, $attrs, $transclude) {
    // WARNING: element does not have the transcluded stuff yet!
    // console.log("IN CONTROLLER", $element)
}

function compile(element, attr, transclude) { }

function link($scope, $element, $attrs) {
    // console.log("IN LINK", element.html())
    var $input = $element.find('input,select')
    $scope.name = $input.attr('id')
    $input.addClass('m-wrap')
    $input.addClass('span12')

}

(<any> controller).$inject = ['$scope', '$element', '$attrs', '$transclude']

export function main():ng.IDirective {
    return {
        restrict: 'ECAM', // can work as an attribute too. <div formcontrol>
        templateUrl: '/app/directives/formcontrol.html',

        // replaces the element instead of appending
        replace: true,              
        transclude: true,           
        scope: { 
            label: '@', 
            isError: '&error',
            isWarning: '&warning',
            isSuccess: '&success',
            invalidMessage: '@invalidMessage',
            help: '@',
        },
        // controller: controller,
        // compile: compile,
        link: link,
    }
}

// SCOPE
// scope: { name: '@' }, // single direction binding
// scope: { name: '@someAttrName' }, // single direction binding
// scope: { name: '&someAttrName' }, // executes an expression, like "on-fat='doSomething()'"

// COMPILE
// (templateElement, templateAttributes, transclude(scope, cloneLinkingFun))
// deals with transforming the DOM (ng-repeat, ng-view)
// not normally needed
// link only used if compile not defined
// the compile function RETURNS a linking function


// LINK
// ()
// scope available now
// final DOM configuration ready
// children or following-siblings NOT ready
// Anywhere you can use a linking function, you can use {pre: LINK, post: LINK}


// ATTRIBUTES
// attributes are used for inter-directive communication
// $attributes.$observe('myOtherAttribute', function(newValue))
// this is the only good way to get values out!
// like $scope.$watch, but first argument is name, not expression. 



