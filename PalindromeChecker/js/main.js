document.querySelector('#clickMe').addEventListener('click',checkPalindrome)

function checkPalindrome() {
  const personName = document.querySelector("#personName").value

fetch(`/api?word=${personName}`)
.then (response => response.json())
.then ((data)=> {
  alert(data)
})
}
