document.querySelector('#clickMe').addEventListener('click',checkPalindrome)

function checkPalindrome() {
  const wordInput = document.querySelector("#wordInput").value

fetch(`/api?word=${wordInput}`)
.then (response => response.json())
.then ((data)=> {
  alert(data)
})
}
