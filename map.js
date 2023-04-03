// ********* map FUNCTION  ********* 

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

module.exports = map;

