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
    // Returns length of password
    charsLength = chars.length;
    return charsLength;
  }
}

// Prompts and returns lowercase bool value
function lowerCase() {
  var lowerC = confirm("Would you like lowercase characters?");
  return lowerC;
}

// Prompts and returns uppercase bool value
function upperCase() {
  var upperC = confirm("Would you like uppercase characters?");
  return upperC;
}

// Prompts and returns numeric bool value
function numeric() {
  var num = confirm("Would you like to use numerics?");
  return num;
}

// Prompts and returns special char bool value
function special() {
  var spe = confirm("Would you like to use special characters?");
  return spe;
}

function criteriaCheck() {
  if (lowerCase() === false && upperCase() === false && numeric() === false && special() === false) {
    alert("Must have at least one criteria");
    // Repeats prompts
    lowerCase();
    upperCase();
    numeric();
    special();
  }
  else {
    return false;
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
    // Repeats prompts
    criteria();
  }
  else {
    
  }
}

function criteriaOptions() {
  var upperOp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  splitStr(upperOp);

  var lowerOp = "abcdefghijklmnopqrstuvwxyz";
  splitStr(lowerOp);

  var numericOp = "1234567890";
  splitStr(numericOp);
  
  var charOp = "!@#$%^&*";
  splitStr(charOp);
}

// Splits given strings
function splitStr(str) {
  str.split("");
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
