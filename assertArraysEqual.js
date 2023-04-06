// ********* assertArraysEqual FUNCTION  ********* 

// **** REFERENCING OTHER FUNCTION(s): eqArrays ****
const eqArrays = require('./eqArrays');

/** **** FUNCTION IMPLEMENTATION: assertArraysEqual FUNCTION ****
 *  Functionality - a function that takes in 2 arrays and 
 *                  returns true if they are equal and false otherwise
 *  Code    
 *   ln 1. const   - creates variable to intakes two arrays
 *   ln 2. if      - tests if arrays are NOT the same length 
 *   ln 3. consol. - returns to console failed message if true NOT equal
 *   ln 4. else    - both arrays equal lengths -> False NOT equal
 *   ln 5. consol. - returns to console Passed message  False NOT equal
 *  
 */
const assertArraysEqual = function (myArray1, myArray2) {
  if (!eqArrays(myArray1, myArray2)) {
    console.log(`❌❌❌ Assertion Failed: ${myArray1} !== ${myArray2}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${myArray1} === ${myArray2}`);
  }
};

module.exports = assertArraysEqual;