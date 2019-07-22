// document.querySelector('form').addEventListener('submit',function (e){
//   e.preventDefault()
//   let enteredName = document.querySelector('input').value
//   console.log(enteredName)
//   document.querySelector('.entered').innerHTML = enteredName
//   let reversedName = enteredName.split("").reverse().join('')
//   document.querySelector('.response').innerHTML = reversedName
//   console.log(reversedName)
//   palidromeChecker(enteredName,reversedName)
//
// })
//
// function palidromeChecker(enteredName,reversedName){
//   if (enteredName === reversedName){
//     document.querySelector('.yesno').innerHTML = "Yes, it is a palidrome!"
//     console.log("test21")
//   }else{
//     document.querySelector('.yesno').innerHTML = "No, it is not a palidrome!"
//     console.log("test29")
//   }
// }

document.querySelector('form').addEventListener('submit', makeRequest)
// e.preventDefault();
function makeRequest(){
let enteredName = document.querySelector('input').value
enteredName = document.querySelector('.entered').innerHTML
let reversedName = enteredName.split("").join('')

fetch(`/api?word=${reversedName}`)
  .then(response => response.json())
  .then((data) => {
  console.log(data);
  document.querySelector('.yesno').textContent = data.palindrome

});
}
