interface TodoStorage {
    get():Todo[];
    put(todos:Todo[]):void;
}


/**
 * Services that persists and retrieves TODOs from localStorage
 */
todomvc.factory('todoStorage', function():TodoStorage {
        var STORAGE_ID = 'todos-angularjs';

        return {
                get: function () {
                        return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
                },

                put: function (todos) {
                        localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
                }
        };
});