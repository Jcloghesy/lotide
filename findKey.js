// ********* findKey FUNCTION *********


// **** REFERENCING OTHER FUNCTION: assertEqual ****

//    assertEqual - used for testing of findKey function (after adjustments)
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


/** **** FUNCTION IMPLEMENTATION: findKey FUNCTION ****
 *   Functionality - a function that takes in an array and callback and 
 *                   returns the first key that meets the callback's criteria
 * 
 */
const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;

