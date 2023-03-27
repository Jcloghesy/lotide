// ********* tail FUNCTION *********

/** **** FUNCTION IMPLEMENTATION: tail FUNCTION ****
 *  Functionality - a function that takes in an array and
 *                  returns everything except the first element of the array
 */
const tail = function(myArray) {
  return myArray.slice(1);
};

module.exports = tail;
