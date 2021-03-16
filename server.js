const http = require('http')
const fs = require('fs')
const url = require('url')
var querystring = require('querystring')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname

  var params = querystring.parse(url.parse(req.url).query)
  console.log(page)
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    if('word' in params){
      if( params['word'].toLowerCase() == params['word'].toLowerCase().split('').reverse().join('') ){
        res.writeHead(200, {'Content-Type': 'application/json'})
        var objToJson = {
          palindrome: "Your word is a Palindrome!"
        }
        res.end(JSON.stringify(objToJson))
      }
      else{
        res.writeHead(200, {'Content-Type': 'application/json'})
        var objToJson = {
          palindrome: "Your word is not Palindrome."
        }
        res.end(JSON.stringify(objToJson))
      }
    }//word if
  }//else if
  else if (page == '/style.css'){
    fs.readFile('style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }
  else if (page == '/main.js'){
    fs.readFile('main.js',function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'})
      // console.log(data)
      res.write(data)
      res.end()
    });
  }
});
server.listen(8000);

