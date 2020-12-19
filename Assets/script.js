// Assignment Code
var generateBtn = document.querySelector("#generate");
var cardBody = document.querySelector("#cardbody");
var passwordTextBox = document.querySelector("#password");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  passwordTextBox.innerHTML = passwordText.value;

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

  var password = "display";
  var passwordAdd;
  
  for (var i = 0; i < length + 1; i++) {
    // Picks which character to input 1-4
    var randomNumber = Math.floor(Math.random() * 4) + 1;

    if (randomNumber === 1 && UC === true) {
      passwordAdd += upperOptions[Math.floor(Math.random() * upperOptions().length)];
      console.log(passwordAdd);
    }

    else if (randomNumber === 2 && LC === true) {
      passwordAdd += lowerOptions[Math.floor(Math.random() * lowerOptions().length)];
      console.log(passwordAdd);
    }

    else if (randomNumber === 3 && NU === true) {
      passwordAdd += numericOptions[Math.floor(Math.random() * numericOptions().length)];
      console.log(passwordAdd);
    }

    else if (randomNumber === 4 && SP === true) {
      passwordAdd += specialOptions[Math.floor(Math.random() * specialOptions().length)];
      console.log(passwordAdd);
    }
  }

  return password;
  
}


function upperOptions(){
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var split = splitStr(upper);
  return split;
}

function lowerOptions(){
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var split = splitStr(lower);
  return split;
}

function numericOptions(){
  var num = "1234567890";
  var split = splitStr(num);
  return split;
}

function specialOptions(){
  var spe = "!@#$%^&*";
  var split = splitStr(spe);
  return split;
}

// // Gives possible options for password
// function criteriaOptions() {
//   var options = [
//     upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//     lower = "abcdefghijklmnopqrstuvwxyz",
//     num = "1234567890",
//     spe = "!@#$%^&*"
//   ]
//   return options;
// }

// Splits given strings
function splitStr(str) {
  str.split("");
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




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
