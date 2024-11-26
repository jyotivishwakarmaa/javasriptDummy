
//Events in js

function display() {
  console.log("Hello world");
}


//event print in ninner html
function show() {
  var name = "Jyoti";
  var age = 20;
  document.getElementById("demo").innerHTML = name + " " + age;
}


//event using prompt

function cube() {
  var number = prompt("Enter a number");

  document.getElementById("demo").innerHTML =
    "cube is" + " " + number * number * number;
}


//styling in inner html by click on button

function change(){
  demo.innerHTML = "Jyoti";
  demo.style.color = "orange";
  demo.style.backgroundColor = "black";
  demo.style.textAlign = "center";
  demo.style.fontSize = "60px";
 }