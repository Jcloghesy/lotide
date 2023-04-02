// ********* findKeyByValue FUNCTION  ********* 


// **** REFERENCING OTHER FUNCTION: assertEqual ****

//    assertEqual - used for testing of tail function (after adjustments)
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


/** **** FUNCTION IMPLEMENTATION: findKeyByValue FUNCTION ****
 *   Functionality - a function that takes in an object and a value and 
 *                   returns the first key that corresponds to that value
 *   Code
 *    ln 1. const   - declares findKeyByValue variable equal a function that 
 *                    takes two parameters a sourceObject and set of keys
 *    ln 2. const   - creates a KeyArray to holds the Keys for the sourceObject 
 *    ln 3. for     - loop each element/key within keysArray
 *    ln 4. if      - tests if key in sourceObject has a key 
 *    ln 5. returns - the key for each element in source Object
 *
 */
const findKeyByValue = function(sourceObject, value) {
  const keysArray = Object.keys(sourceObject);
  for (let element of keysArray) {
    if (sourceObject[element] === value) 
      return element;
  }
}

module.exports = findKeyByValue;

// **** TESTING: findKeyByValue FUNCTION ****

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
