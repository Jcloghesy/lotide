// ********* eqArray FUNCTION  ********* 


// **** REFERENCING OTHER FUNCTION: assertEqual ****

//    assertEqual - used for testing of eqArray function 
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


/** **** FUNCTION IMPLEMENTATION: eqArray FUNCTION ****
 *  Functionality - a function that takes in 2 arrays and 
 *                   returns true if the arrays are equal and false otherwise
 * 
 */
const eqArrays = (myArray1, myArray2) => {
  if (myArray1.length !== myArray2.length) {// tests length
    return false; //exit or continue if not equal => false (double neg) 
  }
    for (let i = 0; i < myArray1.length; i++) { // compares items of two arrays
        if (myArray1[i] !== myArray2[i]) {          
          return false; // continue loop if i (items) not equal => false 
          
        }
    }
  return true;
};


// **** TESTING: eqArray FUNCTION ****

//    Testing Array's Containing Numbers 
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);  // => true
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), true); // => false
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);   // => false

//    Testing Array's Containing Strings 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);   // => false

