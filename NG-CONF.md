OFFICIAL OUTLINE: ANGULAR + TYPESCRIPT
======================================

20 minutes total
Intro (5 minutes): what I will show you - it's awesome because X, Y, and Z, but no proof
Intro to syntax (5 minutes): how the features work, begin to see
Concrete example (5 minutes): see syntax at work. you are convinced


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

Add Types to Variables
----------------------

    var population:number = 3
    var name:string = "hello"
    var user:User;
    var names:string[];
    var anything = 33

Interfaces
----------

    interface IUser {
        firstName: string;
        lastName: string;
    }

    function fullName(user:User):string {
        return user.firstName + " " + user.lastName;
    }

ES6 Features
------------

Classes

    class User {
        constructor(private firstName:string, private lastName:string) {

        }

        fullName():string {
            return this.firstName + " " + this.lastName
        }
    }
    
Modules

    export function 

Fat Arrow Functions

    class User {
        public friends:User[];

        addFriend(user:User) {
            this.friends.push(user)
        }

        addFriends(users:User[]) {
            users.forEach((user) => this.addFriend(user))
        }
    }

IDE and Editor Integration
--------------------------

Show Sublime Text and Webstorm pictures

[ ] Sublime Text
[ ] Webstorm 

    - show what errors look like
    - show auto completion

+ Links

Definition Files
----------------
 
Show JQuery and Angular?



HOW TO ADD TYPESCRIPT TO YOUR ANGULAR PROJECT
=============================================

Made easy!

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
    function renderPost(post:Post) {
        // now it will catch errors for you
        // easier to think about
    }

- good for thinking about your app
- you want to enforce these, trust me
- only use interfaces, not classes... no converting

Angular Controller
------------------

- example

Add Constraints Incrementally
-----------------------------

- when they make sense

Angular Service
---------------

- formalize an API
- can use classes

Add Definition Files
--------------------

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

Demo a Refactor? Or some other cool change
------------------------------------------

+ show it in action


