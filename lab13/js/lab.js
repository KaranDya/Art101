





function fizzBuzz() {
    let outputDiv = document.getElementById("output");
    let output = '';

    //start the loop through numbers 1 to 200
    for (let i = 1; i <= 200; i++) {
        let result = '';

        //Check for multiples of 3, 5, and 7 and 10
        if (i % 3 === 0) result += "Fizz";
        if (i % 5 === 0) result += "Buzz";
        if (i % 7 === 0) result += "Boom";
        if (i % 10 === 0) result += "Bang";

        //checking to see if there is no result. If so just print the number
        if (result === '') {
            result = i;
        }

        //Append the result to the output string with a line break
        output += result + "<br>";
    }

    //Display the output in the output div
    outputDiv.innerHTML = output;
}

//calling the function to start when the page is opened
fizzBuzz();
