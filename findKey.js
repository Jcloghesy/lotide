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

// **** TESTING: findKey FUNCTION **** 

//    Three Test to Ensure findKey function is Returning Correct Values 
assertEqual(findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 1), "Blue Hill"); // Pass

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 7 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 7), "Ora"); // Pass

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 1 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 4 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 5), undefined); // Pass

