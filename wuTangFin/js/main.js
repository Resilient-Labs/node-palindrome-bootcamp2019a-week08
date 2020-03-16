// an event listener to make the user request  function invoked.
const buttonElement = document.querySelector('button')
buttonElement.addEventListener('click', getName )

function getName(){
  let value0 = parseInt(document.querySelector('.show').value)
  let value1 = parseInt(document.querySelector('.shoe').value)
  let value2 = parseInt(document.querySelector('.vacaSpot').value)
  let value3 = parseInt(document.querySelector('.color').value)
  let value4 = parseInt(document.querySelector('.birth').value)

  fetch(`/api?input=${value0}${value1}${value2}${value3}${value4}`)
    .then(response => response.json())
    .then((data) => {
       document.querySelector('#firstNameGen').innerHTML = data.wutangname1
       document.querySelector('#lastNameGen').innerHTML = data.wutangname2
        // would actually print thing from our fetch
        console.log(data);
    });

}
