var five = require('johnny-five'),
    board = new five.Board();

board.on('ready', function() {
    var led = new five.Led(11),
        rotary = new five.Sensor('A0');

    rotary.on('change', function() {
        // Analog sensors produce a 10-bit value,
        // but led brightness is an 8-bit PWM value.
        // Convert by shifting the value's bits
        // two places to the right.
        led.brightness(this.value >> 2);
    });
});
