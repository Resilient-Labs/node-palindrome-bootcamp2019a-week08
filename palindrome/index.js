const btn = document.getElementById('check')
const result = document.getElementById('result')


function checkIfTheWordIsPalindromeOrNot(){
 let word = document.querySelector('.word').value
  fetch(`/api?word=${word}`)
  .then(res => res.json())
  .then(res => {
    let object = res.prop // res.prop is the info from the object I made in the server.js file 
    if(object === "true"){
    result.innerHTML = `${word} is a palindrome`
  }else{
    result.innerHTML = `${word} is not a palindrome`
  }
})
.catch(err => {
    console.log(`error ${err}`)
    alert("sorry, there are no results for your search")
});
}

btn.addEventListener('click', ()=>{
  checkIfTheWordIsPalindromeOrNot()
})
