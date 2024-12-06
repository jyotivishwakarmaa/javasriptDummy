//for in loop
//we can use it for array and function.

const person = {
    name : "John",
    age : 32,
    city : "London",
};

let text = "";              //for print in inner html
    for(let x in person){
        text += person[x]+ "<br>";
    }




    //using array
    const numbers = [345, 67, 78, 24, 89];

    let text1 = "";
     for(let i in numbers)
        text1 += numbers[i]+ "<br>";
    

    //for off loop
    //use for array string and function

    const name = "javascript";
    let text2 = "";

    for(let x of name){
        text2 += x + "<br>"
    };



    //for array
    //in for in loop variable will contain index of each persons
//in for off loop variable will contain value of each persons

//for(variable in array){
//console,log(array[variable])
//}


//for(variable of array){
//console,log(variable);
//}
    const persons = ["Jyoti", "Atika", "Sharon", "Priya"];
    let text3 = "";

    for(let z of persons){
        text3 += z + "<br>"
    };
    document.getElementById("demo").innerHTML = text3;




//for in and for of
    const num1 = [345, 67, 78, 24, 89];

    for(let a in num1){
        console.log(num1[a]*10);
    }
      for (let a of num1) {
        console.log(num1[a] * 10);
      }
    
    