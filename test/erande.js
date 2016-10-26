'use strict';

let assert = require('power-assert');
let closure = require('erande.js');

suite('クロージャ', function() {
    test('1回目の呼び出しでは1を返すこと', function() {
        let counter = closure();

        assert.strictEqual(counter(), 1);
    });

    test('2回目の呼び出しでは1を返すこと', function() {
        let counter = closure();
        counter();

        assert.strictEqual(counter(), 2);
    });
});
