const btn = document.querySelector('.enter')
const result = document.querySelector('.result')
const img = document.querySelector('img')
const reset = document.querySelector('.reset')

function palindrome(purplerain) {
  let inputNoSpace = purplerain.replace(/\s/g, '')
  let inputLowercase = inputNoSpace.toLowerCase()
  let reverseInput = inputLowercase.split('').reverse().join('')
  if(purplerain == 0){
    alert('Please type in the input value to check if it is a palindrome')
  }else if(inputLowercase === 'leonnoel'){
    result.innerHTML = 'ALSO KNOWN AS, BOSSMAN'
    img.src = "images/leon.png"
  }else if (reverseInput === inputLowercase){
    result.innerHTML = 'THIS IS A PALINDROME';
    img.src = "http://giphygifs.s3.amazonaws.com/media/TdfyKrN7HGTIY/giphy.gif"
  }else{
    result.innerHTML = 'THIS IS NOT A PALINDROME';
    img.src = "https://media.giphy.com/media/3ohc1h1vy6Gtv4uOLC/giphy.gif"
  }
}

btn.addEventListener('click', () => {
  let userInput = document.querySelector('.userInput').value
  palindrome(userInput);
})
