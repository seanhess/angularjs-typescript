module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    exec: {
      // submodules: { cmd: 'git submodule update --init' },
      npm: { cmd: 'npm install' },
      bower: { cmd: 'bower install'},
      server: { cmd: 'node server/server.js' },
    },

    typescript: {
      server: {
        src: ['server/server.ts'],
        options: {
          module: 'commonjs', //or commonjs
          target: 'es5', //or es3
          // sourcemap: true,
          // fullSourceMapPath: true,
        }
      },
      // compile ALL Typescript files in the project
      public: {
        src: ['public/app/app.ts', 'public/app/**/*.ts'],
        // src: ['public/app/app.ts'],
        options: {
          module: 'commonjs', //or commonjs
          target: 'es5', //or es3
          sourcemap: true,
          // fullSourceMapPath: true,
        }
      }
    },

    less: {
      development: {
        options: {},
        // compile ALL less files found in css, and nested anywhere in views
        files: { "public/css/main.css" : ["public/css/*.less", "public/app/*/**.less"] }
      }
    },

    browserify: {
      app: {
        src: ['public/app/app.js', 'public/app/**/*.js'],
        dest: 'public/index.js',
        // options: {
        //   external: ["jquery"],
        //   alias: ["angular-browserify:angular"],
        // },
        
        // debowerify is REALLY slow, include them statically instead?
        // even if there's nothing there?? Why??
        // options: {
        //   transform: ['debowerify'],
        // },
      },

      // TODO: bundle vendor stuff together? Only if slow
      // vendor: {
      //   src: [''],
      //   dest: 'public/vendor.js',
      // },
    },

    watch: {
      options: { spawn: false },
      public: {
        files: ["public/**/*.ts"],
        tasks: ["typescript:public", "browserify:app"],
        options: { livereload: true },
      },
      server: {
        files: ["server/**/*.ts", "server/*.ts"],
        tasks: ["typescript:server", "develop"],
      },
      less: {
        files: ["public/**/*.less"],
        tasks: ["less"],
        options: { livereload: true },
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
        env: { NODE_ENV: 'development', PORT: 3002 },
      }
    },

    "tpm-install": {
      server: {src: "package.json", dest: "types/"},
      bower: {src: "bower.json", dest: "types/"},
    },

    "tpm-index": {
      // there's no good way to separate them, so we're just doing it twice
      // server: {src: ["types/**/*.d.ts"], dest: "server/all.d.ts"},
      // public: {src: ["types/**/*.d.ts"], dest: "public/app/all.d.ts"},
      deps: {src: ["types/**/*.d.ts"], dest: "types/all.d.ts"},
      // public: {src: ["public/app/**/*.ts"], dest: "public/app/app.d.ts"},
    },

    clean: {
      // remove old javascript files
      public: ["public/app/*.js*", "public/app/**/*.js*"]
    },

    // ngtemplates:  {
    //   views:        {
    //     cwd:      'public',
    //     src:      ['app/views/*.html', 'app/views/**/*.html'],
    //     dest:     'public/templates.js'
    //   }
    // },

    // inline_angular_templates: {
    //     dist: {
    //         options: {
    //             base: 'public',         // (Optional) ID of the <script> tag will be relative to this folder. Default is project dir.
    //             // prefix: '/',            // (Optional) Prefix path to the ID. Default is empty string.
    //             selector: 'body',       // (Optional) CSS selector of the element to use to insert the templates. Default is `body`.
    //             method: 'prepend',       // (Optional) DOM insert method. Default is `prepend`.
    //         },
    //         files: {
    //             'public/index.html': ['public/app/views/*.html'],
    //         }
    //     }
    // }

  });

  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-exec')
  grunt.loadNpmTasks('grunt-typescript')
  grunt.loadNpmTasks('grunt-contrib-less')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-develop')
  grunt.loadNpmTasks('typescript-tpm')
  grunt.loadNpmTasks('grunt-contrib-clean');
  // grunt.loadNpmTasks('grunt-inline-angular-templates');
  // grunt.loadNpmTasks('grunt-angular-templates');
  // grunt.loadNpmTasks('grunt-concurrent')

  // Default task(s).
  grunt.registerTask('default', ['clean', 'typescript', 'browserify', 'less', 'develop', 'watch'])
  grunt.registerTask('install', ['exec:npm', 'exec:bower', 'exec:npm', 'tpm']) // , 'exec:submodules'
  grunt.registerTask("tpm", ['tpm-install', 'tpm-index'])
  
};