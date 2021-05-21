// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate") 

// var gatherInfo = function() {
  var inputLength = window.prompt("Choose a number between 8-128 to be your password length"); 
  
    if (inputLength > 8 || inputLength < 128 ) {
    } 

    // if (inputLength < 8 || inputLength > 128 || inputLength === "") {
    //   var inputLength = window.prompt("Please enter a valid response.") 
    //   return false; 
    // }

  

var confirmLower = confirm("Press 'Ok' if you want lower case letters in your password");
var confirmUpper = confirm("Press 'Ok' if you want upper case letters in your password");
var confirmNumber = confirm("Press 'Ok' if you want numbers in your password");
var confirmSpecial = confirm("Press 'Ok' if you want special characters in your password");


var generatePassword = function() {
  var length = inputLength; 

  if (confirmLower) {
    charset = "abcdefghijklmnopqrstuvwxyz",
    retVal = ""; 
}
  else if (confirmUpper) {
    charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    retVal = ""; 
}
  else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!\"#$%&',()*+-./:;<>=@[]`{}|~",
    retVal = "";  
}
  else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!\"#$%&',()*+-./:;<>=@[]`{}|~",
    retVal = ""; 
}
  else if (confirmLower && confirmUpper && confirmNumber) {
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789",
    retVal = ""; 
}
  else if (confirmLower && confirmUpper) {
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    retVal = ""; 
}
  else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!\"#$%&',()*+-./:;<>=@[]`{}|~",
    retVal = ""; 
}
  
  
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

// Write password to the #password input
var writePassword = function() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

writePassword(); 