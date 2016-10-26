'use strict';

let assert = require('power-assert');
let Erande = require('erande.js');

suite('選んで', function() {

    test('お肉を選ぶこと', function() {
        let erande = new Erande();

        assert.strictEqual(erande.randomize('選んで お肉'), 'お肉を選んだ');
    });

});
