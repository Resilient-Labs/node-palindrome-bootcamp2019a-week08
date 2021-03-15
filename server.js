//Collaborated with House Moses on this project
const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

function isPalindrome(word){
    let newWord = word.split("").reverse().join("")
    return word === newWord
}

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  // https://localhost:8000/ -> page === '/'
  const params = querystring.parse(url.parse(req.url).query);
  // https://localhost:8000/api?word -> page === '/'
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {

      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  } else if (page == '/api') {
      isPalindrome(params['word'])

      const resultToJson = {
        result: isPalindrome(params['word'])
      }
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.write(JSON.stringify(resultToJson))
        res.end();
  }
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else if (page == '/palindrome.png'){
    fs.readFile('palindrome.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  } else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
