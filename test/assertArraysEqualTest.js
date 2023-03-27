// **** TESTING: assertArraysEqual FUNCTION ****

// **** REFERENCING OTHER FUNCTION(s): assertArraysEqual & eqArrays ****
const assertArraysEqual = require ('../assertArraysEqual');
const eqArrays = require ('../eqArrays');

//    Testing Array's Containing Numbers 
assertArraysEqual([1, 2, 3], [1, 2, 3])  // => true
assertArraysEqual([1, 2, 3], [1, 2, "3"]) // => false
assertArraysEqual([1, 2, 3], [3, 2, 1])   // => false

//    Testing Array's Containing Strings 
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3])   // => false