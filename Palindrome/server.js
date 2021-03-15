const http = require('http');
const fs = require('fs')
// tells me what page im on
const url = require('url');
// the last bit of the url (like a query [api] in an api url)
const querystring = require('querystring');

const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  // the forward slash represents the main page's root
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  // everything below built an api
  else if (page == '/query') {
    if('input' in params){
      res.writeHead(200, {'Content-Type': 'application/json'});
      let str = params['input']

      const splitString = str.split('')
      const reverseString = splitString.reverse('')
      const joinString = reverseString.join('')

      let bool = null
      if(joinString === str){
        bool = true
      } else {
        bool = false
      }
      const objToJson = {
        isPalindrome: bool
      }
      res.end(JSON.stringify(objToJson));

    }//student if
  }else if (page == '/css/normalize.css'){
    fs.readFile('css/normalize.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/css/floral.gif'){
    fs.readFile('css/floral.gif', function(err, data) {
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
  } else{
    figlet('404!!', function(err, data) {
      console.log('friend7')
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
