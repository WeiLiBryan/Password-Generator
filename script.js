// Assignment Code
var generateBtn = document.querySelector("#generate");
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
  var length = passLength();

  // var declaration for looping criteria check
  var correct = true;
  
  // Declaring vars for loop
  var LC, UC, NU, SP;
  // Prompts criteria and repeats if all are false
  while (correct === true) {
    LC = lowerCase();
    UC = upperCase();
    NU = numeric();
    SP = special();
    correct = criteriaCheck(LC, UC, NU, SP);
  }

  // Points toward possible options
  var up = upperOptions();
  var low = lowerOptions();
  var numer = numericOptions();
  var spec = specialOptions();
  
  var password = "";

  // Repeats until password length is the same as user specified
  while (password.length < length) {
    // Picks which character to input 1-4
    var roll = diceRoll();

    if (roll === 1 && UC === true) {
      password += up[Math.floor(Math.random() * up.length)];
      console.log(password);
    }

    else if (roll === 2 && LC === true) {
      password += low[Math.floor(Math.random() * low.length)];
      console.log(password);
    }

    else if (roll === 3 && NU === true) {
      password += numer[Math.floor(Math.random() * numer.length)];
      console.log(password);
    }

    else if (roll === 4 && SP === true) {
      password += spec[Math.floor(Math.random() * spec.length)];
      console.log(password);
    }
  }

  return password;
  
}

// Chooses a random number from 1-4
function diceRoll() {
  var randomNumber = Math.floor(Math.random() * 4) + 1;
  return randomNumber;
}

// Options if uppercase is enabled
function upperOptions(){
  var upper = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ];
  return upper;
}

// Options if lowercase is enabled
function lowerOptions(){
  var lower = [ 
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
  ];
  return lower;
}

// Options if numeric is enabled
function numericOptions(){
  var num = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
  ];
  return num;
}

// Options if special characters is enabled
function specialOptions(){
  var spe = [
    "!", "@", "#", "$", "%", "^", "&", "*"
  ];
  return spe;
}

// Function prompts user to choose password length
function passLength() {
  // Enter pass length
  var length = Number(prompt("How long do you want your password to be? (8-128 characters)"));
  
  // Check length, Restarts function if not within range
  if (length < 8 || length > 128 || isNaN(length)){
    alert("Must be 8 - 128 characters");
    passLength();
  }
  else {
    return length;
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
