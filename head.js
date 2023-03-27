// ********** head FUNCTION **********


// **** REFERENCING OTHER FUNCTION: assertEqual ****

//    assertEqual - used for testing of head function 
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


/** **** FUNCTION IMPLEMENTATION: head FUNCTION ****
 *  Functionality - a function that takes in an array and 
 *                  returns the first element in the array.
 */

const head = function(myArray) {
  return myArray[0];
};


// **** TESTING: head FUNCTION ****

//    Test Set 1: Assigned Test Cases
//     tests list in Compass ensuring first item in array is function's result
assertEqual(head([5,6,7]), 5);                              // 5 ==== 5 --> true
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");//Hello===Hello true

//    Test Set 2: Additional Test Cases 
//     testing single item array is find & empty array returns undefined
assertEqual(head(["Only Item"]), "Only Item");// Only Item === Only Item -> true
assertEqual(head([]), undefined); // undefined -> true