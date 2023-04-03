// **** TESTING: takeUntil FUNCTION ****

// **** REFERENCING OTHER FUNCTION(s): takeUntil & assertArraysEqual****
const takeUntil = require ('../takeUntil');
const assertArraysEqual = require ('../assertArraysEqual');

// Sample Arrays for use in testing of takeUntil 
// Tests
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1)
assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]); // Pass
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]); // Pass
assertArraysEqual(results1, [ 1, 2, 4, 7, 2, -1 ]); // Fail

console.log('------------');

const data2 = ["I've", "been", "to", "H.Wd", ",", "I've", "been", "to", "R.Wd"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2)
assertArraysEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'H.Wd' ]); // Pass
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'H.Wd' ]); // Pass
assertArraysEqual(results2, ['I\'ve', 'NOT', 'been', 'to', 'H.Wd' ]); // Fail

