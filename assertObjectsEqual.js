// ********* assertObjectsEqual FUNCTION  ********* 

const eqObjects = require ('./eqObjects');

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
    return console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    return console.log(`❌❌❌Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;
