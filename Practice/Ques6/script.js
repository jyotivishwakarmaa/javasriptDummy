//1. Write a function to display your name in console ,alert and innerhtml of any element.

function show() {
  let myname = document.getElementById("input").value;

  console.log(myname);
  alert(myname);
  document.getElementById("demo").innerHTML = myname;
}

//2. Write a function to get the value of an input tag and display it in alert , console and innerhtml.

function display() {
  let name = document.getElementById("myinput").value;

  console.log(name);
  window.alert(name);
  document.getElementById("demo").innerHTML = name;
}

//3. Write a function to get the values from 3 input tags and display it in innerhtml in string form (concatinate).

function details() {
  let name = document.getElementById("input1").value;
  let age = document.getElementById("input2").value;
  let city = document.getElementById("input3").value;

  document.getElementById("demo").innerHTML = name + " " + age + " " + city;
}
