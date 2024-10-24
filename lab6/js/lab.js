// index.js - Transportation
// Author: Karan Dahiya
// Date: Oct 24 2024


//variables
myTransport = ["HondaAccord", " ", "cars", " ", "bikes", " ", "planes", " ", "buses"];


//declaring my car as an object
myMainRide = {
  make: "Honda",
  model: "Accord",
  color: "Black",
  year: 2022,
  age: function() {
      return 2024 - this.year;
  }
}


//Output
document.writeln("Different modes of my transportation: " + myTransport + "<br>");




//object as an output
document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");