// ********* letterPositions FUNCTION  ********* 


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


