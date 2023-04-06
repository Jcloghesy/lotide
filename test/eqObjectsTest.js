// **** TESTING: eqObjects FUNCTION ****

// **** REFERENCING OTHER FUNCTION(s): eqObjects & assertEqual ****
const eqObjects = require ('../eqObjects');
const assertEqual = require ('../assertEqual');

//   OBJECTS USED IN TESTING

//  Shirt Objects 
const shirtObject = { color:"red", size:"medium" };
const anotherShirtObject = { size:"medium", color:"red" };
const longSleeveShirtObject = { size:"medium", color:"red", sleeveLength:"long" };

//  MultiColor Shirts Objects 
const multiColorShirtObject = { colors:[ "red", "blue" ], size:"medium" };
const anotherMultiColorShirtObject = { 
  size:         "medium", 
  colors:     [ "red", "blue" ]
};

const longSleeveMultiColorShirtObject = { 
  size:           "medium", 
  colors:       [ "red", "Blue" ],
  sleeveLength:   "long",
};

//  TESTS eqObjects BY EMBEDDING INSIDE assertEqual FUNCTION
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject),  true);
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);

