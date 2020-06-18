// Assignment Code
var generateBtn = document.querySelector("#generate");
// Declared function generatePassword
function generatePassword() {
  //Created var passLength, created a prompt and converted prompt answear to number
   var passLength = parseInt(prompt("Choose pasword length from 8 - 128 characters"));
   var password = "";
   var characters = "abcdefghjklmnopqrstuvwxyz";

    for (var i = 0; i < passLength; i++) {
      var index = Math.floor(Math.random()*characters.length);
       password += characters[index];

    }
    return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
