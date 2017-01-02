(function(annyang) {
  'use strict';

  function AnnyangService($rootScope) {
    var service = {};

    // COMMANDS
    service.commands = {};

    service.addCommand = function(arrayOfObjects) {
      arrayOfObjects.forEach(object => {
        let name = Object.keys(object)[0];
        let callback = object[name];
        var command = {};
        command[name] = function(args) {
          $rootScope.$apply(callback(args));
        };
        angular.extend(service.commands, command);

        annyang.addCommands(service.commands);

        console.debug('added command "' + name + '"', service.commands);
      });
    };

    service.start = function() {
      annyang.addCommands(service.commands);
      annyang.debug(true);
      annyang.start();
    };

    return service;
  }

  angular.module('myApp')
    .factory('AnnyangService', AnnyangService);

}(window.annyang));
