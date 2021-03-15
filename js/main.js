//   house Hayden 

document.querySelector("button").addEventListener('click', function () {
    let userInput = document.querySelector("input").value
  
    let string = userInput.split('').reverse().join('');
    fetch (`/palindrome?term=${string}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("span").textContent = data.palindrome
    });
  
  })

//   let word = str.split('').reverse().join('')

//  for (let  i = 0 ; i < str.length i++)


