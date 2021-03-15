const button = document.querySelector('button');
const word = document.querySelector('#palindrome');
const outcome = document.querySelector('h2');

button.addEventListener('click', requestServer)
word.addEventListener('keydown', enterKey)
word.innerText = '';

function enterKey(e) {
    if (e.code === 'Enter' || e.code === 'NumPadEnter')
        requestServer();
}

function requestServer() {
    let input = word.value;
    
    fetch(`/palindrome?word=${input}`)
    .then(res => res.json())
    .then(data => outcome.innerText = data.result)
    .catch(err => console.log(`Error: ${err}`));
}