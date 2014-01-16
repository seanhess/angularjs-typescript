/**
 * Services that persists and retrieves TODOs from localStorage
 */

class TodoStorage {
    static STORAGE_ID = 'todos-angularjs';

    // dependencies would be injected here
    constructor() {

    }

    get():Todo[] {
        return JSON.parse(localStorage.getItem(TodoStorage.STORAGE_ID) || '[]');
    }

    put(todos:Todo[]) {
        localStorage.setItem(TodoStorage.STORAGE_ID, JSON.stringify(todos));
    }
}

todomvc.service('todoStorage', TodoStorage)
