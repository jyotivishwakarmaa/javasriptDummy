let output;
output = Math.sign(-5436);
//Math.sign(x) returns if x is negative(-1), null or positive(1).

output = Math.pow(2, 3);
//Math.pow(x,y) returns the value of x to the power of y.

output = Math.sqrt(90);
//returns square root of the number

output = Math.min(90, 34, 59, 90, 1000, 23300);
//find the lowest number in the list of argument

output = Math.max(90, 34, 59, 90, 3098, 3498);
//find the highest number in the list of argument

output = Math.random();
//returns random number between 0&1

output = Math.floor(Math.random() * 10);
//returns random number between 0-10
output = Math.floor(Math.random() * 100);

output = Math.floor(Math.random() * 100) + 1;
//returns random number between 1-100
console.log(output);

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandomNumber(200, 500));

function getIncludeNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getIncludeNumber(200, 400));

//Map

const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map(double); //const newNumbers = numbers.map(function doubl(x));

function double(x) {
  return x * x;
}
console.log(numbers);
console.log(newNumbers);

const cars = ["Audi", "Mercedes", "jaguar", "BMW"];

let text = "<ul>";

cars.map((key) => {
  text += `<li>${key}</li>`;
});

text += `<ul>`;

document.body.innerHTML = text;
