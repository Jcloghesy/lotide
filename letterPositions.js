// ********* letterPositions FUNCTION  ********* 


// **** REFERENCING OTHER FUNCTIONS: assertArrayEqual and eqArray ****

//   eqArray Function Referenced 
const eqArrays = (myArray1, myArray2) => {
  if (myArray1.length !== myArray2.length) {
    return false;
  }
    for (let i = 0; i < myArray1.length; i++) {
        if (myArray1[i] !== myArray2[i]) {          
          return false;  
        }
      }
  return true;
};

//   assertArrayEqual Function Referenced 
const assertArraysEqual = function (myArray1, myArray2) {
  if (!eqArrays(myArray1, myArray2)) {
    console.log(`❌❌❌ Assertion Failed: ${myArray1} !== ${myArray2}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${myArray1} === ${myArray2}`);
  }
};


/** **** FUNCTION IMPLEMENTATION: letterPositions FUNCTION ****
 *   Functionality  - a function that takes in a string and 
 *                   returns all indices of letter positions in string
 *   Code
 *    ln 1. const   - declares letterPosition variable equal a function that 
 *                    takes into one parameter - sentence (string)
 *    ln 2. const   - creates results an object to hold function's output 
 *    ln 3. for     - loop limited by length of sentence, increments by one
 *    ln 4. const   - creates char an array to hold each letter in sentence
 *    ln 5. if      - tests char at current position is not blank 
 *    ln 6. if      - test current char is not already in results 
 *    ln 7. results - records char position i (not blank & not already counted) 
 *    ln 7. else    - tests (not blank & is included in results) 
 *    ln 8. results - pushes an additional char position (char already counted)
 *    ln 9. return  - returns the entire results array to function
 *
 */
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if (sentence[i] !== " ") {
      if (!results[char]) {
        results[char] = [i];
      } else {
        results[char].push(i);
      }
    }
  }
  return results;
};

module.exports = letterPositions;

// **** TESTING: letterPositions FUNCTION ****

//  *** Using a Short Strings (e.g. "hello") 
assertArraysEqual(letterPositions("hello").h, [0]);          
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);
assertArraysEqual(letterPositions("hello hello").o, [4, 10]);

