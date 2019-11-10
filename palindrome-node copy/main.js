// let item = document.querySelector("#itemInput")
//
// const palidromeCheck = {
//
// }
document.querySelector("#submitButton").onclick = () => {
  let input = document.querySelector("#itemInput").value;
  fetch(`/palindrome?input=${input}`)
  .then(res=>res.json())
  .then(res=>{
    document.querySelector("h2").textContent = res.palindrome

  })
  .catch(err => {
         console.log(`error ${err}`)
         alert("sorry, there are no results for your search")
     });
}
