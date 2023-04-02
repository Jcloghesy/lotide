// ********* without FUNCTION  ********* 


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

/** **** FUNCTION IMPLEMENTATION: without FUNCTION ****
 *  Functionality - a function that takes in a source array and 
 *                  an itemsToRemove arrays and returns only the items from 
 *                  the source array that are not in the itemsToRemove array
 *  Code    
 *   ln  1. let     - creates newArray for output
 *   ln  2. for     - outside loop loops source
 *   ln  3. let     - 
 *   ln  4. for     - inside loop 
 *   ln  5.  if     - compares source to remove
 *   ln  6.  if     - if no match then item not in remove does not add
 *   ln 15. return  - returns newArray (passes to assertArraysEqual 4 Testing)
 * 
 */
const without = function(sourceArray, itemsToRemove) {
  let newArray = []; 
  for (let i = 0; i < sourceArray.length; i++) {
    let addItem = true; 
    for (let j = 0; j < itemsToRemove.length; j++) { 
      if (sourceArray[i] === itemsToRemove[j]) { 
        addItem = false; 
      }
    }
    if (addItem) {
      newArray.push(sourceArray[i]); 
    }
  }
  return newArray;
};

module.exports = without;
// **** TESTING: without FUNCTION ****

//    Test Set 1: Assigned Test Cases - testing function's general results
assertArraysEqual(without([1,2,3],[1]), [2, 3]);
assertArraysEqual(without(["1","2","3"],[1,2,"3"]), ["1", "2"]);

//    Test Set 2: Assigned Test - ensuring original array is not modified
const words =["hello","world","lighthouse"];
without(words,["lighthouse"]);
assertArraysEqual(words,["hello","world","lighthouse"]);

//    Test Set 3: Additional Test Cases - empty arrays
assertArraysEqual(without([],[1]),[]);
assertArraysEqual(without([1],[]), [1]);

