let text = document.getElementById('enterTxt').value;

function palindrome(){

let text = document.getElementById('enterTxt').value;


/ *remove special characters, spaces and make lowercase*/
var removeChar = text.replace(/[^A-Z0-9]/ig, "").toLowerCase();

/ *reverse removeChar for comparison*/
var checkPalindrome = removeChar.split('').reverse().join('');

/ *Check to see if myString is a Palindrome*/
if(removeChar === checkPalindrome){

//   document.write("<div>"+ text + " is a Palindrome <div>");
  document.getElementsByName("p")[0].innerHTML = "This is palindrome: " + text
}else{

//   document.write("<div>" + text + " is not a Palindrome </div>");
  document.getElementsByTagName("p")[0].innerHTML = "This is not palindrome: " + text
}
// console.log("input", text, "special", removeChar, "reverse", checkPalindrome);
}

// console.log(myString);
document.getElementById('click').addEventListener('click', palindrome);
