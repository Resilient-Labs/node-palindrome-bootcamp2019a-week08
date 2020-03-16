// palindrome code

document.getElementById('search').addEventListener('click', function(){
  let inputText = document.getElementById('input').value
  const inputArray = `${inputText}`.split('')
  const endOfArray = `${inputArray}`.length-1
  let counter = 0
  const halfLength = Math.floor(`${inputArray}`.length/2)
  for(i=0;i<halfLength;i++){
    if(`${inputArray}`[i] === `${inputArray}`[endOfArray-i]){
      counter++
    }
  }
  if(halfLength === counter){
    document.getElementById('result').innerHTML = `Yes, this word IS a palindrome :)`
    console.log(`this word is a palindrome`);
  }
  if(halfLength !== counter){
    document.getElementById('result').innerHTML = `No, this word is NOT a palindrome  :(`
    console.log(`this word is NOT a palindrome`);
  }

})


//
