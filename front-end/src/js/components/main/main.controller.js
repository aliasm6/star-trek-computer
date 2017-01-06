(function(angular) {
  'use strict';

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope', 'AnnyangService', '$window'];

  function mainController($scope, AnnyangService, $window) {
    var vm = this;

    vm.message = '';

    vm.init = function() {
      // vm.clearResults();

      // AnnyangService.addCommand('*allSpeech', function(allSpeech) {
      //   console.debug(allSpeech);
      //   vm.addResult(allSpeech);
      // });

      vm.commands = [
        {
          'testing': function() {
            console.log('testing!');
          }
        },
        {
          'more testing': function() {
            console.log('so far so good');
          }
        },
        {
          'display word *val': function(val) {
            vm.message = val;
          }
        },
        {
          'Computer authenticate': function() {
            vm.changeLocation('authenticate');
          }
        }
      ]

      AnnyangService.addCommand(vm.commands);

      AnnyangService.start();
    };

    vm.addResult = function(result) {
      vm.results.push({
        content: result,
        date: new Date()
      });
      vm.message = result;
      console.log(vm.results);
    };

    vm.changeLocation = (string) => {
      $window.location.href = `#/${string}`;
    }

    vm.clearResults = function() {
      vm.results = [];
    };

    vm.init();
  }

  angular.module('myApp')
    .controller('mainController', mainController);

}(window.angular));
