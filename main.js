document.querySelector("button").addEventListener('click', check)
document.getElementsByClassName(".clickMe").innerHTML = "Check"

// let word =" "
let answer = document.querySelector('h3')


function check() {

  let putYourWord = document.querySelector(".check").value
  fetch('/palindrome?str=' + putYourWord )
    .then((palindromeResponse)=>palindromeResponse.json())
    .then(isPalindrome=>{
      if (isPalindrome) {
    answer.innerText = `${putYourWord.toUpperCase()} is a palindrome!`
  } else {
    answer.innerText = `${putYourWord.toUpperCase()} is not a palindrome! Try again!`
  }
    })
  // document.getElementsByClassName(".clickMe").innerHTML = "Check"
  // let newWord = putYourWord.split('').reverse().join('')
  // console.log(newWord, putYourWord)
  
}