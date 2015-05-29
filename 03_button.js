var chalk = require('chalk'),
    five = require('johnny-five'),
    board = new five.Board();

// Blink
board.on('ready', function() {
    var button = new five.Button(process.env.BUTTON || 2),
        led = five.Led(11);

    button.on('press', function() {
        console.log('Light ' + chalk.red('on'));
        led.on();
    });

    button.on('hold', function() {
        led.blink(50);
    });

    button.on('release', function() {
        console.log('Light off');
        led.stop().off();
    });
});
