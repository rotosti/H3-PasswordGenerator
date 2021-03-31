// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

    var characterAmount = 0;
    var lowerCharactersSelected = false;
    var upperCharactersSelected = false;
    var numbersSelected = false;
    var specialCharactersSelected = false;
    //var continueSelection = true;

    var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numberCharacters = "0123456789";
    var specialCharacters = "!@#%^&*()";

    characterAmount = prompt("How many characters do you want in your password?")

    while (characterAmount < 8 || characterAmount > 128) {
        alert("Only between 8-128 characters allowed.")
        characterAmount = prompt("How many characters do you want in your password?");
    }

    lowerCharactersSelected = confirm("Do you want lower case characters?");

    upperCharactersSelected = confirm("Do you want upper case character?");

    numbersSelected = confirm("Do you want numbers?");

    specialCharactersSelected = confirm("Do you want special characters?");

    // if (!lowerCharactersSelected && !upperCharactersSelected && !numbersSelected && !specialCharactersSelected) {
      
    // }
    var characterSelection = ""; // user selected characters to choose from
    var generatedPassword = ""; // what i am returning back to the function caller

    if (lowerCharactersSelected) {
      characterSelection += lowerCaseCharacters; // characterSelection = characterSelection + lowerCaseCharacters;
    }
    if (upperCharactersSelected) {
      characterSelection += upperCaseCharacters;
    }
    if (numbersSelected) {
      characterSelection += numberCharacters;
    }
    if (specialCharactersSelected) {
      characterSelection += specialCharacters;
    }

    for (var i = 0; i < characterAmount; i++ ) {
      var index = Math.floor(Math.random() * (characterSelection.length - 0) + 0);
      generatedPassword += characterSelection[index];
    }

    return generatedPassword;
}

FUNCTION2=MATH.FLOOR(FUNCTION1=MATH.RANDOM)




// ask for amount characters
// lower
// uppercase
// numbers
// specialcharacters
// if none -> do you want to continue making a password? ok -> retart cancel -> go back to homepage
// what characters user wants
// generate password
// output password to user
