

const btn=document.querySelector('button')

let result=document.querySelector('h3')


btn.addEventListener('click',()=>{
  let input=document.querySelector('input').value.toLowerCase()

  fetch(`/api?word=${input}`)
  .then(res =>res.json())
  .then(response=>{
    console.log(response)
    console.log(response)
    document.querySelector('h3').innerHTML=response.res


  })

  // stringReveresed(input)
  // checkPalidrome(input)
  // console.log(input)
})

// function stringReveresed(input){
// let reverse=input.split('').reverse().join('')
// result.appendChild(document.createTextNode(reverse))
// console.log(reverse)
//   return reverse
// }
//
// function checkPalidrome(input,reverse){
//   console.log(input)
//
//   if(input===stringReveresed(input)){
//     let mainElement=document.createElement('section')
//     let element=document.createElement('h4')
//     document.body.appendChild(mainElement)
//     element.appendChild(document.createTextNode('Is A Palindrome'))
//     mainElement.appendChild(element)
//     input.value=""
//     console.log(mainElement)
//
//   }else {
//     let mainElement=document.createElement('section')
//     let element=document.createElement('h4')
//     document.body.appendChild(mainElement)
//     element.appendChild(document.createTextNode('Is not a Palindrome'))
//     mainElement.appendChild(element)
// console.log('no')
//   }
// // if(str===)
// }
