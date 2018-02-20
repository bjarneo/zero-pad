'use strict';

const isWhole = require('is-whole-number');

function pad(num) {
    if (num <= 9 && num >= 0 && isWhole(num)) {
        num = '0' + num;
    }

    return num;
}

module.exports = function zeroPad(num) {
    if (Array.isArray(num)) {
        return num.map(pad);
    }

    return pad(num);
};
