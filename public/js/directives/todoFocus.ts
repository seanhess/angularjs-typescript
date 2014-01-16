/**
 * Directive that places focus on the element it is applied to when the expression it binds to evaluates to true
 */
todomvc.directive('todoFocus', function todoFocus($timeout:ng.ITimeoutService) {
        return function (scope:ng.IScope, elem:JQuery, attrs) {
                scope.$watch(attrs.todoFocus, function (newVal) {
                        if (newVal) {
                                $timeout(function () {
                                        elem[0].focus();
                                }, 0, false);
                        }
                });
        };
});