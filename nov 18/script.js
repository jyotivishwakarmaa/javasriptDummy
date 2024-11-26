//object literals

const person = {
    name : "john",
    age : 30,
    city : "Bhopal",
};

//to know the data type of person
console.log(typeof person);

console.log(person.name)
console.log(person.age)
console.log(person.city) 

//array

const numbers = [10, 20, 30, 40];

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);


//function

//it is a way to group code together you can run it anytime & anywhere

//function declaration

function sayHello(){
    console.log("Hello everyone")
    alert("Hello");
    document.write("Hello");
}

//function calling
sayHello();

//parameters
function addition(num1,num2){
    return num1+num2;
}


//arguments...20,30  argumrnts while calling a function
console.log(addition(20,30));
document.getElementById("demo").innerHTML = addition(100,700);

//parameters are when you are declaring a function 

//print variable value in function

let number = 345;

function cube(){
    return number*number*number;
}

console.log(cube());


//function expression

const multiply = function(x,y){
    return x*y;
};
console.log(multiply(5,8));



//arrow function

const divide = (a,b)=>{
    return a/b;
}

console.log(divide(100,20));