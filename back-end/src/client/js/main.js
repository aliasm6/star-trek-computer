(function () {

  let listening = false;

  annyang.start();

  var initialCommand = {
    'computer': function() {
      startListening();
    }
  };

  annyang.addCommands(initialCommand);
  var commands = {
    'testing': function() {
      console.log('Hello World');
    },
    'go to the next page': function() {
      $.ajax({
        URL: 'https://localhost:3000/nextpage'
      })
      .then(data => {
        console.log(data);
      })
      .fail(error => {
        console.log(error);
      });
    }
  };

  function startListening() {
    annyang.addCommands(commands);
    console.log('thumbs up');
  }

})();
