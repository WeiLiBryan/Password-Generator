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
  var chars = prompt("How long would you like your password to be? (Characters)");
  charsInt = parseInt(chars);

  // Length limits
  if (charsInt < 8) {
    alert("Must be at least 8 characters.");
    passLength();
  } else if (charsInt > 128) {
    alert("Must be less than 128 characters");
    passLength();
  } else {
    // Returns length of password
    charsLength = charsInt.length;
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

// Checks if all criteria returns false
function criteriaCheck() {
  if (lowerCase() === false && upperCase() === false && numeric() === false && special() === false) {
    alert("Must have at least one criteria");
    return false;
  }
  else {
    return true;
  }
}

function criteriaOptions() {
  var upperOp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  upperOp = splitStr(upperOp);

  var lowerOp = "abcdefghijklmnopqrstuvwxyz";
  lowerOp = splitStr(lowerOp);

  var numericOp = "1234567890";
  numericOp = splitStr(numericOp);
  
  var charOp = "!@#$%^&*";
  charop = splitStr(charOp);

  return upperOp, lowerOp, numericOp, charOp;
}

// Generates the password
function generatePassword() {
  // Set pass length
  passLength();

  // var declaration for looping criteria check
  var cont = true;
    // Prompts criteria and repeats if all are false
  while (cont === true) {
    lowerCase();
    upperCase();
    numeric();
    special();
    cont = criteriaCheck();
  }

}

// Splits given strings
function splitStr(str) {
  str.split("");
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
