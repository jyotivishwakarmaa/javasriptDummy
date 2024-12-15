let name = " john Doe ";

let trimmedText = name.trim();
//The trim()method removes whitespace from both sides of a strings:

console.log(trimmedText);
//split method
//Splitting a string into an array:

const data = "This is a string which will split into array";

const splitteData = data.split(" ");
console.log(splitteData);


//slice()method


/*slice extracts the part of the String, it takes 2 parameters
 1st is the starting position and second is the ending 
 position and ending position is not include*/

 let something = "javascript is a simple language";
 let newData = something.slice(0,6);
 const newData1 = something.slice(6);
 const newData2 = something.slice(-13,-4);



 console.log(newData);

 //substring
 //substring is similar to the slice but cant take negative values
 newData = something.substring(0,4);

 //substr
 //1st parameter starting position 
 //2nd parameter is length of string you want to extract

 newData = something.substr(0,20);
 console.log(newData);
 

 //Replace()method
//replace method replaces the first matched word
 const mystring = "All that glitter is not gold, gold is precious";
 let newText  = mystring.replace("gold", "silver");
 console.log(newText);

 let myData = `Google is a 
 great place to work. google offers great services and 
 google gives many amenities to the employees`;

 //i is for case sensitive search and g is for global search

 let newDataa = myData.replace(/google/ig, "amazon");
 console.log(newDataa);