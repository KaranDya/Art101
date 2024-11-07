/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.

   Author: Wes modes
   Date: 2023
*/



// Function to generate random text from the Lorem Ipsum string
function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    return text.slice(randStart, randStart + randLen);
}



// event listener for button make-convo
$("#make-convo").click(function(){
    //funtion to generate text
    const newText = generateRandomText();
    

    //Append the class output to display the new text
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
    
});
