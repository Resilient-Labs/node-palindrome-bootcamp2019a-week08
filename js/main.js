document.querySelector("button").addEventListener("click", makeReq)

function makeReq(){

  const userInput = document.querySelector("input").value;

    fetch(`/api?userInput=${userInput}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data)


      if(data["result"]){
        document.querySelector("h2").innerText = "This is a Palindrome"
      }else{
        document.querySelector("h2").innerText = "This is not a Palindrome"
      }
    })
}
