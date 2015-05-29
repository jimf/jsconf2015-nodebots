var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
    var led = new five.Led(11);

    // In the REPL:
    // > led.on();
    // > led.off();
    // > led.blink();
    // > led.stop();
    // > led.pulse();
    this.repl.inject({
        led: led
    });
});
