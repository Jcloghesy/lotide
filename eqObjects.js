// ********* eqObjects FUNCTION  ********* 


// **** REFERENCING OTHER FUNCTION: assertEqual AND eqArray ****

//    assertEqual - used for testing of tail function (after adjustments)
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


/** **** FUNCTION IMPLEMENTATION: eqObjects FUNCTION ****
 *   Functionality - a function that takes in 2 objects and 
 *                   return true if they are equal and false otherwise
 *   Code
 *    ln  1. const  - creates eqObjects to hold object that takes in two objects
 *    ln  2. let    - creates object1Array to hold keys of object1
 *    ln  3. let    - creates object1Array to hold keys of object2 
 *    ln  4. if     - tests if two arrays holding keys are same length
 *    ln  5. return - if length is not equal returns false and exits 
 *    ln  7. for    - for_of loop to examine each key within object1Array 
 *    ln  9. if     - tests each key of object1 equals object2 & not an array 
 *    ln 11. return - if keys not identical or not an array => false & exits 
 *    ln 12. if     - tests if each key of object1 is an array AND also
 *                    test, using eqArray, if keys of both arrays are equal 
 *    ln 14. return - if keys are not identical returns false and exits
 *    ln 17. return - wether objects' keys are array or not true if identical
 *  
 */
const eqObjects = function(object1, object2) {
  let object1Array = Object.keys(object1);
  let object2Array = Object.keys(object2);
  if (object1Array.length !== object2Array.length) {
    return false;
  }
  for (const key of object1Array) {
    if (object1[key] !== object2[key] && !Array.isArray(object1[key])) {
      return false;
    }
    if (Array.isArray(object1[key]) && !eqArrays(object1[key], object2[key])) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
// **** TESTING: eqObjects FUNCTION ****

//   OBJECTS USED IN TESTING

//  Shirt Objects 
const shirtObject = {
  color:"red",
  size:"medium"
};

const anotherShirtObject = {
  size:"medium",
  color:"red"
};

const longSleeveShirtObject = {
  size:"medium",
  color:"red",
  sleeveLength:"long"
};

//  MultiColor Shirts Objects 
const multiColorShirtObject = {
  colors:["red","blue"],
  size:"medium"
};

const anotherMultiColorShirtObject = {
  size:"medium",
  colors:["red","blue"]
};
const longSleeveMultiColorShirtObject = {
  size:"medium",
  colors:["red","blue"],
  sleeveLength:"long",
};

//  TESTS eqObjects BY EMBEDDING INSIDE assertEqual FUNCTION
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject),  true);
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);

