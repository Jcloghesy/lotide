// ********* map FUNCTION  ********* 


// **** REFERENCING OTHER FUNCTION: assertEqual AND eqArray ****

//    assertEqual - used for testing of function
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


 /**  **** FUNCTION IMPLEMENTATION: map FUNCTION ****
  *    Functionality - a function that takes in an array and a callback and
  *                    returns a new array based on the 
  *                    results of the callback on each item in the array
  *    Code
  *     ln  1. const  - map to hold function with 2 intakes array & callback
  *     ln  2. const  - creates results array to holds element of array
  *     ln  3. for    - loop to iterate through all elements of myArray
  *     ln  4. return - pushes to results output elements being sent to callback
  *     ln  6. return - returns the results array 
  *
  */  
const map = function(myArray, callback) {
  const results = [];
  for (let element of myArray) {
    results.push(callback(element));
  }
  return results;
};


//   **** TESTING: map FUNCTION ****

// Sample Arrays for use in testing of map 
const words1 = ["ground", "control", "to", "major" ];
const words2 = ["Let's", "Dance"];
const words3 = [];

// Tests Asserts using AssertEqual and eqArrays (all to pass)
assertEqual(eqArrays(map(words1, word => word[0]), ['g', 'c', 't', 'm']), true);
assertEqual(eqArrays(map(words2, word => word[0]), ['L', 'D' ]), true);
assertEqual(eqArrays(map(words3, word => word[0]), []), true);
