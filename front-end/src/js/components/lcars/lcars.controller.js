(function() {

  'use strict';

  angular
    .module('myApp.components.lcars', [])
    .controller('lcarsController', lcarsController);

  lcarsController.$inject = ['$scope', 'AnnyangService'];

  function lcarsController($scope, AnnyangService) {
    /*jshint validthis: true */

    this.commands = [
      {
        'Computer whats the weather like today': function() {
          //get request to weather api
        }
      }
    ]
  }

})();
