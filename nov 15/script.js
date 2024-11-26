var heading = document.getElementById("demo");

var fname = "John Doe";
var age = "34";

//concatination
console.log(fname + " " + age);

//print on html h1
heading.innerHTML = fname + " " + age;

//To get value from user

// var userName = prompt("Enter your name : ");
// var userAge = prompt("Enter your age");

// heading.innerHTML = userName+" "+userAge;

// var color = prompt("Enter color : ");
// var BGcolor = prompt("Enter Background color : ");

// heading.style.color = color;
// heading.style.backgroundColor = BGcolor;

//change attribute

var myimage = document.getElementById("myimage");
myimage.src = "images.jpg";

//TASK
//take a name from user and display in inner html of h1 element and change its style
//
