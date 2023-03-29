# Lotide

A mini clone of the [Lodash](https://lodash.com) library.
(A small library containing various function created to operate on Objects and Arrays - JavaScript)

The  lotide project is a project inspired by the Lodash library.  Although being a much smaller and simpler collection of functions relative to Lotide, the focus of the two libraries is similar as they contain functions that operate on data, namely Arrays and Objects.  

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jcloghesy/lotide`

**Require it:**

`const _ = require('@jcloghesy/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

  * assertEqual: a function that takes in 2 values and returns true if they are equal and false otherwise
  * head: a function that takes in an array and returns the first element in the array
  * tail: a function that takes in an array and returns everything except the first element of the array
  * eqArrays: a function that takes in 2 arrays and returns true if the arrays are equal and false otherwise
  * assertArraysEqual: a function that takes in 2 arrays and returns true if they are equal and false otherwise
  * without: a function that takes in a source array and an itemsToRemove arrays and returns items not in the itemsToRemove array
  * flatten: a function that takes in an array that may have nested arrays as elements and returns a flattened version of the array
  * middle:  a function that takes in an array and returns middle most element of the array
  * countOnly: a function that takes in a collection of items and returns a specific subset of those items
  * countLetters: a function that takes in a sentence and returns a count of each of the letters in the sentence
  * letterPositions: a function that takes in a string and returns all indices of letter positions in the string
  * findKeyByValue: a function that takes in an object and a value and returns the first key that corresponds to that value
  * eqObjects: a function that takes in 2 objects and return true if they are equal and false otherwise
  * assertObjectsEqual: a function that takes in 2 objects and returns true if they are equal and false otherwise
  * map: a function that takes in an array and a callback and returns a new array based on the callback's criteria
  * takeUntil: a function that takes in an array and callback and returns a slice of the array based on the callback's criteria
  * findKey: a function that takes in an object and callback and returns the first key that meets the criteria specified in callback    
