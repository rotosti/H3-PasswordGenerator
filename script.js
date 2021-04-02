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

// main function that creates password, returns STRING to caller
function generatePassword() {

    // user contolled boolean, indicates whether the user wants to continue making the password
    var continueGeneratingPassword = true;

    // user seclection of how many characters to put in the password, input is parsed into an integer and stored in a variabele
    var characterAmount = parseInt(prompt("How many characters do you want in your password?"));

    // validates the user input and makes sure given criteria is met, value provided is a number from 8-128, if not a number
    // or number does not fall within range, will scold the user, ask if user wants to contine, and retake information. will 
    // continue to do so until the user decides to terminate or provides valid information
    while (isNaN(characterAmount) || characterAmount < 8 || characterAmount > 128) {
        continueGeneratingPassword = confirm("Invalid input. A number between 8-128 is required to continue. Would you" +
                                             " like to continue creating a password?");
        // condition if user decides to stop process of making password
        if (!continueGeneratingPassword) {
            return "User has cancelled password generation process."
        }

        // collects character amount again
        characterAmount = prompt("How many characters do you want in your password?");
    }

    // user selection of types of characters to use in password 
    var lowerCharactersSelected = confirm("Do you want lower case characters?");
    var upperCharactersSelected = confirm("Do you want upper case character?");
    var numbersSelected = confirm("Do you want numbers?");
    var specialCharactersSelected = confirm("Do you want special characters?");

    // checks to see if at least one type of character was selected by the user, if not, scolds the user and then
    // asks if the user wants to continue. if the user decides to continue, asks the type of character selections
    // again
    while (!lowerCharactersSelected && !upperCharactersSelected &&
           !numbersSelected && !specialCharactersSelected && continueGeneratingPassword) {
        // verifies if user wants to continue generating a password or terminate process
        continueGeneratingPassword = confirm("You must pick at least one type of character to " +
                                             "generate a password. Continue generating a password?");
        // validates if user wants to terminate and terminates if user wants to end process
        if (!continueGeneratingPassword) {
            return "User cancelled password generation process.";
        }

        // attempt to regather users selection of types of characters to use in password creation
        lowerCharactersSelected = confirm("Do you want lower case characters?");
        upperCharactersSelected = confirm("Do you want upper case characters?");
        numbersSelected = confirm("Do you want numbers?");
        specialCharactersSelected = confirm("Do you want special characters?");     
    }

    // empty character bank which will be used to pull characters from to create password
    var userCharacterPool = "";

    // concatenates user selection bank with appropriate characters via if statements
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

    // variable which stores final password
    var generatedPassword;

    // variable necessary to exit out of a while loop if password that is generated meets users character criteria
    var passwordValidation = false;

    // this while loop generates the password and will validate if all character types are there with RegEx. the password
    // will first be generated and then validated. the password uses available characters from the character selection bank
    // in a for loop. randomness of characters is achieved with Math.random()
    while (!passwordValidation) {

        // variable which stores generated password for validation and return
        generatedPassword = "";

        // creates password by iterating the amount of password characters user chose and concatenating characters picked
        // at random from the character selection bank
        for (var i = 0; i < characterAmount; i++ ) {
            var index = Math.floor(Math.random() * (userCharacterPool.length - 0) + 0);
            generatedPassword += userCharacterPool[index];
        }
        // password validation using regex
        // verifies if user selected lower case letters and if there is at least 1 lower case letter in the generated password
        if (lowerCharactersSelected && !/[a-z]/.test(generatedPassword)) {
            passwordValidation = false;
        } 
        // verifies if user selected upper case letters and if there is at least 1 upper case letter in the generated password
        else if (upperCharactersSelected && !/[A-Z]/.test(generatedPassword)) {
            passwordValidation = false;
        } 
        // verifies if user selected numbers and if there is at least 1 number in the generated password
        else if (numbersSelected && !/[0-9]/.test(generatedPassword)) {
            passwordValidation = false;
        } 
        // verifies if user selected special characters and if there is at least 1 special character in the generated password
        else if (specialCharactersSelected && !/!-./.test(generatedPassword) && 
                   !/:-@/.test(generatedPassword) && !/\[-'/.test(generatedPassword) && 
                   !/{-~/.test(generatedPassword)) {            
            passwordValidation = false;
        } 
        // if password is validated and has at least one of each selected character type, will allow for password
        // generation loop to end so a password can be returned back to the function caller
        else {
            passwordValidation = true;
        }
    }

    // returns generated password to caller
    return generatedPassword;
}

