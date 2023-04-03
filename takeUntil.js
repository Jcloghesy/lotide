// ********* takeUntil FUNCTION  ********* 


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

module.exports = takeUntil;
