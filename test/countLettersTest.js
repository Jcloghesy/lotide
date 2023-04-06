// **** TESTING: countLetters FUNCTION ****

// **** REFERENCING OTHER FUNCTION(s): countLetters & assertEqual ****
const countLetters = require ('../countLetters');
const assertEqual = require("../assertEqual")

// Results to be Logged to the Console 
console.log(countLetters("LHL"));
console.table(countLetters("Hellooooo"));

// Assertion Testing
assertEqual(countLetters("testing LHL")["L"],2);
assertEqual(countLetters("Hellooooo")["o"],5);
assertEqual(countLetters("Nothing but AAAs here")["Z"], undefined);