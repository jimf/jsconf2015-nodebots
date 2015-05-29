var five = require('johnny-five'),
    board = new five.Board(),
    Rainbow = require('rainbowvis.js'),
    rgbHex = require('rgb-hex');

board.on('ready', function() {
    var temp = new five.Temperature({
            controller: 'TMP36',
            pin: 'A0'
        }),
        rgb = new five.Led.RGB({
            pins: [3, 5, 6],
            isAnode: true
        }),
        rainbow = new Rainbow();

    rainbow.setSpectrum('blue', 'red');
    rainbow.setNumberRange(18, 30);

    temp.on('change', function() {
        // Write an algorithm that converts temperature (F, K or C)
        // into an RGB hex value.
        console.log('Temperature: ' + Math.round(this.celsius) + '°C');
        rgb.color(rainbow.colourAt(Math.round(this.celsius)));
    });
});
