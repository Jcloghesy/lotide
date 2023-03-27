// ********* middle FUNCTION  ********* 


// **** REFERENCING OTHER FUNCTIONS: assertArrayEqual and eqArray ****

//   eqArray Function Referenced 
const eqArrays = (myArray1, myArray2) => {
  if (myArray1.length !== myArray2.length) {// tests length
    return false;
  }
    for (let i = 0; i < myArray1.length; i++) { // compares items
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


/** **** FUNCTION IMPLEMENTATION: middle FUNCTION ****
 *  Functionality - a function that takes in an array and 
 *                  returns middle most element of the array.  
 *                  Number of items function will return based upon total 
 *                  number of elements contain in Array.
 *                     1. Less than 3 items    => [empty]
 *                     2. Even number of items => [two items]
 *                     3. Odd number of items  => [one item]
 *  Code    
 *   ln 1. let     - creates midElements array to place results
 *   ln 2. if      - testing 1st case: arrays less than 3 items =>  empty array
 *   ln 3. else if - testing 2nd case: array even # of total items => 2 items 
 *   ln 4.   midE  - calc & pushes to midE lower item closest to mid position  
 *   ln 5.   midE  - calc & pushes to midE upper item closest to mid position  
 *   ln 6. return  - returns result of function -> midElements 
 *   ln 7. else if - testing 3nd case array odd # of total items => 1 items 
 *   ln 8.   midE  - determines & pushes to midE item in mid position
 *   ln 9. return  - returns result of function -> midElements
 * 
 */
const middle = function (sourceArray) {
  let midElements = [];
  if (sourceArray.length <= 2) { 
    return midElements; 
  } else if (sourceArray.length % 2 === 0) {
    midElements.push(sourceArray[(sourceArray.length / 2) - 1]), 
    midElements.push (sourceArray[(sourceArray.length / 2)]);
    return midElements
  } else {
    midElements.push[sourceArray[Math.floor(sourceArray.length / 2)]];
    return midElements;

  }
};


// **** TESTING: middle FUNCTION ****

//    Test Set 1: Testing Arrays Containing One or Two Items
assertArraysEqual(middle([1]), []);   // middle([1])   => []
assertArraysEqual(middle([1,2]), []); // middle([1,2]) => []

//    Test Set 2: Testing Arrays Containing Even Number of Items
assertArraysEqual(middle([1,2,3]), [2]);     // middle([1,2,3])     => [2]
assertArraysEqual(middle([1,2,3,4,5]), [3]); // middle([1,2,3,4,5]) => [3]

//    Test Set 3: Testing Arrays Containing an Odd Number of Items
assertArraysEqual(middle([1,2,3,4]), [2,3]);    // middle([1,2,3,4])    => [2,3]
assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);// middle([1,2,3,4,5,6])=> [3,4]

