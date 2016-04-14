'use strict';

const assert = require('assert');
const zeroPad = require('./index');

describe('#zeroPad', () => {
    it('should add 0 to numbers < 10 and >= 0', () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

        numbers.forEach((val, i) => assert(zeroPad(val) === '0' + numbers[i]));
    });

    it('should not add 0 to numbers if is > 10 or < 0 and is whole number', () => {
        const numbers = [-1, -2, 0.1, 0.7, 10, 13];

        numbers.forEach((val, i) => assert(zeroPad(val) === numbers[i]));
    });

    it('should handle an array as argument (with numbers)', () => {
        const numbers = ['1', '-2', 3, 4, -1];
        const res = ['01', '-2', '03', '04', -1];

        zeroPad(numbers).forEach((val, i) => assert(val === res[i]));
    });

    it('should zero pad date', () => {
        const date = new Date(2016, 10, 5);
        const pad = zeroPad([
            date.getFullYear(),
            date.getMonth(),
            date.getDate()
        ]);

        assert(pad.join('-') === '2016-10-05');
    });
});
