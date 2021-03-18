//worked with Gardner Gang

// modules help my server work and help get the information and data
const http = require('http');
const fs = require('fs')
const url = require('url');
var querystring = require('querystring');


const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  var params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }else if (page == '/palindrome') {
    if('word' in params){
      if( params['word'].toLowerCase() == params['word'].toLowerCase().split('').reverse().join('') ){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var objJson = {palindrome: `Yes! ${params['word']} is in fact a palindrome`}
        res.end(JSON.stringify(objJson));
      }else{
        res.writeHead(200, {'Content-Type': 'application/json'});
        var objJson = {palindrome: "No, this is not a palindrome "}
        res.end(JSON.stringify(objJson));
      }
    }
  }  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }
  else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
   }
});


// port  number
server.listen(8000)
