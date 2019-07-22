let doc = document.querySelector('button')
doc.addEventListener('click', ()=> {
  let theInput = document.querySelector('input').value
  let entry = theInput.split(' ').join('') //i did not have this, but this might be useful for server side, I inly used the actual value which was a string. Check to see if I can use this only as a string.
  request(entry)
  
})



function request(data){
  fetch(`/api?textEntry=${data}`)
  .then(response => response.json())
   .then((data) => {
     console.log(data);
     document.querySelector('span').textContent = data.status
   });
}


// // Anything Below from Saidia.
// -why did Saadia - turn her input value into a string using string.split('').join.
//
// b/c that seems to turn it from a string into a array back into a string.
//
//
