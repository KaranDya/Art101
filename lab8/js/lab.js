// index.js - Lab 8: Anon Functions and Callbacks
// Author: Karan Dahiya
// Date: 22 Oct 2024
//Domain: Public





//set an array
const numbers = [2, 10, 22, 44, 66, 52, 75, 88];

//create a function 
function mycalculator(x) {
    var results = (x + 4)
    return results;
}

//verify the function
mycalculator(numbers[3])


mycalculator(numbers[5])

//using map to further use my function and call back to it
numbers.map(mycalculator);

//assign a new function
numbers.map(function(x){
    var results = (x - 1)
    return results;
})

// log the results of the callback functions
var mapResults = numbers.map(mycalculator);
console.log("Results: ", mapResults)