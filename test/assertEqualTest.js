// **** TESTING: assertEqual FUNCTION **** 

// **** REFERENCING OTHER FUNCTION(s): assertEqual ****
const assertEqual = require ('../assertEqual');

//     Test Set 1 Assigned Tests
//      in Compass instructions - compare different strings & numbers
assertEqual("Random string", "Random string");     // Rs === Rs --> true
assertEqual("Random string ", "Different string"); // Rs !== Ds --> false
assertEqual(5, 5);                                 //  5 === 5  --> true
assertEqual(500, 5);   // 500 !== 5  --> false        