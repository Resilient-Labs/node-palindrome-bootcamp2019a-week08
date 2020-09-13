//worked on with House Hayden: Rebecca, Kadeisha, Jeffrey, and Anastasia

document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq(){

  const userText = document.querySelector("#userText").value;

  fetch(`/api?text=${userText}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#result").textContent = data.answer
    });
}
