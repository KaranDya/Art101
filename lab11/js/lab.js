/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Wes modes
   Date: 2024
*/

  // Sorts the characters of a string in alphabetical order.
  function sortString(inputString) {
      // We have to convert our string to an array and back again to sort it
      return inputString.split('').sort().join('');
    }
    // click listener for button
  $("#submit").click(function(){

  // get value of input field
    const userName = $("#user-name").val();
    // now let's sort it
    userNameSorted = sortString(userName);
    // append a new div to our output div
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
  });
  
  // create buttons and listeners in order to change the color of each panel
  $("#challenge").append("<button id='button-challenge'>color me!</button>");

  $("#button-challenge").click(function(){
    $("#challenge").toggleClass("special");
  });

  $("#problems").append("<button id='button-problems'>color me!</button>");

  $("#button-problems").click(function(){
    $("#problems").toggleClass("special2");
  });

  $("#reflection").append("<button id='button-reflection'>color me!</button>");

  $("#button-reflection").click(function(){
    $("#reflection").toggleClass("special3");
  });