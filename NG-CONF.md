OFFICIAL OUTLINE: ANGULAR + TYPESCRIPT
======================================

20 minutes total
Intro (MAX 5 minutes): what I will show you - it's awesome because X, Y, and Z, but no proof
Intro to syntax (5 minutes): how the features work, begin to see
Concrete example (5 minutes): see syntax at work. you are convinced



Follow Along:
-------------

[http://github.com/seanhess/angularjs-typescript](http://github.com/seanhess/angularjs-typescript)

About Me
--------

Sean Hess

- [@seanhess](http://twitter.com/seanhess)
- [http://seanhess.github.io](http://seanhess.github.io)
- [http://github.com/seanhess](http://github.com/seanhess/)


WHY TYPESCRIPT
==================================

Story of a Javascript team
--------------------------

Story: Started out small, it was great. Hired people, larger applications. Critical/legacy applications. We started to slow down. Tests were a huge amount of effort and hard to maintain.

Formalize your decisions
------------------------

"But I want to be free!"

- tests and documentation
- avoid huge up-front costs
- when you know you want something to stay the same

Cost vs Benefits
----------------

- every way to enforce constraints and prevent bugs costs something
- tests: up-front investment, skill, 
- documentation: maintenance, prototyping 

Big Benefits
------------------------------

- similar benefits to testing
- catch errors in context (line, early)
- enforce constraints
- modern type system = catch lots of errors
- some self-documentation
- like tests INLINE with your code, automatically in step. Like a whole CI suite.
- es6 features

Small Cost
--------------------------
- it's just JS/ES6. Clean output
- optional types
- easy - inferred typing

- 80/20 rule: 80% of the benefit of testing, with 20% of the effort



WHAT IS TYPESCRIPT
==================

Getting Started
---------------

Install Typescript

    > npm install -g typescript

Start With Javascript

    var name = "world"

    function hello(name) {
        alert("hello " + name)
    }

    hello(name)

Compile It
    
    > tsc test.ts

Add Types to Variables
----------------------

Use the Typescript Playground: [http://www.typescriptlang.org/Playground/](http://www.typescriptlang.org/Playground/)

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

    function fullName(user:User):string {
        return user.firstName + " " + user.lastName;
    }

    // matches any object
    var user:User = {firstName:"Very", lastName:"User"}

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

External Modules

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
        }
    }

    function MyController(scope:ng.IScope) {}

IDE and Editor Integration
--------------------------

Error checking and Autocomplete:

- [Sublime Text 3](https://github.com/Railk/T3S)
- [WebStorm](http://blog.jetbrains.com/webstorm/2013/11/enjoy-typescript-in-webstorm/)
- [Vim](https://github.com/clausreinke/typescript-tools)
- [Visual Studio](http://www.microsoft.com/en-us/download/details.aspx?id=34790)


TYPESCRIPT + ANGULAR
====================

Let's get them to play nice...

Start with your Data Model
--------------------------

Make a file with shared application types: `applicationTypes.ts`

    interface User {
        firstName:string;
        lastName:string;
    }

    interface Post {
        user: User;
        text: string;
        created: Date;
        comments: Comment[];
    }

    interface Comment {
        text: string;
        user: User;
    }

    // another file
    function somethingWithPost(post:Post) {
        // now it will catch errors for you
        // easier to think about
    }

- good for thinking about your app
- you want to enforce these, trust me
- only use interfaces, not classes... no converting

Add Definition Files
--------------------

Angular Controller
------------------

- example
- $http:ng.IHttpService

Add Constraints Incrementally
-----------------------------

- when they make sense

Angular Service
---------------

- formalize an API
- can use classes

Add a build step
----------------

- grunt demo?

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

[dt]: https://github.com/borisyankov/DefinitelyTyped
[typescript]: http://www.typescriptlang.org/
[angular]: http://angularjs.org/
