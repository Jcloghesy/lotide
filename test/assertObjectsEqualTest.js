// **** TESTING: assertObjectsEqual FUNCTION ****

// **** REFERENCING OTHER FUNCTION(s): assertObjectsEqual ****
const assertObjectsEqual = require ('../assertObjectsEqual');

//   OBJECTS USED IN TESTING
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

//  TESTS assertObjectEqual
assertObjectsEqual(ab,ba);
assertObjectsEqual(cd,dc);
