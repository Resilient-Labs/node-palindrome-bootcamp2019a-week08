const input = document.querySelector('input');

input.addEventListener("keyup", function(event) { //instandly run function on enter
  if (event.keyCode === 13) {
    checkPalindrome();
  }
});

let typingTimer;           //timer identifier
let doneTypingTime = 750;  //time in ms (.75 seconds)
input.addEventListener('keyup', () => { //on keyup, after 750ms, start the countdown
    clearTimeout(typingTimer);
    if (input.value) {
        typingTimer = setTimeout(checkPalindrome, doneTypingTime);
    }
});


function checkPalindrome(){
  const input = document.querySelector('input').value.toString().trim().replace(" ", "");
  if(input === ""){ //client verification
    document.getElementById('display').innerHTML = 'Type something'
  } else{
    fetch(`/api?reversedInput=${input}`) //How?
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      document.getElementById('display').innerHTML = data;
      })
    }
}
