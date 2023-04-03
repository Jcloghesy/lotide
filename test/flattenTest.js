// **** TESTING: flatten FUNCTION ****

// **** REFERENCING OTHER FUNCTION(s): flatten & assertArraysEqual ****
const flatten = require ('../flatten');
const assertArraysEqual = require ('../assertArraysEqual');

//    Test Set 1: Assigned Test Cases - testing function's general results
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

//    Test Set 2: Additional Test Cases - empty arrays
assertArraysEqual(flatten([1, 2, [], 5, [6]]), [1, 2, 5, 6]);
assertArraysEqual(flatten([[]]), []);
