document.getElementById("myForm").addEventListener("submit", validate);

function validate(e) {
//to prevent the default behavior of form submission

    e.preventDefault();

    //fetch input values
  let myName = document.getElementById("name").value;
  let myEmail = document.getElementById("email").value;
  let password = document.getElementById("psw").value;
  let confirmPass = document.getElementById("cnfpsw").value;

  console.log(myName, myEmail, password, confirmPass);

  //check if any field is empty

//   if( 
//     myName === ""||
//      myEmail === ""||
//       password === ""||
//        confirmPass === ""||
//   ){
//     alert("All fields required");
//     return false;
  


  if (myName == "" || myEmail == "" || password == "" || confirmPass == "") {
    alert("All fields are required");
    return false;
  }

  if(password != confirmPass){
    alert("password does not match")
    return false;
  }
   alert("Form submitted successfully!");

}
 
