var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // Create a new generic sensor instance for
  // a sensor connected to an analog (ADC) pin
  var sensor = new five.Sensor({
      controller:"AM2320",
      pin: "A4",
      freq: 3000
  });
  

  // When the sensor value changes, log the value
  sensor.on("change", function(value) {
      
   var temp = value * (5000/1024) ;
   var Ctemp = [temp - 500] / 100;
   var Dtemp = Ctemp.toFixed();  
    console.log(Dtemp);
  });
});