
// always remember that node.js need to restart when changes made
// we need to add a eventlistener to our button once user places text
// once we click on button the function will run by grabbing the value 
// input and check if the string is palindrome using .split and .join method.
//.split('') method converts the string into single array characters and join
// put them together
// worked with house hayden and mentor mike 



document.querySelector("button").addEventListener('click', function () {
  let userInput = document.querySelector("input").value

  let string = userInput.split('').join('');
  fetch (`/palindrome?term=${string}`)
  .then(response => response.json())
  .then((data) => {
    console.log(data);
    document.querySelector("span").textContent = data.palindrome
  });

})