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

  else if (page == '/funStuff') {
    if('input' in params){
      res.writeHead(200, {'Content-Type': 'application/json'});
      let str = params['input']                       

      const splitString = str.split('') 
      const reverseString = splitString.reverse('')
      const joinString = reverseString.join('') 

      let string = null
      if(joinString === str){
        string = "is a Palindrome!"
      } else {
        string = "is not a Palindrome, sorry :("
      }
      const objToJson = {
        isPalindrome: string
      }
      res.end(JSON.stringify(objToJson));
 
    }//student if
  }//else if
  else if (page == '/style.css'){
    fs.readFile('style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/script.js'){
    fs.readFile('script.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
  else{
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

server.listen(7000);