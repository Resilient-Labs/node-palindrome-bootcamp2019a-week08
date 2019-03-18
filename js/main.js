document.getElementById('submit').addEventListener("click", palindrome);
function palindrome(){
    let toCheck = document.getElementById("word").value;
  for(let i=0;i<toCheck.length;i++){
    if(toCheck[i]!==toCheck[(toCheck.length - (1+i))]){
      document.querySelector("p").innerText = "This is not a palindrome"
      break
    }else{
      document.querySelector("p").innerText = "This is a palindrome"
    }
  }
}
