let header = "Templates literals";
let tags = ["template string", "javascript","es6"];
let text = `<h2>${header}</h2><ul>`;

for(let x of tags){
        text += `<li>${x}</li>`;
}

text += `</ul>`;

document.getElementById("container").innerHTML = text;




//a function pass in another function as an argument is called as a call bacck function.

//for each loop   //its apply only on array. //it is a method not a loop, it doesn't return anything.

const numbers = [23, 45, 78,90];

let text1 = numbers.forEach(calculate);
let text2 = "";

function calculate(y){
    console.log(y*100);
}


//math object


let output = Math.PI;
output = Math.round(45.24236789);
//math.roung rounds to the nearest whole number

output = Math.ceil(45.234);
//Math.ceil rounds to the nearest higher whole number

output = Math.floor(35.677);
//Math.floor rounds to the nearest lower whole number

output = Math.trunc(45.678)
confirm.log(output);

