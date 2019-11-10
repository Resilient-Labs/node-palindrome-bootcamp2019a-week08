document.querySelector("button").onclick= ()=>{
  var word = document.querySelector("input").value;
  fetch(`/check?word=${word}`)
  .then(res=>res.json())
  .then(res=>{
    document.querySelector("p").textContent= res.result;
  })
  .catch(err=> alert(err))
}
