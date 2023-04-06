// **** TESTING: assertEqual FUNCTION **** 

// **** REFERENCING OTHER FUNCTION(s): assertEqual ****
const assertEqual = require ('../assertEqual');

//     Tests Assigned from Compass - Comparing Different Strings & Numbers
// Tests Expected to Fail 
console.log('*****  Expect the Next Two Tests to Return as Failed  *****')
assertEqual("Random string ", "Different string"); // Rs !== Ds --> false
assertEqual(500, 5);                        // 500 !== 5  --> false  

// Tests Expected to Pass 
assertEqual("Random string", "Random string");     // Rs === Rs --> true
assertEqual(5, 5);                                 //  5 === 5  --> true
