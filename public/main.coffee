require.config
  shim:
    underscore: exports: '_'
    ngResource:
      exports: 'angular'
      deps: ['angular']
    angular:
      exports: 'angular'
      deps: ['jquery']
    jquery: exports: 'jQuery'

  paths:
    underscore: 'underscore/index'
    angular: 'AngularJS/angular'
    ngResource: 'angular-modules/resource'
    jquery: 'jquery/jquery'
    #fjs: 'fjs/fjs.min'

# Bootstrap angularjs using requirejs. 
define (require) ->
  angular = require 'angular'
  ngResource = require 'ngResource'

  TestCtrl = require 'controllers/TestCtrl'

  #ItemsService = require 'services/ItemsService'
  #filters = require 'js/filters/index'

  ## ROUTER ###########
  app = angular.module 'app', ['ngResource'], ($routeProvider) ->
    $routeProvider.when '/test', {templateUrl: 'partials/test.html', controller: TestCtrl}
    $routeProvider.otherwise {redirectTo: '/test'}

  ## FILTERS ###########
  #app.filter('checkmark', filters.checkmark)
  
  ## DIRECTIVES ########
  #app.directive('example', example)

  ## SERVICES #########
  #app.value('version', '0.1')
  #app.factory('Items', ItemsService)

  angular.bootstrap document, ['app']
