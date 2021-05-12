// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that takes in a number and determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// var temp1 = 35;
// var temp2 = 350;
// var temp3 = 212;

        // Make a function that takes in a parameter for the number
        // const testTemp = (temp) => {
        //     // Make conditions to test the temp

        //     // First one is equal or below 35
        //     if (temp <= 35) {
        //         // Return if below or equal to 35
        //         return `${temp} is below boiling point`;
        //     } 
        //     // Check if equal to 212
        //     else if (temp === 212) {
        //         // Return if equal to 212
        //         return `${temp} is at boiling point`;
        //     }
        //     // Check if above boiling point
        //     else if (temp >= 212){
        //         // Return if above or equal to 212
        //         return `${temp} is above boiling point`;
        //     } else {
        //         return `Something went wrong :-( `;
        //     }
        // }
        // console.log(testTemp(temp1));
        // console.log(testTemp(temp2));
        // console.log(testTemp(temp3));




// --------------------2) Create a function that takes in an array of numbers and returns an array with each number multiplied by 5.
// Use the test variable provided below. Expected output: [15, 35, 0, 30, -45]

// var myNumbers1 = [3, 7, 0, 6, -9]

        // // Make a function that takes an array of numbers as param
        // const multiByFive = (arr) => {
        //     // I need a new array to hold for output
        //     let numsTimesFive = [];

        //     //Loop through the array to get the numbers
        //     for(let i = 0;i < arr.length; i++) {
        //         // Multiply numbers in array by 5
        //         // Push to new array
        //         numsTimesFive.push(arr[i] * 5);
        //     }
        //     // Return new array with new array
        //     return numsTimesFive;
        // }

        // console.log(multiByFive(myNumbers1));


// --------------------3) Create a function that takes in an array of numbers and returns an array containing only the odd numbers.
// Use the test variable provided below. Expected output: [-7, 9, 13]

// var myNumbers2 = [8, -7, 0, 6, 2, 9, 13]

        // // Make function with param to test odd numbers
        // const onlyFansOfOdds = (arr) => {
        //     // Make an empty array for final output
        //     let onlyOddNums = [];
        //     // Go through array. Yay!
        //     for(let i = 0; i < arr.length; i++) {
        //         // Test if each array number is odd. % by 2 with no 0
        //         if (arr[i] % 2 !== 0) {
        //             onlyOddNums.push(arr[i]);
        //         }
        //     }
        //     // Return the new final array
        //     return onlyOddNums;
        // }

        // console.log(onlyFansOfOdds(myNumbers2));



// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

// var stringWithVowels1 = "HeyThereLearnStudent"
// var stringWithVowels2 = "ILoveJavaScript"

        // // Make function with param to hold string and remove vowels
        // const removeVowels = (str) => {
        //     // create empty var to hold final string
        //     let noVowels = '';
        //     //test if vowels are in string
        //     for (let i = 0; i < str.length; i++) {
        //         // if the letter is a vowel, skip it
        //         // NOTE: input param test for condition changed to lowercase to grab all letters
        //         if (str[i].toLowerCase() != "a" && str[i].toLowerCase() != "e" && str[i].toLowerCase() != "i" && str[i].toLowerCase() != "o" && str[i].toLowerCase() != "u") {
        //             //add letter to noVowels to make new string
        //             noVowels += str[i];
        //         };   
        //     }
        //     return noVowels;
        // }
        // console.log(removeVowels(stringWithVowels1));
        // console.log(removeVowels(stringWithVowels2));




// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user if the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string" "mCdngMstr"
// Hint: There is an operator in JavaScript called typeof :)

var refactorTester1 = true
var refactorTester2 = 42
var refactorTester3 = "IAmACodingMaster"

        // Make function with param to hold string and remove vowels
        const removeVowels = (str) => {
            // create empty var to hold final string
            let noVowels = '';
            // First I should test if the param is even a string
            if(typeof str === "string") {
                // if it's true run the OG stuff:

                //test if vowels are in string
                for (let i = 0; i < str.length; i++) {
                
                // if the letter is a vowel, skip it
                // NOTE: input param test for condition changed to lowercase to grab all letters
                    if (str[i].toLowerCase() != "a" && str[i].toLowerCase() != "e" && str[i].toLowerCase() != "i" && str[i].toLowerCase() != "o" && str[i].toLowerCase() != "u") {
                    //add letter to noVowels to make new string
                    noVowels += str[i];
                    };   
                }
            } else if (typeof str === "boolean") {
                return `${str} is not a string`;
            } else if (typeof str === "number") {
                return `${str} is not a string`;
            } else {
                return `Some crazy stuff happened!`;
            }
            
            return noVowels;
        }
        console.log(removeVowels(refactorTester1));
        console.log(removeVowels(refactorTester2));
        console.log(removeVowels(refactorTester3));