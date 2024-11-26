//Declare 5 variable for name, age, city, course and country and display in console

var name = "Jyoti";
var age = 24;
var city = "Bhopal";
var course = "JAVA FULL STACK";
var country = "India";

//console.log(name + " " + age + " " + city + " " + course + " " + country);
console.log(name);
console.log(age);
console.log(city);
console.log(course);
console.log(country);





//Declare 2 string variables and concate them into one variable and display in alert

var firstname = "JYOTI";
var surname = "VISHWAKARMA";

window.alert(firstname + " " + surname);





//Declare 3 variables for first name alst name and hobby and display it in inner html in one line.

var h1 = document.getElementById("demo");

var fname = "Jyoti";
var lname = "Vishwakarma";
var hobby = "Dancing";

h1.innerHTML = fname + " " + lname + " " + hobby;

h1.style.color = "orange";
h1.style.backgroundColor = "black";
h1.style.textAlign = "center";
h1.style.padding = "20px";
h1.style.height = "50px";
h1.style.fontSize = "50px";
h1.style.fontWeight = "Bold";
h1.style.border = "2px solid black";
h1.style.borderRadius = "80px";




//Take user name and age from user and display it in alert console and innerhtml.

var h1 = document.getElementById("demo");

var name = prompt("Enter your name");
var age = prompt("Enter your age");

console.log(name + " " + age);

h1.innerHTML = name + " " + age;

h1.style.color = "Black";
h1.style.backgroundColor = "Skyblue";
h1.style.padding = "10px";
h1.style.fontSize = "50px";
h1.style.fontWeight = "60px";
h1.style.fontStyle = "italic";
h1.style.border = "5px solid orange";
h1.style.borderRadius = "80px";
h1.style.textAlign = "center";
