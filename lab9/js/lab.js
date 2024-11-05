/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Wes modes
   Date: 2023
*/

function  main(){

    $("#challenge").append("<button id='button-challenge'>Make Special</button>");

    // add a click listener to the challenge button
    $("#button-challenge").click(function(){
        // now add (or subtract) the "special" class to the section
        $("#challenge").toggleClass("special");
    });

    $("#problems").append("<button id='button-problems'>Make Special</button>");

    // add a click listener to the problems button
    $("#button-problems").click(function(){
        // now add (or subtract) the "special" class to the section
        $("#problems").toggleClass("special");
    });

    $("#reflection").append("<button id='button-reflection'>Make Special</button>");

    // add a click listener to the reflection button
    $("#button-reflection").click(function(){
        // now add (or subtract) the "special" class to the section
        $("#reflection").toggleClass("special");
    });
}
main()
