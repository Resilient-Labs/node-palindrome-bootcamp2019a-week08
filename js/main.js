// worked with House Gardner Wade and Brian
document.getElementById('check').addEventListener('click', start)
  //gets value from input
function start(){
  let content = document.querySelector('input').value

  let backword = content.split('').join('')

  fetch(`/palindrome?word=${backword}`)
  .then(response => response.json())
  .then((data) => {
    document.querySelector('h2').textContent = data.palindrome
    console.log(data);
});
}
