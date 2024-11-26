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
h1.style.fontStyle = "italic"
h1.style.border = "5px solid orange";
h1.style.borderRadius = "80px";
h1.style.textAlign = "center";
