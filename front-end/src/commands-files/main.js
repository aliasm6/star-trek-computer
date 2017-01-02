// $(document).ready(function() {
//
//   annyang.start();
//
//   // var initialCommand = {
//   //   'computer': function() {
//   //     startListening();
//   //   }
//   // };
//   //
//   // annyang.addCommands(initialCommand);
//   var commands = {
//     'testing': function() {
//       console.log('Hello World');
//     },
//     'computer go to the next page': function() {
//       window.location.href = '#/nextpage';
//     },
//     'computer go to facebook': function() {
//       window.location.href = 'https://www.facebook.com';
//     },
//     'computer what is the weather like today': function() {
//       console.log('something happened');
//       getLocation();
//       function getLocation() {
//         if (navigator.geolocation) {
//           navigator.geolocation.getCurrentPosition(showPosition);
//         } else {
//           console.log('Geolocation is not supported by this browser.');
//         }
//       }
//       function showPosition(position) {
//         getWeather(position.coords.latitude, position.coords.longitude);
//       }
//       function getWeather(latitude, longitude) {
//         $.ajax({
//           url: `http://api.openweathermap.org/data/2.5/find?lat=${latitude}&lon=${longitude}&appid=9a69d564958d7b3e601fc10630d866cc`,
//           method: 'GET',
//           dataType: 'json'
//         })
//         .done(data => {
//           console.log(data);
//         })
//         .fail(error => {
//           console.log(error);
//         });
//       }
//     }
//   };
//
//   annyang.addCommands(commands);
//
//   function startListening() {
//     annyang.addCommands(commands);
//     console.log('thumbs up');
//   }
//
// });
