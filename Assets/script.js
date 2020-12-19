// Assignment Code
var generateBtn = document.querySelector("#generate");
var cardBody = document.querySelector("#cardbody");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Function prompts user to choose password length
function passLength() {
  var chars = confirm("How long would you like your password to be?");

  // Length limits
  if (chars.length < 8) {
    alert("Must be at least 8 characters.");
  } else if (chars.length > 128) {
    alert("Must be less than 128 characters");
  } else {
    // Next checks user criteria
    criteria();
  }
}

// Prompts user criteria for password
function criteria() {
  var lowerC = confirm("Would you like lowercase characters?");
  var upperC = confirm("Would you like uppercase characters?");
  var numeric = confirm("Would you like to use numerics?");
  var special = confirm("Would you like to use special characters?");

  // At least one value must be true.
  if (lowerC === false && upperC === false && numeric === false && special === false) {
    alert("Must have at least one criteria");
    // Repeats promtps
    criteria();
  }
  else {
    
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
