// Morning Challenge - simple node app that lets a user enter a string. The app will then let the user know if the string is a palindrome or not
console.log("hello world")

document.querySelector("button").onclick = () => {
  let string = document.querySelector("input").value

  fetch(`/api?word=${string}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      console.log(data.palindrome)
      if(data.palindrome){
        document.querySelectorAll("h2")[0].innerText = `Yes, ${string} is a palindrome |`
        document.querySelectorAll("h2")[1].innerText = `| emordnilap a si ${string.split("").reverse().join("")} ,seY`
      }else{
        document.querySelectorAll("h2")[0].innerText = "Not a palidrome. Try another."
        document.querySelectorAll("h2")[1].innerText = ""
      }
    })
}


//ORIGINAL (non-server rendered)

// document.querySelector("button").onclick = () => {
//   let string = document.querySelector("input").value
//   if (string === ""){
//     document.querySelector("h2").innerText = "!NoneenoN!"
//   } else {
//     if (checkPalindrome(string)){
//       document.querySelector("h2").innerText = "!YuppuY!"
//     } else {
//       document.querySelector("h2").innerText = "!NahhaN!"
//     }
//   }
// }
//
// function checkPalindrome(string){
//   console.log(string)
//   let result = string.split("").reverse().join("").toLowerCase()
//   <!-- toLowerCase() -->
//   console.log(result)
//   if (string.toLowerCase() === result){
//     return true
//   } else {
//     return false
//   }
// }
