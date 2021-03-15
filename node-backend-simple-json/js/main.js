document.querySelector('#result').addEventListener('click', makeReq)

function makeReq(){

  let word = document.querySelector("#input").value;

  fetch(`/api?word=${word}`)
    .then(response => response.json())
    .then((data) => {
    if(data['result']){
      document.querySelector("#display").innerText = 'Great! This is a palidrome';
      console.log('Great! This is a palidrome');
    } else {
      document.querySelector("#display").innerText = 'Sorry! That is not a palidrome'
      console.log('Sorry! That is not a palidrome');
    }
    });

}

// document.getElementById("clickMe").onclick = makeReq;
//
// function makeReq(){
//
//   var userName = document.getElementById("userName").value;
//
//   var request = new XMLHttpRequest();
//   request.open('GET', '/api?student='+userName, true);
//
//   request.onload = function() {
//       console.log("works")
//       if (request.status >= 200 && request.status < 400) {
//         // Success!
//         var data = JSON.parse(request.responseText);
//         console.log(data)
//         document.getElementById("personName").innerHTML = data.name
//         document.getElementById("personStatus").innerHTML = data.status
//         document.getElementById("personOccupation").innerHTML = data.currentOccupation
//
//       } else {
//         // We reached our target server, but it returned an error
//
//       }
//     };
//
//     request.onerror = function() {
//       // There was a connection error of some sort
//     };
//
//     request.send();
// }
 11  package-lock.json
// }
