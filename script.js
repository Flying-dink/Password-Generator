// Assignment code here
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var special = "!@#$%^&*()_+"
var numbers = "123456789"
var allPossibleCharacters = "abcdefghijklmnopqrstuvwxyz"
var length 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  // reset all possible characters
allPossibleCharacters = "abcdefghijklmnopqrstuvwxyz"


  //prompt user 4x asking if it wants uppercase,numbers,or special chararcters
length = window.prompt("How long do you want your password to be?")
var wantUppercase = window.confirm("Do you want uppercase letters?")
var wantSpecial = window.confirm("Do you want special characters?")
var wantNumbers = window.confirm("Do you want numbers?")
  //take responses to the prompts and create a string of all possible characters
if (wantUppercase) {
  allPossibleCharacters+=uppercase

}
if (wantSpecial) {
  allPossibleCharacters+=special
}
if (wantNumbers) {
  allPossibleCharacters+=numbers
}

 //loop length times to select random characters from string of all possible characters
 var password = ""
  for (var i =0;i < length; i ++) {
password +=allPossibleCharacters[Math.floor(Math.random()*allPossibleCharacters.length)]
  } 
  console.log(password)
  //return password
  return password
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


