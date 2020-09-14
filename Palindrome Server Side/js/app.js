let answer = document.getElementById('answer');
let button = document.querySelector('.btn')
let form = document.querySelector('.form')

function findPal() {
let input = document.querySelector('.palCheck').value

  fetch(`/palindrome?pal=${input}`)
  .then(response => response.json())
    .then((result) =>{
      if(result === true){
        answer.innerHTML = (`${input} is a palindrome!`);
     } else if (result === false){
       answer.innerHTML = (`${input} is not a palindrome!`);
       }
   })
}

button.addEventListener("click", findPal);


form.addEventListener("submit", (event) => {
  event.preventDefault()
})
