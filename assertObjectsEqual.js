// ********* assertObjectsEqual FUNCTION  ********* 


// **** REFERENCING OTHER FUNCTION: assertEqual AND eqArray ****

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

//   eqObjects Function Referenced 
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


/** **** FUNCTION IMPLEMENTATION: assertObjectsEqual FUNCTION ****
 *   Functionality - a function that takes in 2 objects and 
 *                   returns true if they are equal and false otherwise
 *   Code
 *    ln 1. const  - creates assertObjectsEqual to hold function results
 *    ln 2. const  - creates inspect variable to hold values from the inspect 
 *                   objects function 
 *    ln 3. let    - creates isEqual to hold results from passing two objects 
 *                   (two params from this function) to eqObjects if identical
 *    ln 4. if     - takes T/F from eqObjects and returns 1 of 2 actions 
 *    ln 5. return - returns assert passes message with actual object values
 *    ln 6. else   - marks alternate action 
 *    ln 7. return - returns assert fails message with actual object values
 * 
 */
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let isEqual = eqObjects(actual, expected);
  if (isEqual) {
    return console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    return console.log(`❌❌❌Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;
// **** TESTING: assertObjectsEqual FUNCTION ****

//   OBJECTS USED IN TESTING
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

//  TESTS assertObjectEqual
assertObjectsEqual(ab,ba);
assertObjectsEqual(cd,dc);


