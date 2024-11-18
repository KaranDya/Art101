/*
   lab.js - This is a lab focused on usding funtions and buttons in order to categorize a user entry

   Requirements: jQuery must be loaded for this script to work.

   Author: Wes modes
   Date: 2024
*/











//create a function that can sort the user entry and assign a house based on the number of letters in the name.
function sortingHat(str) {
    len = str.length;
    mod = len % 4;
    if (mod == 0) {
        return "Gryffindor"
    }
    if (mod == 1){
        return "Hufflepuff"
    }
    if (mod == 2){
        return "Ravenclaw"
    }
    if (mod == 3){
        return "Slytherin"
    }

}
//add a listener to the button along with a sentence that appears upon clicking submit
var myButton = document.getElementById("button");
myButton.addEventListener("click",function() {
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    newText = "<p>The Sorting Hat has named you to be in the " + house + " House.<br> This house is a part of three other mysterious houses that make up the elusive Hogwarts. Hogwarts is known to be a school of magic and mystery and is not visible to normal human beings. It is only accesible through invition as explained by our sources.</p>";
    document.getElementById("output").innerHTML = newText;
})

