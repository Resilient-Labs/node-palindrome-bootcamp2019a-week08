//gets the word from input and puts it into a variable
// let word = document.getElementById('check')
//event event Listener for button
document.getElementById('check').addEventListener('click', makeRequest)
  //gets value from input
function makeRequest(){
  let content = document.getElementById('text').value

  let reverseWord = content.split('').join('')
  fetch(`/api?word=${reverseWord}`)
  .then(response => response.json())
  .then((data) => {
  console.log(data);
  document.getElementById('answer').textContent = data.palindrome



});
}
  //console.log(content)





// console.log("this is reverseWord",reverseWord)
//
// if (noSpace === reverseWord){
//
// document.getElementById('answer').innerHTML = "Yes! it's "
//
// }else {
//
//   document.getElementById('answer').innerHTML = "No! it's not "
// }
