document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq(){

  const word = document.querySelector("#userName").value;

  fetch(`/api?word=${word}`)
    .then(response => response.json())
    .then((data) => {
    if(data['result']){
      document.querySelector("h2").innerText = 'Yes, it is a palidrome';
      console.log('Yes, it is a palidrome');
    } else {
      document.querySelector("h2").innerText = 'No, it is not a palidrome'
      console.log('No, it is not a palidrome');
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
