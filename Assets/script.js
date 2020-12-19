// Assignment Code
var generateBtn = document.querySelector("#generate");
var cardBody = document.querySelector("#cardbody");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generates the password
function generatePassword() {
  // Set pass length
  length = passLength();

  // var declaration for looping criteria check
  var correct = true;
    // Prompts criteria and repeats if all are false
  while (correct === true) {
    var LC = lowerCase();
    var UC = upperCase();
    var NU = numeric();
    var SP = special();
    correct = criteriaCheck(LC, UC, NU, SP);
  }

  var password;
  // Checks what user asked
  for (i = 0; i == length; i++){
    if (LC === true){
      
    }
  }

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
function criteriaCheck(LC, UC, NU, SP) {
  if (LC === false && UC === false && NU === false && SP === false) {
    alert("Must have at least one criteria");
    return true;
  }
  else {
    return false;
  }
}

// Splits given strings
function splitStr(str) {
  str.split("");
}

// Gives possible options for password
function criteriaOptions() {
  var options = [
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "abcdefghijklmnopqrstuvwxyz",
    "1234567890",
    "!@#$%^&*"
  ]

  return options;
}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
