// **** TESTING: findKey FUNCTION **** 

// **** REFERENCING OTHER FUNCTION(s): findKey & assertEqual ****
const findKey = require ('../findKey');
const assertEqual = require ('../assertEqual');

//    Three Test to Ensure findKey function is Returning Correct Values 
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 1), "Blue Hill"); // Pass

assertEqual(findKey({
"Blue Hill": { stars: 1 },
"Akaleri":   { stars: 3 },
"noma":      { stars: 2 },
"elBulli":   { stars: 3 },
"Ora":       { stars: 7 },
"Akelarre":  { stars: 3 }
}, x => x.stars === 7), "Ora"); // Pass

assertEqual(findKey({
"Blue Hill": { stars: 1 },
"Akaleri":   { stars: 3 },
"noma":      { stars: 1 },
"elBulli":   { stars: 3 },
"Ora":       { stars: 4 },
"Akelarre":  { stars: 3 }
}, x => x.stars === 5), undefined); // Pass

