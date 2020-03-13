const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  // if the url in browser has /api then do code
  else if (page == '/api') {
    //if word is a parameter then
    if('word' in params){
      const word= params['word'];
      const wordBackwards= word.split("").reverse().join("");
      let isPalindrome;
      //check if code is a Palindrome then change variable to true
      if(word === wordBackwards){
       isPalindrome=true;
       //if not palindrome then false
        }else if(word !== wordBackwards){
         isPalindrome = false;
      }
      //get all of response ready
      res.writeHead(200, {'Content-Type': 'application/json'});
//put ispalindrome in response and send it to client side.
      res.end(JSON.stringify(isPalindrome));
    }
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
  }else{
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
