// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate")

var input1 = window.prompt("Choose a  number between 8-128 to be your password length"); 
  
  if (input1 > 8 || input1 < 128 ){
  } 

var input2 = confirm("Press 'Ok' if you want lower case letters in your password")
  if ( ) {s} 

var input3 = confirm("Press 'Ok' if you want upper case letters in your password")
  if () {}

var input 4 = confirm("Press 'Ok' if you want numbers in your password")
  if () {}

var input 5 = confirm("Press 'Ok' if you want special characters in your password")
  if () {}


// Write password to the #password input
var writePassword = function() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 

writePassword(); 