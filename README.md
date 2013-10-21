AngularJS Typescript Seed
=========================

This project aims to demonstrate the "best" project structure and workflow for an [AngularJS][angular] app written in [Typescript][typescript]. 

Setup
-----

Install grunt and all dependencies dependencies

    npm install -g grunt-cli
    npm install
    grunt install

Compile everything, start the server, and live reload whenever you change a file. 

    grunt

Automatic File Watching and LiveReload
--------------------------------------

The default [Grunt][grunt] task builds everything, watches for changes, and starts the server. You just run this command and start making changes. 

    grunt

[Livereload](livereload) will automatically refresh your browser after the build process finishes. Install [this chrome plugin][livereload], hit the button in chrome, and make changes.

Simplified Dependencies
-----------------------

You can add dependencies to [package.json][npm] or [bower.json][bower] like normal. Use `grunt install` to install them and their declarations.

    grunt install

This will also download all the declaration files that exist from [DefinitelyTyped][dt] and add them to the `types/` folder. It creates a file, `types/all.d.ts` that references all of them for easy including. 

To use a package from [NPM][npm], you can just require it. [Browserify][browserify] will make sure to include the source in your project.

    import _ = require('underscore')

To use a package from [Bower][bower] you currently have to add it to `index.html`.

Project Organization
--------------------

Angular works most easily with a global scope, with all application code concatenated or included in multiple script tags. After playing with many different structures and module patterns, the simpliest solution was to concat all `.ts` files found under `public/app`. You can still use `require` for [NPM][npm] dependencies in any file.

Any LESS files in `public/app/css` and in `public/app/views` will be automatically included in the output.

Technologies
-------------

[Typescript][typescript] is a compile-to-js language that adds ES6 features and an advanced strict type system, including generics, type inference, etc. [Click here][typescript] for more information.

[AngularJS][angular] is a Javascript framework that greatly simplifies making data-driven  web applications. 

[LESS][less] adds many useful features to CSS, including variables, mixins, file includes, and more. 

[Bootstrap][bootstrap] is a CSS framework that makes creating a nice-looking site much easier. 

TODO
----

- deploy
- source maps

DEPLOY
- concatenate templates into one file for deployment
- minify JS
- concat libraries


[browserify]: http://browserify.org/
[tpm]: http://github.com/seanhess/tpm

[livereload]: https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en
[npm]: npmjs.org
[dt]: https://github.com/borisyankov/DefinitelyTyped
[typescript]: http://www.typescriptlang.org/
[angular]: http://angularjs.org/
[jquery]: http://jquery.com/
[browserify]: http://browserify.org/
[node]: http://nodejs.org/
[bootstrap]: http://getbootstrap.com/
[bower]: https://github.com/bower/bower
[grunt]: http://gruntjs.com
[less]: lesscss.org