// **** TESTING: eqArray FUNCTION ****

// **** REFERENCING OTHER FUNCTION(s): eqArrays & assertEqual  ****
const eqArrays = require('../eqArrays');
const assertEqual = require ('../assertEqual');

//    Testing Array's Containing Numbers 
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);  // => true
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), true); // => false
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);   // => false

//    Testing Array's Containing Strings 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);   // => false
