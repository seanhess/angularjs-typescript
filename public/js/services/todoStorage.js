/**
* Services that persists and retrieves TODOs from localStorage
*/
var TodoStorage = (function () {
    // dependencies would be injected here
    function TodoStorage() {
    }
    TodoStorage.prototype.get = function () {
        return JSON.parse(localStorage.getItem(TodoStorage.STORAGE_ID) || '[]');
    };

    TodoStorage.prototype.put = function (todos) {
        localStorage.setItem(TodoStorage.STORAGE_ID, JSON.stringify(todos));
    };
    TodoStorage.STORAGE_ID = 'todos-angularjs';
    return TodoStorage;
})();

todomvc.service('todoStorage', TodoStorage);
