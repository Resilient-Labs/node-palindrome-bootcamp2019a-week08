document.querySelector('button').addEventListener('click',makeReq)

function makeReq(){
  let string = document.querySelector('input').value
  let value = string.split(' ').join('')
  let outcome= document.querySelector('.outcome')

  fetch(`/api?word=${value}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      outcome.innerHTML = string + " " + data.palindrome
    });
}


//original
// document.querySelector('button').addEventListener('click',function(){
//   let string= document.querySelector('input').value.toLowerCase()
//   let outcome= document.querySelector('.outcome')
//   //make string lowercase letters and split into letters in array
//   let array1= string.split('')
//   let array2= string.split('').reverse()
//   if (array1.toString() === array2.toString()){
//     outcome.innerHTML= string +' IS a palindrome'
//   }else {
//     outcome.innerHTML= string +' is NOT a palindrome'
//   }
// })
