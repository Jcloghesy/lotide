// **** TESTING: without FUNCTION ****

// **** REFERENCING OTHER FUNCTION(s): without ****
const without = require ('../without');
const assertArraysEqual = require ('../assertArraysEqual');

//    Test Set 1: Assigned Test Cases - testing function's general results
assertArraysEqual(without([1,2,3],[1]), [2, 3]);
assertArraysEqual(without(["1","2","3"],[1,2,"3"]), ["1", "2"]);

//    Test Set 2: Assigned Test - ensuring original array is not modified
const words =["hello","world","lighthouse"];
without(words,["lighthouse"]);
assertArraysEqual(words,["hello","world","lighthouse"]);

//    Test Set 3: Additional Test Cases - empty arrays
assertArraysEqual(without([],[1]),[]);
assertArraysEqual(without([1],[]), [1]);