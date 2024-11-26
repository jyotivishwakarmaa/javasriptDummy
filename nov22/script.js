//Add event listner

let button = document.getElementById("btn");

//whenever you pass a function as an argument to another function never use ()[paranthesis].
//you can call regular function before declaration but not arrow function and function expression.
button.addEventListener("click", display);

button.addEventListener("mousemover", function(){
    console.log("hello from mouseover event");
});




//querry selector

let h1 = document.querySelectorAll("h1");
console.log(h1);

h1[0].innerHTML = "hello from querry selector";
h1[0].style.color - "red";
h1[0].style.backgroundColor = "pink";




//regular function

function display(){

    alert("function called");
}

//function expression

const display1 = function(){

    alert("function expression called");
};

//arrow function

const display2 = () => {

    alert("arrow function called");

};