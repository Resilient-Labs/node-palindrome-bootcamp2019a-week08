document.querySelector('#btn').addEventListener('click', makeReq)

function makeReq(){
  const original = document.getElementById('text').value.split(' ').join('')
    fetch(`/api?value=${original}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
         document.querySelector('#result').innerHTML = data.palindrome
    });
}
