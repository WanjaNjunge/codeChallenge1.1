/*
 Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade as follows: 

A > 79, B > 60 to 79, C > 59 to 49, D > 40 to 49, E > less 40.
*/

function calculateGrade() {
    //prompt user
    let userInput = prompt("Enter Marks (between 0 and 100):");

    // Convert input to a number
    let marks = parseFloat(userInput);

    // Check if the input is a valid number
}