// **** TESTING: countOnly FUNCTION ****

// **** REFERENCING OTHER FUNCTION(s): countOnly & assertEqual****
const countOnly = require ('../countOnly');
const assertEqual = require ('../assertEqual');

//    Test Set 1: Testing Arrays Containing One or Two Items
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const resultFirstNames = countOnly (firstNames, { 
  "Jason"     : true, 
  "Karima"    : true, 
  "Fang"      : true, 
  "Agouhanna" : false 
  }
);

// Test Assertions
assertEqual(resultFirstNames["Jason"], 1);
assertEqual(resultFirstNames["Karima"], undefined);
assertEqual(resultFirstNames["Agouhanna"], undefined);

