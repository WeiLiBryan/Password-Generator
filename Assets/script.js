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
    criteria(chars);
  }
}

// Prompts user criteria for password
function criteria(chars) {
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
    passwordGeneration(lowerC, upperC, numeric, special, chars)
  }
}

function passwordGeneration(lowerC, upperC, numeric, special, chars) {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  splitStr(upper);

  var lower = "abcdefghijklmnopqrstuvwxyz";
  splitStr(lower);

  var nums = "1234567890";
  splitStr(lower);
  
  var ch = "!@#$%^&*";
  splitStr(ch);
}

// Splits given strings
function splitStr(str) {
  str.split("");
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
