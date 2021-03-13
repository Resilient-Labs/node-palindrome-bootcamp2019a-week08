document.querySelector('button').addEventListener('click', clicky)



function clicky(element) {
  let input = document.querySelector('input').value
  fetch(`/funStuff?input=${input}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      document.querySelector('.results').innerText = data.isPalindrome

    })
}
