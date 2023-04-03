// ********* countLetters FUNCTION  ********* 


// **** REFERENCING OTHER FUNCTION: assertEqual ****

//   assertEqual Function Referenced 
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


/** **** FUNCTION IMPLEMENTATION: countLetters FUNCTION ****
 *   Functionality - a function that takes in a sentence and 
 *                    returns a count of each of the letters in sentence
 * 
 */
const countLetters = function(myString) {
  const results = {};
  for (let letter of myString) {
    if (letter !== " ") { // Filters the spaces in the string
      if (results[letter]) { // If the letter has already been counted, adds 1 to the count
        results[letter] += 1;
      } else { // If the letter doesn't exist in the result object, creates it
        results[letter] = 1;
      }
    }
  }
  return results;
};

module.exports = countLetters;




