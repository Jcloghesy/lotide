// ********* flatten FUNCTION  ********* 

/** **** FUNCTION IMPLEMENTATION: flatten FUNCTION ****
 *  Functionality - a function that takes in an array that contains elements 
 *                  including nested array of elements and 
 *                  returns a flattened version of the array
 *  Code
 *   ln 1. let    - creates flattenArray to place results
 *   ln 2. for    - loop to go through entire sourceArray
 *   ln 3. if     - testing if item in sourceArray is an array
 *   ln 4. for    - if item is an array loop through entire array / all items
 *   ln 5.   flat - for each items in array push to flattenedArray
 *   ln 6.   flat - if not an array push current item to flattened only once
 *   ln 7. Return - return flattenArray (passed 2 assertArraysEqual 4 testing)
 * 
 */
const flatten = (sourceArray) => {
  let flattenedArray = []; 
    for (let i = 0; i < sourceArray.length; i+=1) {
    if (Array.isArray(sourceArray[i])) {
        for (let j = 0; j<sourceArray[i].length; j+=1) {
        flattenedArray.push(sourceArray[i][j]);
      }
    } else {
        
        flattenedArray.push(sourceArray[i]);
    }
  }
  return flattenedArray;
};

module.exports = flatten;
