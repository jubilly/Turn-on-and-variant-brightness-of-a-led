var five = require("johnny-five");
var board = new five.Board();
board.on("ready", function() {
  var led = new five.Led(6);
  this.repl.inject({
    led: led
  });
 
});
$(document).ready(function() {

    $("#button").click(function() {
    
    });
});