// **** TESTING: tail FUNCTION **** 

// **** REFERENCING OTHER FUNCTION(s): tail & assertEqual  **** 
const tail = require('../tail');
const assertEqual = require ('../assertEqual');


//    Test Set 1: Ensure Tail function is Returning Correct Values 
//     from Compass Toggle Answer "Test Case 1..."
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure returns two of three original elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

//    Test Set 2: Ensure Original Array is not Modified
//     ensuring original array is not modified - new array is produced 
const words =["Yo Yo","Lighthouse","Labs"];
tail(words);// no need to capture the return value since we are not checking it
assertEqual(words.length,3);// original array should still have 3 elements!
    
//    Test Set 3: Additional Test Cases 
//     receiving correct results with single item & empty arrays
const moreResults  = tail(["Only Item"]);
assertEqual(moreResults.length, 0 ); // one item -> 0 empty tail
const evenMoreResults  = tail([]);
assertEqual(evenMoreResults.length, 0); // empty-> 0 empty tail