AngularJS + Typescript ♥♥
=========================

Follow Along:
-------------

[github.com/seanhess/angularjs-typescript](http://github.com/seanhess/angularjs-typescript)

About Me
--------

Sean Hess

- Twitter: [@seanhess](http://twitter.com/seanhess)
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

- [Sublime Text 3 - Full Plugin](https://github.com/Railk/T3S)
- [Sublime Text 3 - Build Errors](https://github.com/seanhess/sublime-build-errors)
- [Vim](https://github.com/clausreinke/typescript-tools)
- [WebStorm](http://blog.jetbrains.com/webstorm/2013/11/enjoy-typescript-in-webstorm/)
- [Visual Studio](http://www.microsoft.com/en-us/download/details.aspx?id=34790)


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

Add `:Todo` everywhere you use it

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

Add Constraints Incrementally
-----------------------------

- when they make sense
- don't have to add it everywhere
- as you formalize things

Angular Service
---------------

- formalize an API
- use a class to convert [`todoStorage.js`][todoStorage.js] to [`todoStorage.ts`][todoStorage.ts]

Angular Controller
------------------

- example
- $http:ng.IHttpService
- add a scope interface if you want

Add a build step
----------------

- grunt demo

No way to type views :(
-----------------------

<!-- will not throw an error -->
<div>{{currentUser.firstNaem}}</div>

Ignore ES6 Modules, Probably
----------------------------

- turn .ts files into .js files
- include them normally
- If already using browserify or AMD then go ahead and use them. 

- show internal modules?

Demo a Refactor? Or some other cool change
------------------------------------------

+ show it in action. need a good example.
- show an example where you wouldn't catch the error. In an inner block


What about Dart? Coffeescript?
------------------------------


[dt]: https://github.com/borisyankov/DefinitelyTyped
[typescript]: http://www.typescriptlang.org/
[angular]: http://angularjs.org/
[types.ts]: public/js/types.ts
[angular.d.ts]: public/js/types/angularjs/angular.d.ts
[jquery.d.ts]: public/js/types/jquery/jquery.d.ts
[todoStorage.js]: public/js/services/todoStorage.js
[todoStorage.ts]: public/js/services/todoStorage.ts

TODO

- I need a good sample application. A blogging engine? Uses some awesome back end
    - messaging: just an anonymous message board

- Other links: https://github.com/tastejs/todomvc/tree/gh-pages/labs/architecture-examples/typescript-angular
- typescript + angular = MVCTODO

- link: example of using the "vm" method for controllers

