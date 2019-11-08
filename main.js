const btn=document.querySelector("button")


btn.addEventListener("click", () =>{
var input =document.querySelector("input").value
fetch(`/palindrome?input=${input}`)
  .then(res => res.json())
  .then((res) => {
document.querySelector("h2").textContent = res.theAnswer
})
.catch(err => {
  console.log('error $(err)')
  alert("Sorry, there are no results for your search.")
})
})

//
// palindrome is an api that will house the information in the server to calculate the palindome. Main js side makes the fetch and prints on the DOM.
//
// Server does the actual calculation.
//
