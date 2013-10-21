AngularJS Bootstrap Project (Typescript)
========================================

Setup
-----

    npm install -g grunt-cli
    npm install
    grunt install
    grunt

TODO
----

- deploy

- use new service from NPM is as easy as installing it
- use new directive from NPM is as easy as installing it
- make new service and use it without registering it?

- source maps

DEPLOY
- concatenate templates into one file for deployment
- minify JS
- concat libraries

TEST
- are source maps working?


The problem is that I'm registering it at a different place. In the main file. That's not the normal way you do it. 

Angular team DID say they would switch to ES6 modules. 

"The Future of AngularJS" - https://docs.google.com/presentation/d/1Gv-dvU-yy6WY7SiNJ9QRo9XayPS6N2jtgWezdRpoI04/edit?pli=1#slide=id.p
    - new dependency injection based on es6 modules
    - easier to share modules
    - future: module "myStuff" {}


Application Dependencies
------------------------

Angular works most seamlessly with a global scope, with all application code concatenated or included in multiple script tags. It's module system helps resolve any conflicts, and Typescript takes us rest of the way there. 

PROBLEM: you can't both use `require` and expect to compile everything

PROBLEM: I want to be able to `require` generic javascript code and use it, via NPM. But does that really matter? Like what even? It's MUCH more likely you'll be dealing with Angular services, jQuery plugins, etc. They aren't bootstrapped anyway. 

NEEDS
[ ] compile everything at once
[ ] include everything automatically
[ ] Bootstrapping all in the same file

CONCAT FILES
only works if the file has no require statements in it

Dependencies
------------

Any pure Javascript code is installed with NPM, and loaded into the browser using [Browserify][browserify]. We WANT to share dependencies between the two systems, which is why we have a single package.json file for both client and server. 

Any big front-end libraries are installed with bower and included by hand. We will use fewer of these, they're not designed to be included, and depend on each other. 



Tasks
-----

### Build, Start the server, Live compile, and Live reload

    grunt

### Live reload on save

1. Install this chrome plugin https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en, or uncomment the `<script>` tag in `index.html`
2. Open the web page and your text editor side-by-side
3. Edit any file, watch grunt recompile and automatically reload the web page when it is done

### Install Definitely Typed dependencies

They are installed automatically with [TPM][tpm]. Install with `npm install -g tpm`, then they will be installed to `server/types` and `public/app/types` whenever you run `grunt install`.

If you just installed a new npm module, run 'grunt tpm' to install them. 




[browserify]: http://browserify.org/
[TPM]: http://github.com/seanhess/tpm

[Typescript]: http://www.typescriptlang.org/
[AngularJS]: http://angularjs.org/
[jQuery]: http://jquery.com/
[Browserify]: http://browserify.org/
[Node]: http://nodejs.org/
[Bootstrap]: http://getbootstrap.com/
[Bower]: https://github.com/bower/bower
