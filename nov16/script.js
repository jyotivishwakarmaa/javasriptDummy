//== compares only valaues not data type  and === check both value and data type

// var num1 = 10;
// var num = "10";

// if (num1 === num2) {
//   alert("both are equal");
// } else {
//   alert("not equal");
// }

//var can be redeclared and let and const cant be redeclared

//take 3 variables for your name, age and course
//display in it alert console and innerhtml

var h1 = document.getElementById("demo");
var name = "Jyoti";
var age = 24;
var course = "full stack";

console.log(name + " " + age + " " + course);
window.alert(name+ " " + age + " " + course);
h1.innerHTML = name + " " + age + " course";



