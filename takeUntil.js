// ********* takeUntil FUNCTION  ********* 


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

//   assertArraysEqual Function Referenced 
const assertArraysEqual = function (myArray1, myArray2) {
  if (!eqArrays(myArray1, myArray2)) {
    console.log(`❌❌❌ Assertion Failed: ${myArray1} !== ${myArray2}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${myArray1} === ${myArray2}`);
  }
};

/**  **** FUNCTION IMPLEMENTATION: takeUntil FUNCTION ****
 *    Functionality - a function that takes in an array and callback and 
 *                  returns a slice of the array based on the 
 *                  criteria specified in the callback
 *   Code
 *     ln  1. const  - takeuntil variable to function that takes in 
 *                     two params and  array and a callback
 *     ln  2. const  - creates results array to holds element of array
 *     ln  3. for    - loop to iterate through all elements of myArray
 *     ln  4. if     - tests if passing elmnt to callback returns false
 *     ln  5. return - if false then pushes elmnt from callback to results
 *     ln  6. else   - if true then skips
 *     ln  7. return - returns the results array 
 * 
 */
const takeUntil = function(srcArray, callback) {
  const resultsArray = [];
  for (const elmnt of srcArray) {
    if (!callback(elmnt)) {
      resultsArray.push(elmnt);
    } else {
      return resultsArray;
    }
  }
};


// **** TESTING: takeUntil FUNCTION ****

// Sample Arrays for use in testing of takeUntil 
// Tests
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1)
assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]); // Pass
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]); // Pass
assertArraysEqual(results1, [ 1, 2, 4, 7, 2, -1 ]); // Fail

console.log('------------');

const data2 = ["I've", "been", "to", "H.Wd", ",", "I've", "been", "to", "R.Wd"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2)
assertArraysEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'H.Wd' ]); // Pass
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'H.Wd' ]); // Pass
assertArraysEqual(results2, ['I\'ve', 'NOT', 'been', 'to', 'H.Wd' ]); // Fail

