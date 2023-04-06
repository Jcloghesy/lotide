// **** TESTING: assertArraysEqual FUNCTION ****

// **** REFERENCING OTHER FUNCTION(s): assertArraysEqual & eqArrays ****
const assertArraysEqual = require ('../assertArraysEqual');

//    Testing Array's Containing Numbers and Strings 
// Tests Expected to Pass 
assertArraysEqual([1, 2, 3], [1, 2, 3])   // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true

// Tests Expected to Fail
console.log('*****  Expect the Next Three Tests to Return as Failed  *****')
assertArraysEqual([1, 2, 3], [1, 2, "3"]) // => false
assertArraysEqual([1, 2, 3], [3, 2, 1])   // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", 3])   // => false