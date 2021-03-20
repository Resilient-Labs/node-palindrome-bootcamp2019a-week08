document.querySelector("button").addEventListener('click', function () {
    let userInput = document.querySelector("input").value
    let string = userInput.split('').join('');
    fetch (`/api?word=${string}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("span").innerText = data.palindrome
    });
  })