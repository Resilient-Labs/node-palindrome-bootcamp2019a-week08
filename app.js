let btn = document.querySelector("button")



btn.addEventListener("click", ()=>{
  let input = document.querySelector("input").value
  let condense = input.replace(/\s/g, "").toLowerCase();
  let rev = condense.split("").reverse().join("")
  let result = document.querySelector(".result")
  if (rev === condense){
    // return "It is a palindrome"
    // console.log("Is a palindrome")
    result.innerHTML = "Yes, it is a palindrome";
  }else{
    // return "Not a palindrome"
    // console.log("Not a palindrome")
    result.innerHTML = "No, it is not a palindrome";
  }
})
