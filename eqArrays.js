// ********* eqArrays FUNCTION  ********* 

/** **** FUNCTION IMPLEMENTATION: eqArrays FUNCTION ****
 *  Functionality - a function that takes in 2 arrays and 
 *                   returns true if the arrays are equal and false otherwise
 * 
 */
const eqArrays = (myArray1, myArray2) => {
  if (myArray1.length !== myArray2.length) {// tests length
    return false; //exit or continue if not equal => false (double neg) 
  }
    for (let i = 0; i < myArray1.length; i++) { // compares items of two arrays
        if (myArray1[i] !== myArray2[i]) {          
          return false; // continue loop if i (items) not equal => false 
          
        }
    }
  return true;
};

module.exports = eqArrays;