//Declare 2 string variables and concate them into one variable and display in alert


var firstname = "JYOTI";
var surname = "VISHWAKARMA";

var fullName = firstname+" "+surname;


//alert box
window.alert(fullName);

//in console
console.log(fullName);


//in inner html (on browser)
var h1 = document.getElementById("demo");
h1.innerHTML = fullName;
