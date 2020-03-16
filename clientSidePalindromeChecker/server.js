const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');

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

///// ^^^ above is fine /////

  else if (page == '/css/main.css') {
    fs.readFile('css/main.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/client.js') {
    fs.readFile('client.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
  else if(page == '/palindromLogic'){
    if('inputText' in params){
      if(params["inputText"].toLowerCase() == params["inputText"].toLowerCase().split("").reverse().join("")){
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        let response = {
          palindrome: "This, IS a palindrome :] "
        }
        res.end(JSON.stringify(response));
      }
      else{
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        let response ={
          palindrome: "This, is NOT a palindrome :[  "
        }
        res.end(JSON.stringify(response));
      }
    }
  }
  else if (page == '/main.js'){
    fs.readFile('/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }

  // NEED A REPLACEMENT ELSE STATEMENT BECAUSE I DONT HAVE FIGLET
  // else{
  //   figlet('404!!', function(err, data) {
  //     if (err) {
  //         console.log('Something went wrong...');
  //         console.dir(err);
  //         return;
  //     }
  //     res.write(data);
  //     res.end();
  //   });
  // }
});

server.listen(8000);
