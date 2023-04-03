//   **** TESTING: map FUNCTION ****

// **** REFERENCING OTHER FUNCTION(s): map, assertEqual & eqArrays****
const map = require('../map');
const assertEqual = require('../assertEqual');
const eqArrays = require ('../eqArrays');

// Sample Arrays for use in testing of map 
const words1 = ["ground", "control", "to", "major" ];
const words2 = ["Let's", "Dance"];
const words3 = [];

// Tests Asserts using AssertEqual and eqArrays (all to pass)
assertEqual(eqArrays(map(words1, word => word[0]), ['g', 'c', 't', 'm']), true);
assertEqual(eqArrays(map(words2, word => word[0]), ['L', 'D' ]), true);
assertEqual(eqArrays(map(words3, word => word[0]), []), true);
