const http = require('http');
const fs = require('fs')
// tells me what page im on
const url = require('url');
// the last bit of the url (like a query [api] in an api url)
const querystring = require('querystring');


const server = http.createServer(function(req, res){
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

  else if (page == '/blagget') {
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
    }

}else if (page == '/style.css'){
    fs.readFile('style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/main.js'){
    fs.readFile('main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  } else{
      
  }
});

server.listen(8000);