//these are the 4 ways to display output from javascript
//variable...
//var age=30;...//global scope
//{
 //   var name= "john";...//block scope
//}



var global1 = "john";
var global2 = "harry";
var global3 = "simon";

  //var has globat scope and let and const has block or function scope

 {
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(b);
}
{
    console.log(a);
    // console.log(b);
      console.log(c);
}




console.log("Hello");
window.alert("Hello world");
document.write("Hello world");


document.getElementById("demo").innerHTML = "Hello world";