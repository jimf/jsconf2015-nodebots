var five = require('johnny-five'),
    board = new five.Board();

board.on('ready', function() {
    var range = [0, 100],
        sensorLeft = new five.Sensor('A0'),
        sensorRight = new five.Sensor('A1'),
        led = new five.Led(13);

    led.on();

    var motorRight = new five.Motor(five.Motor.SHIELD_CONFIGS.POLOLU_DRV8835_SHIELD.M1),
        motorLeft = new five.Motor(five.Motor.SHIELD_CONFIGS.POLOLU_DRV8835_SHIELD.M2),
        speeds = [31, 63, 127, 255];

    motorLeft.forward(255);
    motorRight.forward(255);

    sensorLeft.scale(range).on('data', function() {
        var s = 30 - this.value;
        console.log(s);
        if (s <= 0) {
            motorLeft.stop();
        } else {
            motorRight.forward(speeds[Math.floor(s / speeds.length)] * 0.5);
            motorLeft.forward(speeds[Math.floor(s / speeds.length)]);
        }
    });

    sensorRight.scale(range).on('data', function() {
        var s = 30 - this.value;
        if (s <= 0) {
            motorRight.stop();
        } else {
            motorRight.forward(speeds[Math.floor(s / speeds.length)] * 0.5);
            motorRight.forward(speeds[Math.floor(s / speeds.length)]);
        }
    });
});
