//input => array => split then put to an array
document.querySelector('button').addEventListener('click', makeRequest)

function makeRequest(){

  const word = document.querySelector('input').value;

  fetch(`/api?word=${word}`)

  .then(response => response.json())

.then(data => {
  if(data['result']){
    document.querySelector('.results').
    innerText = 'THIS ! IS ! PALINDROME!!! ┌(▀Ĺ̯ ▀-͠ )┐'
  } else{
    document.querySelector('.results').
    innerText = 'No.. No. This No Palindrome.. Sawy 😢'
  }
})
}
