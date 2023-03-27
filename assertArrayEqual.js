// ********* assertArrayEqual FUNCTION  ********* 


// **** REFERENCING OTHER FUNCTION: eqArray ****

//   eqArray Function used for testing of assertArrayEqual function 
const eqArrays = (myArray1, myArray2) => {
  if (myArray1.length !== myArray2.length) {
    return false;
  }
    for (let i = 0; i < myArray1.length; i++) {
        if (myArray1[i] !== myArray2[i]) {          
          return false;  
        }
      }
  return true;
};


/** **** FUNCTION IMPLEMENTATION: assertArrayEqual FUNCTION ****
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
const assertArrayEqual = function (myArray1, myArray2) {
  if (!eqArrays(myArray1, myArray2)) {
    console.log(`❌❌❌ Assertion Failed: ${myArray1} !== ${myArray2}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${myArray1} === ${myArray2}`);
  }
};


/** **** TESTING: eqArrayEqual FUNCTION ****
 */

//    Testing Array's Containing Numbers 
assertArrayEqual([1, 2, 3], [1, 2, 3])  // => true
assertArrayEqual([1, 2, 3], [1, 2, "3"]) // => false
assertArrayEqual([1, 2, 3], [3, 2, 1])   // => false

//    Testing Array's Containing Strings 
assertArrayEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
assertArrayEqual(["1", "2", "3"], ["1", "2", 3])   // => false

