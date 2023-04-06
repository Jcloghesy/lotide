// **** TESTING: findKeyByValue FUNCTION ****

// **** REFERENCING OTHER FUNCTION(s): findKeyByValue & assertEqual ****
const findKeyByValue = require ('../findKeyByValue');
const assertEqual = require ('../assertEqual');

// Source object given  for testing 
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

//    Test Set 1: Testing function's general results and undefined when no key
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);