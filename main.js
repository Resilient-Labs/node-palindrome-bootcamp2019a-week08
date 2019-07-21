//   // added event listener to button to run the function when clicked
// document.querySelector("button").addEventListener('click', function() {
// // prevent default method to stop page from refereshing --> defualt of the form that the input and button are wrapped in
//   event.preventDefault()
// // variable string is a result of what the value will be spit out --> a string value
//   let string = document.querySelector('input').value
//   // arrayTwo is the og word from the input value with the methods splitting, reversing and joining the reversed word back together
//   let arrayTwo = string.split('').reverse().join('')
//   // arrayOne is the splitting the letters and joining the word creating the palindrome version
//   let arrayOne = string.split('').join('')
// // if og word is the same in comparision to the new array then the word is a palindrome, if not-- then the word is not a palindrome
//   if (arrayTwo === arrayOne) {
//
//
//     document.querySelector('p').innerHTML = `the word:${string} is palindrome`
//     // console.log('your word is a palindrome')
//   } else {
//     document.querySelector('p').innerHTML = `the word: ${string} is not a palindrome`
//       // console.log('your word is not a palindrome')
//   }
//
// })

document.querySelector('button').addEventListener('click', makeReq)

function makeReq(){

  const string = document.querySelector('input').value;
  const inputValue= string.split(' ').join('')

  fetch(`/api?word=${inputValue}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector('p').textContent = data.palindrome

    });

  }
