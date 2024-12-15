var age = 45;

console.log(typeof age);

var newage = age.toString();
console.log(typeof newage);


var data = "javascript";
//var dataLen = data.length;             //(.length)..to find the length of string(number of characters in string).
//console.log(dataLen);

var text = "it is a very easy and simple language";
var combined = data.concat(text);
console.log(combined);


var dataLen = data.length;             //returns the number of characters in string
console.log(dataLen);


var newChar = data.charAt(2);         //charAt() returns the character at a specific index number
console.log(newChar);

var uppercase = data.toUpperCase();
var lowercase = data.toLowerCase();
console.log(uppercase);
console.log(lowercase);

var newChar = data.charCodeAt(6);