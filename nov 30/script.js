var para = "hello";
var name = "john";
var data = `This is a string`;             //`` is a template literal

let h1 = document.getElementById("demo");
let div = document.getElementById("trial")
h1.innerHTML = `Hi this is the ans ${para} ${name} 
${data}`;

//Template literals or String literals
//div.innerHTML = "<h1>" + name + "</h1>";

div.innerHTML = `<h1>${name}</h1>`;



//WAF to display the name & city 0f a person using template literals in html.
 function  display(){
var name = "Jyoti";
var city = "Bhopal";
var detail = `This is detail`;

let h1 = document.getElementById("demo");
h1.innerHTML = `Hi my name ${name} ${city} ${detail}`;

}