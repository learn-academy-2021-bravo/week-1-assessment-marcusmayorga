// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2021"
// console.log(cohort.length)

// a) Your answer: The ouput to the console should be 10 (includes space);
// b) Verify and explain: Answer is 10 because it's using the method to find the length of the variable


// --------------------2) What will this log?

var greeting = "Hello World!"
// console.log(greeting[3])

// a) Your answer: The output will be the second "l" because it's in index 3
// b) Verify and explain: It's "l" because it's in the 3rd index (4th letter)


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
// console.log(languages[index])

// a) Your answer: The answer is Ruby
// b) Verify and explain: The answer is Ruby because the index variable is '1' which is the index of that word in the languaes array.


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: ["SATURDAY","SUNDAY"]
// b) Verify and explain: AH! Not Correct. The array values can't be changed with toUpperCase alone without looping through each value in the array


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer: "array" 3
// b) Verify and explain: Not Correct. The typeof will return number because dataTypes with the length property is returning "3" which is a number