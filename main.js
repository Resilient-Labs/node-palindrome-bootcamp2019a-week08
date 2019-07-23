// Morning Challenge - simple node app that lets a user enter a string. The app will then let the user know if the string is a palindrome or not.

document.querySelector("button").addEventListener('click', function () {
  let userData = document.querySelector("input").value
  let checkString = userData.split(' ').join('')
  fetch (`/api?word=${checkString}`)
  .then(response => response.json())
  .then((data) => {
    console.log(data);
    document.querySelector("p").textContent = data.palindrome
  });

})
