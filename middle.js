// ********* middle FUNCTION  ********* 


/** **** FUNCTION IMPLEMENTATION: middle FUNCTION ****
 *  Functionality - a function that takes in an array and 
 *                  returns middle most element of the array.  
 *                  Number of items function will return based upon total 
 *                  number of elements contain in Array.
 *                     1. Less than 3 items    => [empty]
 *                     2. Even number of items => [two items]
 *                     3. Odd number of items  => [one item]
 *  Code    
 *   ln 1. let     - creates midElements array to place results
 *   ln 2. if      - testing 1st case: arrays less than 3 items =>  empty array
 *   ln 3. else if - testing 2nd case: array even # of total items => 2 items 
 *   ln 4.   midE  - calc & pushes to midE lower item closest to mid position  
 *   ln 5.   midE  - calc & pushes to midE upper item closest to mid position  
 *   ln 6. return  - returns result of function -> midElements 
 *   ln 7. else if - testing 3nd case array odd # of total items => 1 items 
 *   ln 8.   midE  - determines & pushes to midE item in mid position
 *   ln 9. return  - returns result of function -> midElements
 * 
 */
const middle = function (sourceArray) {
  let midElements = [];
  if (sourceArray.length <= 2) { 
    return midElements; 
  } 
  if (sourceArray.length % 2 === 0) {
    midElements.push(sourceArray[(sourceArray.length / 2) - 1]), 
    midElements.push (sourceArray[(sourceArray.length / 2)]);
    return midElements
  } 
    midElements.push(sourceArray[Math.floor(sourceArray.length / 2)]);
    return midElements;

};

module.exports = middle;