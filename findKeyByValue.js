// ********* findKeyByValue FUNCTION  ********* 

/** **** FUNCTION IMPLEMENTATION: findKeyByValue FUNCTION ****
 *   Functionality - a function that takes in an object and a value and 
 *                   returns the first key that corresponds to that value
 *   Code
 *    ln 1. const   - declares findKeyByValue variable equal a function that 
 *                    takes two parameters a sourceObject and set of keys
 *    ln 2. const   - creates a KeyArray to holds the Keys for the sourceObject 
 *    ln 3. for     - loop each element/key within keysArray
 *    ln 4. if      - tests if key in sourceObject has a key 
 *    ln 5. returns - the key for each element in source Object
 *
 */
const findKeyByValue = function(sourceObject, value) {
  const keysArray = Object.keys(sourceObject);
  for (let element of keysArray) {
    if (sourceObject[element] === value) 
      return element;
  }
}

module.exports = findKeyByValue;


