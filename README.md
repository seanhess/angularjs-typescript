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

- browserify jQuery and Bootstrap together, into common.js or vendor.js
- compile all templates into a single html file with <script> tags. Not working. Can't include. Try https://github.com/wmluke/grunt-inline-angular-templates instead. Will slow down development though eh?

Tasks
-----

### Install Dependencies

    npm install
    grunt install

### Build, Start the server, Live compile, and Live reload

    grunt

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

