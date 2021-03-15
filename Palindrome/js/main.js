document.querySelector('button').addEventListener('click', makeReq)



function makeReq(element){
  let input = document.querySelector('input').value
  fetch(`/query?input=${input}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      document.querySelector(".result").innerText = data.isPalindrome
    })
}
// const term = 'win'
// const url = `https://api.giphy.com/v1/gifs/search?api_key=toqlVYXbdNIubNTOGsRA6LuY3S2pNfsn&q=${term}&limit=25&offset=0&rating=g&lang=en`
//
// fetch(url)
// .then(res => res.json()) // parse response as JSON
// .then(data => {
// console.log(data)
//
// document.querySelector('img').src = data.data[Math.floor(Math.random() * 25)].images.original.url
//
//
// })
// .catch(err => {
//   console.log(`error ${err}`)
// });
