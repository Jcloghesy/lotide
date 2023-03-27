// **** TESTING: middle FUNCTION ****

// **** REFERENCING OTHER FUNCTION(s): middle & assertArraysEqual & eqArrays****
const middle = require ('../middle');
const assertArraysEqual = require ('../assertArraysEqual');

//    Test Set 1: Testing Arrays Containing One or Two Items
assertArraysEqual(middle([1]), []);   // middle([1])   => []
assertArraysEqual(middle([1,2]), []); // middle([1,2]) => []

//    Test Set 2: Testing Arrays Containing Even Number of Items
assertArraysEqual(middle([1,2,3]), [2]);     // middle([1,2,3])     => [2]
assertArraysEqual(middle([1,2,3,4,5]), [3]); // middle([1,2,3,4,5]) => [3]

//    Test Set 3: Testing Arrays Containing an Odd Number of Items
assertArraysEqual(middle([1,2,3,4]), [2,3]);    // middle([1,2,3,4])    => [2,3]
assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);// middle([1,2,3,4,5,6])=> [3,4]

