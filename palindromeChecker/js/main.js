//We worked on this project as a house; Gardner.

document.querySelector('button').addEventListener('click',checkPalindrome)

function checkPalindrome() {
  const input = document.querySelector("input").value

fetch(`/api?word=${input}`)
.then (response => response.json())
.then ((data) => {
  alert(data)
})
}
