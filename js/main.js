/***************************************
======Project: Palindrome Checker======
Made for Coding Challenge
By: Juan Vistro
Code collaborators:
Jerry Lafume, Kevin Sandoval,
Khorally Pierre, Miggie Garcia,
Milan Robinson, Rodas Ghidei,
and Tamika Sterlin
***************************************/

/*********************
Server Fetch Requests
**********************/

document.querySelector('button').addEventListener('click', clicky)

function clicky(element){
  let input = document.querySelector('input').value
  fetch(`/palindrome?input=${input}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      let response = data.isPalindrome ? "It's a palindrome!" : "It's not a palindrome"
      document.querySelector('#prompt').innerText = response
    })
}


/**Aside panel functionality**/
// document.querySelector('.info-button').addEventListener('click', toggleAside)
// document.querySelector('#hide-aside').addEventListener('click', toggleAside)
//
// function toggleAside(){       document.querySelector('aside').classList.toggle('reveal')
// }
/**Aside Panel end*/
