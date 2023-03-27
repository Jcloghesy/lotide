// **** TESTING: head FUNCTION ****

// **** REFERENCING OTHER FUNCTION(s): head & assertEqual **** 
const head = require('../head'); 
const assertEqual = require('../assertEqual');

//    Test Set 1: Assigned Test Cases
//     tests list in Compass ensuring first item in array is function's result
assertEqual(head([5,6,7]), 5);                              // 5 ==== 5 --> true
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");//Hello===Hello true

//    Test Set 2: Additional Test Cases 
//     testing single item array is find & empty array returns undefined
assertEqual(head(["Only Item"]), "Only Item");// Only Item === Only Item -> true
assertEqual(head([]), undefined); // undefined -> true