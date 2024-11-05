/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Wes modes
   Date: 2023
*/

function  main(){
    // new code
  // add button to all three sections
  $(".special_section").append("<button class='special-sections-button'>Make Special</button>");
  // add a click listener to the button
  $(".special-sections-button").click(function(){
    // now add (or subtract) the "special" class to the section
    $(this).parent().toggleClass("special");
  });
 };
main()
