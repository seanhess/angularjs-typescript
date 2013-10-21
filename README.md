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

Features
--------

Comes complete with [Grunt][grunt] workflows to make everything easier. 

    grunt



- Automatically manages client-side [NPM][npm] and [Bower][bower] dependencies, including installing declaration files from [DefinitelyTyped][dt]. 
- [Livereload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en) the web page whenever you save something (install chrome plugin)

Grunt Commands
---------------

This is the only command you really need. It compiles everything, watches for changes, and starts the server. 

    grunt

TODO
----

- deploy
- source maps

DEPLOY
- concatenate templates into one file for deployment
- minify JS
- concat libraries

Application Dependencies
------------------------

Angular works most easily with a global scope, with all application code concatenated or included in multiple script tags. 

You can assume that app.ts is included first, then all application code second. You can `require` code from NPM within any file, and it browserify will make it work. 

Dependencies
------------

Any pure Javascript code is installed with NPM, and loaded into the browser using [Browserify][browserify]. We WANT to share dependencies between the two systems, which is why we have a single package.json file for both client and server. 

Any big front-end libraries are installed with bower and included by hand. We will use fewer of these, they're not designed to be included, and depend on each other. 

Tasks
-----

### Live reload on save

1. Install this chrome plugin https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en, or uncomment the `<script>` tag in `index.html`
2. Open the web page and your text editor side-by-side
3. Edit any file, watch grunt recompile and automatically reload the web page when it is done

### Install Definitely Typed dependencies

They are installed automatically with [TPM][tpm]. Install with `npm install -g tpm`, then they will be installed to `server/types` and `public/app/types` whenever you run `grunt install`.

If you just installed a new npm module, run 'grunt tpm' to install them. 



Notes
-----

Easier directives? I could make a better syntax for it. Or I could just rewrite my article. It's not that hard. I think I get it now :) I'm ready. I'm done. Gogogo. 


[browserify]: http://browserify.org/
[tpm]: http://github.com/seanhess/tpm

[dt]: https://github.com/borisyankov/DefinitelyTyped
[typescript]: http://www.typescriptlang.org/
[angular]: http://angularjs.org/
[jquery]: http://jquery.com/
[browserify]: http://browserify.org/
[node]: http://nodejs.org/
[bootstrap]: http://getbootstrap.com/
[bower]: https://github.com/bower/bower
[grunt]: http://gruntjs.com