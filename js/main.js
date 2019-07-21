document.querySelector("button").addEventListener('click', palindrome)
function palindrome (){
let str = document.getElementsByTagName("input")[0].value.split(' ').join('')
fetch(`/api?palindrome=${str}`)
  .then(response => response.json())
  .then((data) => {
    console.log(data);
    document.querySelector("p").innerHTML = data.palindrome
  });
}

// const palindrome = ()=> {
//   let str = document.getElementsByTagName("input")[0].value
//   const reverseStr = str.split('').reverse().join('')
//
//   if (str === reverseStr){
//     document.querySelector("p").innerHTML = "Congrats, That's a Palindrome"
//   }else {
//     document.querySelector("p").innerHTML = "Sorry, Try Again!!!"
//   }
// }
// document.querySelector("button").addEventListener('click', palindrome)
