//palindrome
//what can the user do: they should be able to enter text
// what can they see: they should be able to see the word reversed and know if it is
// a palindrome or not
//what should they expect the logic of a true palindrome
alert('works')

let button = document.querySelector("#btn")


function isThisApalindrome(){
  let userInput = document.querySelector("#palindrome").value

  fetch(`/api?userInput=${userInput}`)
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(res => {

        let resultsWrapTxt = document.createElement('p')

        resultsWrapTxt.appendChild(document.createTextNode(`${userInput}: `))

        results.appendChild(resultsWrapTxt)
        let object = res.verified

        if(object === 'false'){
          console.log('not a palindrome')
          resultsWrapTxt.appendChild(document.createTextNode(` This is NOT a palindrome`))
        }else{
          console.log('a palindrome')
          resultsWrapTxt.appendChild(document.createTextNode(` This IS a palindrome`))
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
          alert("sorry, there are no results for your search")
      });
  // console.log(userInput)
  // let userLowCase = userInput.toLowerCase()
  // let userSplit = userLowCase.split("")
  // let userReverse = userSplit.reverse()
  // let userJoin = userReverse.join("")
  // console.log(userJoin)
  // //userLowCase.split("").reverse().join("")
  // let resultsWrapTxt = document.createElement('p')
  //
  // resultsWrapTxt.appendChild(document.createTextNode(`${userJoin}: `))
  //
  // results.appendChild(resultsWrapTxt)
  //
  // if(userLowCase !== userJoin){
  //   console.log('not a palindrome')
  //   resultsWrapTxt.appendChild(document.createTextNode(` This is NOT a palindrome`))
  // }else{
  //   console.log('a palindrome')
  //   resultsWrapTxt.appendChild(document.createTextNode(` This IS a palindrome`))
  // }
}
btn.addEventListener('click', function(){
  isThisApalindrome()
})
