'use strict';

module.exports = function() {
    let counter = 1;

    return function() {
        return counter++;
    };
};
