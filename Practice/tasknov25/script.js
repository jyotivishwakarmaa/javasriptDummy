let button = document.getElementById("demo");

function display() {
  demo.innerHTML = "My Javascript";
  demo.style.color = "Black";
  demo.style.backgroundColor = "green";
  demo.style.textAlign = "center";
  demo.style.borderRadius = "40px";
}

function multiply(){
    let num1 = parseInt(document.getElementById("input1").value)
    let num2 = parseInt(document.getElementById("input2").value);

    var result = num1*num2;
    document.getElementById("demo").innerHTML = result;
}

function divide() {
  let num1 = parseInt(document.getElementById("input1").value);
  let num2 = parseInt(document.getElementById("input2").value);

  var result = num1 / num2;
  document.getElementById("demo").innerHTML = result;
}