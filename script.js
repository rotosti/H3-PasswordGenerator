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

    var continueGeneratingPassword = true;

    // amount of character selection
    var characterAmount = parseInt(prompt("How many characters do you want in your password?"));

    while (isNaN(characterAmount) || characterAmount < 8 || characterAmount > 128) {
        continueGeneratingPassword = confirm("Invalid input. A number between 8-128 is required to continue. Would you" +
                                             " like to continue creating a password?");

        if (!continueGeneratingPassword) {
            return "User cancelled password generation process."
        }

        characterAmount = prompt("How many characters do you want in your password?");
    }

    // type of character selection
    var lowerCharactersSelected = confirm("Do you want lower case characters?");
    var upperCharactersSelected = confirm("Do you want upper case character?");
    var numbersSelected = confirm("Do you want numbers?");
    var specialCharactersSelected = confirm("Do you want special characters?");

    while (!lowerCharactersSelected && !upperCharactersSelected &&
           !numbersSelected && !specialCharactersSelected && continueGeneratingPassword) {

        continueGeneratingPassword = confirm("You must pick at least one type of character to " +
                                             "generate password. Continue generating password?");
        
        if (!continueGeneratingPassword) {
            return "User cancelled password generation process.";
        }

        lowerCharactersSelected = confirm("Do you want lower case characters?");
        upperCharactersSelected = confirm("Do you want upper case character?");
        numbersSelected = confirm("Do you want numbers?");
        specialCharactersSelected = confirm("Do you want special characters?");     
    }

    // password generation
    var userCharacterPool = "";

    if (lowerCharactersSelected) {
        userCharacterPool += "abcdefghijklmnopqrstuvwxyz";
    }
    if (upperCharactersSelected) {
        userCharacterPool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (numbersSelected) {
        userCharacterPool += "0123456789";
    }
    if (specialCharactersSelected) {
        userCharacterPool += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    }

    var generatedPassword;
    var passwordValidation = false;

    while (!passwordValidation) {

        generatedPassword = "";

        for (var i = 0; i < characterAmount; i++ ) {
            var index = Math.floor(Math.random() * (userCharacterPool.length - 0) + 0);
            generatedPassword += userCharacterPool[index];
        }

        if (lowerCharactersSelected && !/[a-z]/.test(generatedPassword)) {
            passwordValidation = false;
            console.log("missing lower case letter. REMAKING")
        } else if (upperCharactersSelected && !/[A-Z]/.test(generatedPassword)) {
            passwordValidation = false;
            console.log("missing upper case letter. REMAKING")
        } else if (numbersSelected && !/[0-9]/.test(generatedPassword)) {
            passwordValidation = false;
            console.log("missing numbers REMAKING")
        } else if (specialCharactersSelected && !/!-./.test(generatedPassword) && 
                   !/:-@/.test(generatedPassword) && !/\[-'/.test(generatedPassword) && 
                   !/{-~/.test(generatedPassword)) {            
            passwordValidation = false;
            console.log("missing characters REMAKING")
        } else {
            passwordValidation = true;
            console.log("password has PASSED")
        }
    }

    return generatedPassword;
}



