//using dom you can manupulate 3 things
//innerHTML, style and attribute
//------------------------------------------------------------

let mypara = document.getElementById("demo");
console.log(mypara);

function display() {
  mypara.innerHTML = "*This is coming from javascript*";
}

function styling() {
  mypara.style.color = "pink";
  mypara.style.backgroundColor = "Black";
  mypara.style.textAlign = "center";
  mypara.style.fontSize = "50px";
  mypara.style.borderRadius = "60px";
}

var input1 = document.getElementById("myinput");
console.log(input1.value);

function change() {
  input1.value = "indore";
  myimage.src = "my.jpg";
}

//function expression

let changeValue = function () {
    return input1.value + " " + myimage.src;
};
console.log(changeValue());


// //arrow function

// let valuee =  function() => {
//   return input1.value + " " + myimage.src;
// }
// console.log(valuee());
