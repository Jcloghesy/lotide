// ********** assertEqual FUNCTION *********


/** **** FUNCTION IMPLEMENTATION: assertEqual FUNCTION ****
 *  Functionality - a function that takes in 2 values and returns true
 *                  if they are equal and false otherwise.
 */
//    - function updated to adding emojis (template literals already employed)
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


// **** TESTING: assertEqual FUNCTION **** 

//     Test Set 1 Assigned Tests
//      in Compass instructions - compare different strings & numbers
assertEqual("Random string", "Random string");     // Rs === Rs --> true
assertEqual("Random string ", "Different string"); // Rs !== Ds --> false
assertEqual(5, 5);                                 //  5 === 5  --> true
assertEqual(500, 5);                              // 500 !== 5  --> false

