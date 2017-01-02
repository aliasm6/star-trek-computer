(function() {

  'use strict';

  angular
    .module('myApp.config', [])
    .config(appConfig);

  function appConfig($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: './src/js/components/main/main.view.html',
      controller: 'mainController',
      controllerAs: 'mainCtrl',
      css: './src/css/main.css'
    })
    .when('/authenticate', {
      templateUrl: './src/js/components/lcars/lcars.view.html',
      controller: 'lcarsController',
      controllerAs: 'lcarsCtrl',
      css: './src/css/lcars.css'
    });
  }

})();
