//House hayden Group Project

const ul = document.querySelector('ul')
let btn = document.querySelector('button')
let firstName = ["THE","DYNAMO","BOSSMAN","SUPER","VANQUISHER", "COOL", "BABYFACE"]
let lastName = ["BAD", "VENTURER","DASH", "MORTY","ALLIGATOR", "SPIDER", "RICK", "BIRDPERSON", "JERRY"]
let result = document.querySelector('.result')
btn.addEventListener('click', () => {
  let color = document.querySelector('input[name = color]:checked').value
  let cookies = document.querySelector('input[name = cookies]:checked').value
  let season = document.querySelector('input[name = season]:checked').value
  let eyes = document.querySelector('input[name = eyes]:checked').value
  let hero = document.querySelector('input[name = hero]:checked').value
  let first = Number(color) +  Number(cookies)
  let last =  Number(season) + Number(eyes) + Number(hero)
  feedback.textContent = `${firstName[first]} ${lastName[last]}`
})
// function getGif (){
//   fetch(`https://api.giphy.com/v1/gifs/search?q=${firstName}&api_key=7TCbBMX335sizhL4tZ9L4QHQIbNpWFkz`)
//   .then(res => res.json())
//   .then(response => {
//     console.log(response)
//     document.querySelector('img').src = response.data[0].images.downsized_large.url;
//   })
// }
// function getGif2 (){
//   fetch(`https://api.giphy.com/v1/gifs/search?q=${lastName}&api_key=7TCbBMX335sizhL4tZ9L4QHQIbNpWFkz`)
//   .then(res => res.json())
//   .then(response => {
//     console.log(response)
//     document.querySelector('img').src = response.data[0].images.downsized_large.url;
//   })
// }
