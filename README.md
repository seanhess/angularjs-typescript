AngularJS Bootstrap Project (Typescript)
========================================

Setup
-----

    npm install -g grunt-cli

Client
------
* [Typescript](http://www.typescriptlang.org/). Strict typing for Javascript
* [AngularJS](http://angularjs.org/). Web application framework
* [jQuery](http://jquery.com/)
* [Browserify](http://browserify.org/)
* [Node](http://nodejs.org/). Server Javascript
* [Bootstrap](http://getbootstrap.com/). Css Framework
* [Bower](https://github.com/bower/bower). Use browserify+npm instead.

TODO
----

- BUG: cannot find module jquery
- browserify jQuery and Bootstrap together, into common.js or vendor.js
- automatically start server on watch... wait, just do watch second

Tasks
-----

### Install Dependencies

    npm install
    grunt install

### Build

    grunt

### Live compile on save

    grunt watch

    # in another tab
    nodemon

This will already recompile the app, the less files, and the server separately, if you change any of the respective files. 

### Live reload on save

1. Install this chrome plugin https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en, or uncomment the `<script>` tag in `index.html`
2. Open the web page and your text editor side-by-side
3. Edit any file, watch grunt recompile and automatically reload the web page when it is done

### Install Definitely Typed dependencies

They are installed automatically with [TPM](http://github.com/seanhess/tpm). Install with `npm install -g tpm`, then they will be installed to `server/types` and `public/app/types` whenever you run `grunt install`.

If you just installed a new npm module, run 'grunt tpm' to install them. 

### Front end Dependencies

We want to compile all dependencies into one file, and make them available through external to the rest of the program. These do not change nearly as often as the app itself, and it's too slow otherwise. https://github.com/eugeneware/bower-resolve

Types of dependencies:
- big front-end libraries: jQuery, AngularJS (NPM)
- big front-end libraries that no one depends on: bootstrap 
- pure Javascript code: Underscore, base64, uuid generation? (NPM)

Plan: 
1. Automatically bundle any NPM dependencies with browserify. 
2. Include any bower dependencies by hand.

The idea is to SHARE code between client and server. It's all just Javascript. So the entire APP depends on them, not separately. 

Disadvantage: there's no way to separate the dependency lists. Would be nice for index generation.

Todo
----

- Debowerify slowed it down a lot: http://benclinkinbeard.com/blog/2013/08/external-bundles-for-faster-browserify-builds/ - Or come up with some other way to do bootstrap

### Easy way to install dependencies. You don't need a config file, you already have one. You already have to search NPM for packages. It would be nice if you could KNOW which ones map to which definitely typed repositories. 

- API and library that return the correct definitely typed file for a given node module. It can do some simple name matching, or all of them. 

- Grunt Plugin that concatenates all the definition files specified into one big one. 

- Grunt Plugin that reads the packages from package.json, uses the above service to reference them

### WAITING FOR PACKAGE AUTHORS

- Live reload server in grunt. (Blocked by grunt-develop - not working)
- Get `import` to work for JQuery and angular

