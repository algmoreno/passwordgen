// Assignment code here
var charset = ""; 
var retVal = "";
// Get references to the #generate element
var generateBtn = document.querySelector("#generate") 

var generatePassword = function() {
  retVal=""; 

  var inputLength = window.prompt("Choose a number between 8-128 to be your password length"); 
  
  if (inputLength > 8 || inputLength < 128 ) {
  } 

  if (inputLength < 8 || inputLength > 128 || inputLength === "") {
    alert("Please enter a valid response.") 
    return null; 
  }

var confirmLower = confirm("Press 'Ok' if you want lower case letters in your password");
var confirmUpper = confirm("Press 'Ok' if you want upper case letters in your password");
var confirmNumber = confirm("Press 'Ok' if you want numbers in your password");
var confirmSpecial = confirm("Press 'Ok' if you want special characters in your password");

  var length = inputLength; 

  if (confirmLower) {
    charset += "abcdefghijklmnopqrstuvwxyz"
  }
  if (confirmUpper) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if (confirmNumber) {
    charset += "123456789"
  }
  if (confirmSpecial) {
    charset += "!\"#$%&',()*+-./:;<>=@[]`{}|~"
  }
  
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
    
}

// Write password to the #password input
var writePassword = function() {
  var password = generatePassword();
  if (password === null) {
      password = generatePassword(); 
  }

  var passwordText = document.querySelector("#password"); 
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
// generateBtn.addEventListener("click", resetPassword); 