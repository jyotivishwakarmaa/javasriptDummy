//1. write a function that takes 3 parameters and perform arithmetic operations on that.

function addition(num1, num2, num3) {
  return num1 + num2 + num3;
}
console.log(addition(20, 30, 40));
//................................................


function substraction(num1, num2, num3) {
  return num1 - num2 - num3;
}
console.log(substraction(20, 30, 40));
//...............................................


function multiply(num1, num2, num3) {
  return num1 * num2 * num3;
}
console.log(multiply(20, 30, 40));
//..............................................


function divide(num1, num2, num3) {
  return num1 / num2 / num3;
}
console.log(divide(20, 30, 40));
//.............................................




//2. take 2 variables of your name and age and display it using the function in innerhtml and console

var name = "Jyoti";
var age = 20;
function person(name, age) {
  return name + " " + age;
}
console.log(person(name, age));
document.getElementById("demo").innerHTML = person(name, age);
