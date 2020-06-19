// Assignment Code
var generateBtn = document.querySelector("#generate");
// Declared function generatePassword
function generatePassword() {
  //Created var passLength, created a prompt and converted prompt answear to number using parseInt
   var passLength = parseInt(prompt("Choose pasword length from 8 - 128 characters"));
   if(passLength <8 || passLength >128) {
      alert("Password length should be beetween 8 and 128 characters!");
      return "";
   }
   var userLowCaseChoice = confirm("Include lower case characters?");
   var userUppCaseChoice = confirm("Include Upper case characters?");
   var userNumCharChoice = confirm("Include numbers?");
   var userSpeciCharChoice = confirm("Include special characters?");
   if (userLowCaseChoice === false && userUppCaseChoice === false && userNumCharChoice === false && userSpeciCharChoice === false) {
     alert("Select at least one criteria for the password!");
     return "";
   }

   //Created variable password for generated pass
   var password = "";
   var lowChars = "abcdefghjklmnopqrstuvwxyz";
   var upperChars = lowChars.toUpperCase();
   var numChar = "1234567890";
   var speciChar = "!@#$%^&*()_+{}|<>?"
   var selectedChars = "";
   
   if(userLowCaseChoice === true) {
    selectedChars += lowChars;
   }
   if(userUppCaseChoice === true) {
     selectedChars += upperChars;
   }
   if(userNumCharChoice === true) {
     selectedChars += numChar;
   }
   if(userSpeciCharChoice === true) {
     selectedChars += speciChar;
   }

    for (var i = 0; i < passLength; i++) {
      var index = Math.floor(Math.random()*selectedChars.length);
       password += selectedChars[index];
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
