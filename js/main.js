document.querySelector('#button').addEventListener('click', makeReq)
const ul = document.querySelector('ul')
function makeReq(){

  const userName = document.querySelector("#name").value;

  fetch(`/palindrome?checkPalindrome=${userName}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      input.textContent = data.message
    });

}
