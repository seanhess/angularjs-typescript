interface TodoCtrlScope extends ng.IScope {
    todos:Todo[];
    newTodo:string;
    editedTodo:Todo;
    originalTodo:Todo;
    remainingCount:number;
    completedCount:number;
    allChecked:boolean;
    status:string;
    statusFilter:{completed:boolean};

    addTodo();
    editTodo(todo:Todo);
    doneEditing(todo:Todo);
    revertEditing(todo:Todo);
    removeTodo(todo:Todo);
    clearCompletedTodos(todo);
    markAll(completed:boolean);

}

interface TodoCtrlRouteParams {
    status:string;
}

/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the todoStorage service
 * - exposes the model to the template and provides event handlers
 */
todomvc.controller('TodoCtrl', function TodoCtrl($scope:TodoCtrlScope, $routeParams:TodoCtrlRouteParams, todoStorage:TodoStorage, filterFilter) {
    var todos = $scope.todos = todoStorage.get();

    $scope.newTodo = ""
    $scope.editedTodo = null;

    $scope.$watch('todos', function(newValue, oldValue) {
        $scope.remainingCount = filterFilter(todos, { completed: false }).length;
        $scope.completedCount = todos.length - $scope.remainingCount;
        $scope.allChecked = !$scope.remainingCount;
        if (newValue !== oldValue) { // This prevents unneeded calls to the local storage
            todoStorage.put(todos);
        }
    }, true);

    // Monitor the current route for changes and adjust the filter accordingly.
    $scope.$on('$routeChangeSuccess', function() {
        var status = $scope.status = $routeParams.status || '';

        $scope.statusFilter = (status === 'active') ?
            { completed: false } : (status === 'completed') ?
            { completed: true } : null;
    });

    $scope.addTodo = function() {
        var newTodo = $scope.newTodo.trim();
        if (!newTodo.length) {
            return;
        }

        todos.push({
            title: newTodo,
            completed: false
        });

        $scope.newTodo = '';
    };

    $scope.editTodo = function(todo) {
        $scope.editedTodo = todo;
        // Clone the original todo to restore it on demand.
        $scope.originalTodo = angular.extend({}, todo);
    };

    $scope.doneEditing = function(todo) {
        $scope.editedTodo = null;
        todo.title = todo.title.trim();

        if (!todo.title) {
            $scope.removeTodo(todo);
        }
    };

    $scope.revertEditing = function(todo) {
        todos[todos.indexOf(todo)] = $scope.originalTodo;
        $scope.doneEditing($scope.originalTodo);
    };

    $scope.removeTodo = function(todo) {
        todos.splice(todos.indexOf(todo), 1);
    };

    $scope.clearCompletedTodos = function() {
        $scope.todos = todos = todos.filter(function (val) {
            return !val.completed;
        });
    };

    $scope.markAll = function(completed) {
        todos.forEach(function(todo) {
            todo.completed = !completed;
        });
    };
});