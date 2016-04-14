'use strict';

const isWhole = require('is-whole-number');

const pad = num => {
    if (num <= 9 && num >= 0 && isWhole(num)) {
        num = '0' + num;
    }

    return num;
};

module.exports = num => {
    if (Array.isArray(num)) {
        return num.map(pad);
    }

    return pad(num);
};
