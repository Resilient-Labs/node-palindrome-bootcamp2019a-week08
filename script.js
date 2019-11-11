let btn = document.querySelector('button')
let result = document.querySelector('.result')
btn.addEventListener('click', () => {
  let input = document.querySelector('input').value
  input = input.replace(/\s/g, '');
  if (input === '') {
    return
  }
  input == input.split('').reverse().join('') ? result.innerHTML = 'yes' : result.innerHTML = 'no'
})
