//Worked with Garner Gang to complete - Asianna, Julie, Brian, Ziya, Dash, Wade, Tanecia
document.querySelector('button').addEventListener('click', palindrome)
let answerArea = document.querySelector('h3')

function palindrome(){
  let word = document.querySelector('input').value
  word = word.toLowerCase()
  fetch(`/palindrome?word=${word}`)
  .then(response => response.json())
  .then(answer => {
    if(answer === true){
      if(word === 'leon noel'){
        answerArea.innerText = `Yes Leon, ${word} is a palindrome`
      }
      else {
        answerArea.innerText = `${word} is a palindrome`
      }
    }else if(answer === false){
      answerArea.innerText = `${word} is not a palindrome`
    }
  })
}