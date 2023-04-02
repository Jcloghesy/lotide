// ********* flatten FUNCTION  ********* 


// **** REFERENCING OTHER FUNCTIONS: eqArray and assertArrayEqual ****

//   eqArray Function Referenced 
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

//   assertArrayEqual Function Referenced 
const assertArraysEqual = function (myArray1, myArray2) {
  if (!eqArrays(myArray1, myArray2)) {
    console.log(`❌❌❌ Assertion Failed: ${myArray1} !== ${myArray2}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${myArray1} === ${myArray2}`);
  }
};


/** **** FUNCTION IMPLEMENTATION: flatten FUNCTION ****
 *  Functionality - a function that takes in an array that contains elements 
 *                  including nested array of elements and 
 *                  returns a flattened version of the array
 *  Code
 *   ln 1. let    - creates flattenArray to place results
 *   ln 2. for    - loop to go through entire sourceArray
 *   ln 3. if     - testing if item in sourceArray is an array
 *   ln 4. for    - if item is an array loop through entire array / all items
 *   ln 5.   flat - for each items in array push to flattenedArray
 *   ln 6.   flat - if not an array push current item to flattened only once
 *   ln 7. Return - returns flattenArray and prints to console
 * 
 */
const flatten = (sourceArray) => {
  let flattenedArray = []; 
    for (let i = 0; i < sourceArray.length; i++) {
    if (Array.isArray(sourceArray[i])) {
//      for (let j = sourceArray[i].length - 1; j >= 0; j--) {
        for (let j = 0; j<sourceArray[i].length; j++) {
        flattenedArray.push(sourceArray[i][j]);
      }
    } else {
        
        flattenedArray.push(sourceArray[i]);
    }
  }
  return flattenedArray;
};

module.exports = flatten;
// **** TESTING: flatten FUNCTION ****

//    Test Set 1: Assigned Test Cases - testing function's general results
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

//    Test Set 2: Additional Test Cases - empty arrays
assertArraysEqual(flatten([1, 2, [], 5, [6]]), [1, 2, 5, 6]);
assertArraysEqual(flatten([[]]), []);


