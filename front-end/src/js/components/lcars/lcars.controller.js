(function() {

  'use strict';

  angular
    .module('myApp.components.lcars', [])
    .controller('lcarsController', lcarsController);

  lcarsController.$inject = ['$scope', 'AnnyangService', '$http'];

  function lcarsController($scope, AnnyangService, $http) {
    /*jshint validthis: true */

    var vm = this;

    vm.info = 'Default';

    vm.commands = [
      {
        'computer what is the weather like today': function() {
          console.log('something happened');
          vm.info = 'Loading...';
          console.log(vm.info);
          getLocation();
          function getLocation() {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(showPosition);
            } else {
              console.log('Geolocation is not supported by this browser.');
            }
          }
          function showPosition(position) {
            getWeather(position.coords.latitude, position.coords.longitude);
          }
          function getWeather(latitude, longitude) {
            $http.get(`http://api.openweathermap.org/data/2.5/find?lat=${latitude}&lon=${longitude}&appid=9a69d564958d7b3e601fc10630d866cc`)
            .then(data => {
              console.log(data);
              vm.info = data.data.list[0].name;
            })
          }
        }
      }
    ]

    AnnyangService.addCommand(this.commands);
  }

})();
