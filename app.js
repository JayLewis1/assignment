var five = require("johnny-five");
var mongoose = require('mongoose'); 
var board = new five.Board();

mongoose.Promise = global.Promise; 
mongoose.connect('mongodb://JayLewis:1plymouth.@ds111804.mlab.com:11804/arduino');

var db = mongoose.connection;

db.once('open', function() {
    var TempSchema = mongoose.Schema({
     temparature: String,
         date: { type: Date, default: Date.now }
 });
    
 var Temperature = mongoose.model('TemperatureByWindow', TempSchema); 

board.on("ready", function() {

  // Create a new generic sensor instance for
  // a sensor connected to an analog (ADC) pin
  var sensor = new five.Sensor({
      controller:"AM2320",
      pin: "A4",
      freq: 1000
  });
  

  // When the sensor value changes, log the value
  sensor.on("change", function(value) {
      
   var temp = value * (5000/1024) ; // converts 0-1023 from the ADC into 0-5000mV 
   var Ctemp = [temp - 500] / 100; // converts millivolts into temperature
   var Dtemp = Ctemp.toFixed(1);  //Rounds the data up into 1 decimal place
    
      
   var Temp_rec = new Temperature({ Dtemp:this.celsius + "°C" });
      
   Temp_rec.save(function (err, Temp_rec ) {
   if (err) return console.error(err);
         });   
      
    console.log(Dtemp + "°C");
      
      
    });   
  });
});