//user enter word in input, get value of that input. palindrone (word, phrase, number or other sequence of character that reads forward and forward the same). 
//phrase --> has to combine word together, get rid of space marks -- join method in an array 
//worked with house hayden 

document.querySelector('button').addEventListener('click',palindrome)

function palindrome(){
  let inputEntry=document.querySelector('input').value
  //getting rid of places in phrases and combining characters into one group
  let getRid=inputEntry.split("").join("")

  fetch(`api?term=${getRid}`)
  .then(response=>response.json())
  .then((data)=>{
    console.log(data)
    document.querySelector('span').innerHTML=data.palindrome
  })
}

