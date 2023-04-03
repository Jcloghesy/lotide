// ********* without FUNCTION  ********* 


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
