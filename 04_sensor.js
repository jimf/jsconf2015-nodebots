var Barcli = require('barcli'),
    five = require('johnny-five'),
    board = new five.Board({
        debug: false, repl: false
    });

board.on('ready', function() {
    var range = [0, 100],
        graph = new Barcli({
            label: 'Potentiometer',
            range: range,
        }),
        rotary = new five.Sensor('A0');

    rotary.scale(range).on('change', function() {
        graph.update(this.value);
    });
});
