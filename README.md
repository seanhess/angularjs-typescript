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
