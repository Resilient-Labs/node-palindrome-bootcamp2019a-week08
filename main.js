
 
document.querySelector('button').addEventListener('click', getPalindrome)

                                   

function getPalindrome(element){
  let input = document.querySelector('input').value
  fetch(`/blagget?input=${input}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
    document.querySelector('.results').innerText = data.isPalindrome
      
    })
}
                                   
                                   
            
