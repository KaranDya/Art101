// index.js - Lab 8: Anon Functions and Callbacks
// Author: Karan Dahiya
// Date: 22 Oct 2024
//Domain: Public





//set an array
const numbers = [2, 10, 22, 44, 66, 52, 75, 88];
console.log(numbers)

//create a function 
function mycalculator(x) {
    var results = (x + 4)
    return results;
}

//verify the function
mycalculator(numbers[3]);
console.log(mycalculator)


mycalculator(numbers[5]);

//using map to further use my function and call back to it
numbers.map(mycalculator);

//assign a new function
var results = numbers.map(function(x){
    var results = (x - 1)
    return results;
})



// log the results of the callback functions
var mapResults = numbers.map(mycalculator);
console.log("Results: ", mapResults);

//for j query
 // Use jQuery to select the element by its ID and set the HTML content
$("#output").html(
    "Numbers array: " + numbers + "<br>"+
    "Numbers after addition of 4 according to my function: "+ mapResults +"<br>"+
    "Numbers after subtraction by 1 according to my function: "+ results +"<br>"
);