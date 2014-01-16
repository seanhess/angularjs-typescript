module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    exec: {
      // submodules: { cmd: 'git submodule update --init' },
      npm: { cmd: 'npm install' },
      bower: { cmd: 'bower install'},
      server: { cmd: 'node server/server.js' },
      tsServer: { cmd: 'node_modules/.bin/tsc server/server.ts -m commonjs -t ES5'},
      tsPublic: { cmd: 'node_modules/.bin/tsc public/js/app.ts public/js/**/*.ts -t ES5'},
    },

    less: {
      development: {
        options: {},
        // compile ALL less files found in css, and nested anywhere in views
        files: { "public/css/main.css" : ["public/css/*.less", "public/app/*/**.less"] }
      }
    },

    watch: {
      options: { spawn: false },
      public: {
        files: ["public/**/*.ts"],
        tasks: ["exec:tsPublic"],
        options: { livereload: true },
      },
      server: {
        files: ["server/*.ts", "server/**/*.ts"],
        tasks: ["exec:tsServer", "develop"],
      },
      html: {
        files: ["public/**/*.html", "public/*.html"],
        options: { livereload: true },
      },
    },

    develop: {
      server: {
        file: 'server/server.js',
        nodeArgs: [],
        args: [],
        env: { NODE_ENV: 'development', PORT: 4000 },
      }
    },

    clean: {
      // remove old javascript files
      public: ["public/js/*.js*", "public/js/**/*.js*"]
    },

  });

  grunt.loadNpmTasks('grunt-exec')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-develop')
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('default', ['exec:tsServer', 'exec:tsPublic', 'develop', 'watch'])
  
};