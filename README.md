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

Not Used
--------

* [Bower](https://github.com/bower/bower). Use browserify+npm instead.

Tasks
-----

### Install Dependencies

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

