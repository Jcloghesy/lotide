// ********* findKey FUNCTION *********


/** **** FUNCTION IMPLEMENTATION: findKey FUNCTION ****
 *   Functionality - a function that takes in an array and callback and 
 *                   returns the first key that meets the callback's criteria
 * 
 */
const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;

