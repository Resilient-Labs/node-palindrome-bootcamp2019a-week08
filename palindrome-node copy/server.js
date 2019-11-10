const http = require('http');
const fs = require('fs')//filesystem
// // allows you acess to look at the URL//it is a module
const url = require('url');
// // gives access to the packages
const querystring = require('querystring');
const figlet = require('figlet')
const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page)
  if(page=="/"){
// wherever you see data it is actualy that file
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  } else if (page=="/index.html"){
// wherever you see data it is actualy that file
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  } else if(page=="/master.css"){
    fs.readFile('master.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  }else if(page=="/main.js"){
    fs.readFile('main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else if (page=="/palindrome"){
    if ("input" in params){
    res.writeHead(200, {'Content-Type': 'application/json'});
    let result = params["input"]
    let reverse = result.toLowerCase().split("").reverse().join("")
    if(result.toLowerCase() === reverse){
      var answer = "This is a Palindrome!!";
    } else if (result.toLowerCase() !== reverse) {
      var answer = "This is NOT a Palindrome";
    }
    // this is an object
    const sendAnswer = {
      palindrome:answer
    }
    res.end(JSON.stringify(sendAnswer));
    return;
  }
} else {
    figlet('404!!\n oops', function(err, data) {
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
