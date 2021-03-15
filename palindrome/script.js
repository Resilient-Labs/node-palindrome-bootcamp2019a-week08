/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");   

document.querySelector('button').addEventListener('click', clicky)

                                   

function clicky(element){
  let input = document.querySelector('input').value.toLowerCase()
  fetch(`/funStuff?input=${input}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
    document.querySelector('.results').innerText =  document.querySelector('input').value + " " + data.isPalindrome
      
      
    })
}
        