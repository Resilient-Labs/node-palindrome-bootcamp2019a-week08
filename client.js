
// client side

// const http = require('http');
// const fs = require('fs')
// const url = require('url');
// var querystring = require('querystring');
//
// const server = http.createServer(function(req, res) {
//   const page = url.parse(req.url).pathname;
//   var params = querystring.parse(url.parse(req.url).query);
//   console.log(page);
//   if (page == '/') {
//     fs.readFile('index.html', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       res.end();
//     });
//   }


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
