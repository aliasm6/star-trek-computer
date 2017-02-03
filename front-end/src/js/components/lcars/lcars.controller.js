(function() {

  'use strict';

  angular
    .module('myApp.components.lcars', [])
    .controller('lcarsController', lcarsController);

  lcarsController.$inject = ['$scope', 'AnnyangService', '$http'];

  function lcarsController($scope, AnnyangService, $http) {
    /*jshint validthis: true */

    var vm = this;

    vm.dataHeader = '';
    vm.description = '';
    vm.temperature = '';

    vm.commands = [
      //Issue getting the right city due to the array that is returned from the API call.
      {
        'computer what is the weather like today': function() {
          vm.dataHeader = 'Loading...';
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
            $http.get(`http://api.openweathermap.org/data/2.5/find?lat=${latitude}&lon=${longitude}&appid=9a69d564958d7b3e601fc10630d866cc&units=imperial`)
            .then(data => {
              console.log(data);
              vm.dataHeader = data.data.list[0].name;
              vm.description = data.data.list[0].weather[0].description;
              vm.temperature = data.data.list[0].main.temp + '°F';
            })
          }
        }
      },
      {
        'computer get me a news article': function() {
          vm.dataHeader = 'Loading...';
          $http.get(`https://newsapi.org/v1/articles\?source\=the-next-web\&sortBy\=latest\&apiKey\=a51edb9a245f4c029897db94b376c52d`)
          .then(data => {
            console.log(data);
            vm.dataHeader = data.data.articles[0].title;
          })
        }
      },
      {
        'computer get me a news article from *source': function(source) {
          vm.dataHeader = 'Loading...';
          $http.get(`https://newsapi.org/v1/articles\?source\=${source}\&apiKey\=a51edb9a245f4c029897db94b376c52d`)
          .then(data => {
            console.log(data);
            vm.dataHeader = data.data.articles[0].title;
          })
        }
      }
    ]

    AnnyangService.addCommand(this.commands);

    AnnyangService.start();
  }

})();
