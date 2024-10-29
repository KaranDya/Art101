// index.js - Functions! 
// Author: Karan Dahiya
// Date: Oct 28, 2024



//function
function usernameinput () {
    
    let userName = prompt("My name is");
    console.log("userName =", userName);
   
   
    //splittitng the string
   
   
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    
    
    //sorting the array
    
    
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    
    
    //joing the array back into a string. 
   
   
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    
    //get the sorted name.
    return nameSorted;
}
//the output
document.writeln("Your name: ", usernameinput(), "<br>");

