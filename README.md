AngularJS + Typescript ♥♥
=========================

Follow Along:
-------------

[github.com/seanhess/angularjs-typescript][angularjs-typescript]

About Me
--------

Sean Hess

- Twitter: [@seanhess][@seanhess]
- Blog: [seanhess.github.io](http://seanhess.github.io)
- Github: [github.com/seanhess](http://github.com/seanhess/)



WHY TYPESCRIPT?
==================================

Story of a Javascript team
--------------------------

It all started with Javascript...


Typescript: best of both worlds
--------------------------------

- 80% of the benefit of testing, 20% of the cost
- see mistakes inline
- formalize your choices
- modern features make it easy: optional, inferred
- autocomplete


WHAT IS TYPESCRIPT?
==================

Getting Started
---------------

Install Typescript

    > npm install -g typescript

It is just JavaScript/ES6

    function hello(name) {
        alert("hello " + name)
    }
    hello("world")

Compile It
    
    > tsc test.ts

Add Types to Variables
----------------------

Try these in the Typescript Playground: [www.typescriptlang.org/Playground](http://www.typescriptlang.org/Playground/)

    var population:number = 3

    var name:string = "hello"
    var names:string[] = [name];

    var user:User;

    var couldBeAnything;

Interfaces
----------

Make it easy to enforce the structure of any object

    interface User {
        firstName: string;
        lastName: string;
    }

    // interface matches any object with the right fields
    var user:User = {firstName:"Very", lastName:"User"}
    var user2:User = {name:"Very User"} // error

    function fullName(user:User):string {
        return user.firstName + " " + user.lastName;
    }

Type Inference
--------------

You don't have to tell the compiler everything

    // name is a string
    var name = fullName(user)

    function sum(a:number, b:number) {
        return a + b
    }

    var result = sum(name, 4)

ES6 Features
------------

External Modules: can output CommonJS or AMD

    // users.ts
    export function fullName(user:User):string {
        return user.firstName + " " + user.lastName
    }

    // main.ts
    import users = require("./users")
    var name = users.fullName(user)

Internal Modules

    module users {
        export function fullName(user:User):string {
            return user.firstName + " " + user.lastName
        }
    }

    var name = users.fullName(user)

Classes

    class Animal {
        public size:number;
        constructor() {
            this.size = 0;
        }
    }

    class Kitten extends Animal {
        devour(animal:Animal) {
            this.size += animal.size
        }
    }

Fat Arrow Functions

    $(".friends").each(function() {

        $.get("/users", (users) => {

            // preserve this pointer
            var $div = $(this)

            // cheap functions
            var firstNames = users.map((user) => user.firstName)

            $div.text(firstNames.join(", "))
        })
    })


Generics
--------

Use the same well-tested functions on multiple types

    // returns the first of an array
    function firstValue<T>(array:T[]):T {
        return array[0]
    }

    // these will give errors.
    var one:string = firstValue([1,2,3,4,5])
    var two:number = firstValue(["one", "two"])

Definition Files
----------------
 
External type definition files for many libraries on [DefinitelyTyped][dt]

    declare module ng {
        interface IScope {
            $parent:IScope;
            $eval(expressions:string):any;
            $watch(expressions:string):any;
            ... 
        }
    }

    function MyController(scope:ng.IScope) {}

IDE and Editor Integration
--------------------------

Error checking and Autocomplete:

- [Sublime Text 3 - T3S](https://github.com/Railk/T3S) - IDE-like
- [Sublime Text 3 - Build Errors](https://github.com/seanhess/sublime-build-errors) - Building, Errors
- Vim [[1]](https://github.com/clausreinke/typescript-tools) [[2]](https://github.com/leafgarland/typescript-vim)
- [WebStorm](http://blog.jetbrains.com/webstorm/2013/11/enjoy-typescript-in-webstorm/) - IDE
- [Visual Studio](http://www.microsoft.com/en-us/download/details.aspx?id=34790) - IDE


TYPESCRIPT + ANGULAR
====================

Add Typescript to TodoMVC AngularJS
-----------------------------------

Start with TodoMVC, let's add Typescript to it

[http://todomvc.com/architecture-examples/angularjs/](http://todomvc.com/architecture-examples/angularjs/)

Start with your Data Model
--------------------------

Make a file with shared application types: [`types.ts`][types.ts]. Data first design.

    interface Todo {
        completed: boolean;
        title: string;
    }

Add `:Todo` to function signatures

    function createTodo(text):Todo {
        return {
            title: text,
            completed: false
        }
    }

Add Definition Files
--------------------

- Get them from [DefinitelyTyped][dt]
- Add [`angular.d.ts`][angular.d.ts] and [`jquery.d.ts`][jquery.d.ts] to a types folder
- Add links to [`types.ts`][types.ts]

```
/// <reference path="./types/jquery/jquery.d.ts"/>
/// <reference path="./types/angularjs/angular.d.ts"/>
/// <reference path="./types/angularjs/angular-route.d.ts"/>

interface Todo {
    completed: boolean;
    title: string;
}
```

Angular Controller
------------------

convert [`todoCtrl.js`][todoCtrl.js] to [`todoCtrl.ts`][todoCtrl.ts]

    // todoCtrl.js
    todomvc.controller('TodoCtrl', function TodoCtrl($scope, $routeParams, todoStorage, filterFilter) {
        var todos = $scope.todos = todoStorage.get();
        ...
    })

Add some interfaces for the scope and params

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

Add types to the signature

    todomvc.controller('TodoCtrl', function TodoCtrl($scope:TodoCtrlScope, $routeParams:TodoCtrlRouteParams, todoStorage:TodoStorage, filterFilter) {
        var todos = $scope.todos = todoStorage.get();
        ...
    })

Angular Service
---------------

- use a class to convert [`todoStorage.js`][todoStorage.js] to [`todoStorage.ts`][todoStorage.ts]

```
todomvc.factory('todoStorage', function () {
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
```

```
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
```

for classes use `.service()` instead of `.factory()`

```
todomvc.service('todoStorage', TodoStorage)
```

Lets you formalize an API

Add a build step
----------------

- add compile command to grunt, watchers
- see [`Gruntfile.js`][Gruntfile.js]
- don't type your Gruntfile. 

No way to type views :(
-----------------------

    <!-- should be .title, but no error -->
    <label>{{todo.text}}</label>

Using ES6 Modules
-----------------

- simplest: just include all the generated .js files
- add a build script: `grunt concat`
- to namespace, use internal modules
- with browserify or AMD: use external modules

Demo a Refactor? Or some other cool change
------------------------------------------

+ show it in action. need a good example.
+ live code baby!!!

What about Dart? Coffeescript?
------------------------------

- can only use one transpiler
- was worth giving up [Coffeescript](http://coffeescript.org/)
- Dart has a cool type system, but it is all-in. Poor code reuse. 

IT'S OVER!
==========

[github.com/seanhess/angularjs-typescript][angularjs-typescript]

Concat Me: [@seanhess][@seanhess]

[dt]: https://github.com/borisyankov/DefinitelyTyped
[typescript]: http://www.typescriptlang.org/
[angular]: http://angularjs.org/
[types.ts]: public/js/types.ts
[angular.d.ts]: public/js/types/angularjs/angular.d.ts
[jquery.d.ts]: public/js/types/jquery/jquery.d.ts

[todoStorage.js]: http://github.com/seanhess/angularjs-typescript/blob/js/public/js/services/todoStorage.js
[todoStorage.ts]: public/js/services/todoStorage.ts

[todoCtrl.js]: http://github.com/seanhess/angularjs-typescript/blob/js/public/js/controllers/todoCtrl.js
[todoCtrl.ts]: public/js/controllers/todoCtrl.ts

[Gruntfile.js]: Gruntfile.js

[angularjs-typescript]: http://github.com/seanhess/angularjs-typescript
[@seanhess]: http://twitter.com/seanhess


TODO: paste code into presentation
TODO: refactoring/full example


