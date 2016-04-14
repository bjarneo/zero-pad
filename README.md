zero-pad
======
![Travis](https://travis-ci.org/bjarneo/zero-pad.svg?branch=master)

Should prepend a 0 to whole numbers less than equal 9 and larger than equal 0. Perfect use case for dates.

Installation
------
```bash
$ npm i --save zero-pad
```

Usage
------
```js
const zeroPad = require('zero-pad');

console.log(zeroPad(7)); // 07
console.log(zeroPad(9)); // 09
console.log(zeroPad(-1)); // -1
console.log(zeroPad(0.1)); // 0.1

// With an array as argument
const arr = zeroPad([1, 10, 7]);
console.log(arr); // [01, 10, 07]

// Example with dates
const date = new Date(2016, 10, 5);
const pad = zeroPad([
  date.getFullYear(),
  date.getMonth(),
  date.getDate()
]);

console.log(pad.join('-')); // 2016-10-05
```

Tests
------
```bash
$ npm test
```

Contribution
------
Contributions are appreciated.

License
------
MIT-licensed. See LICENSE.
