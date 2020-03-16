

////////

  document.getElementById('search').addEventListener('click', () => {
    let inputText = document.getElementById('input').value
    fetch(`/palindromLogic?inputText=${inputText}`)
    .then(response => response.json())
    .then((data) =>{
      console.log(data)
      document.getElementById('result').innerHTML = data.palindrome
    });
  })
