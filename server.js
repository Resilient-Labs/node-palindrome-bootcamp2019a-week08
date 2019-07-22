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
  }else if (page == '/api') {
    if('word' in params){
      if( params['word'].toLowerCase() == params['word'].toLowerCase().split('').reverse().join('') ){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var objToJson = {
          palindrome: "Yes! It is a palindrome."
        }
        res.end(JSON.stringify(objToJson));
      }else{
        res.writeHead(200, {'Content-Type': 'application/json'});
        var objToJson = {
          palindrome: "No! It is not a palindrome."
        }
        res.end(JSON.stringify(objToJson));
      }
    }//word if
  }else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function(err, data) {
      // res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data)
      res.end();
    });
  }
  else if (page == '/js/client.js') {
    fs.readFile('js/client.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data)
      res.end();
    });
  }
  else if (page == '/images/background.jpg') {
    fs.readFile('images/background.jpg', function(err, data) {
      res.writeHead(200, {'Content-Type': 'images/jpg'});
      res.write(data)
      res.end();
    });
  }
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
