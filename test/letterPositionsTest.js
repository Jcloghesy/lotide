// **** TESTING: letterPositions FUNCTION ****

// **** REFERENCING OTHER FUNCTION(s): letterPositions & assertArraysEqual ****
const letterPositions = require ('../letterPositions');
const assertArraysEqual = require ('../assertArraysEqual');

//  *** Using a Short Strings (e.g. "hello") 
assertArraysEqual(letterPositions("hello").h, [0]);          
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);
assertArraysEqual(letterPositions("hello hello").o, [4, 10]);