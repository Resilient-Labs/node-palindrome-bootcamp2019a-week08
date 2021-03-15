const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const figlet = require("figlet")

// function for server side palindrome
function turnWordIntoString(userInput){
  let newWord = userInput.split("").reverse().join("")
  return userInput === newWord
}


//function for server creation

const server = http.createServer(function (req, res) {

  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);

  if(page == '/'){
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }else if(page == '/api') {
    turnWordIntoString(params["userInput"])

    const  resultToJson ={
      result: turnWordIntoString(params["userInput"])
    }

  res.writeHead(200, {'Content-Type': 'application/json'})
  res.write(JSON.stringify(resultToJson))
  res.end()
  }else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/css/reset.css'){
    fs.readFile('css/reset.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else if(page == '/img/background.jpeg') {
      fs.readFile('img/background.jpeg', function(err, data) {
        res.write(data);
        res.end();
      });
    }else if(page == '/img/leon.png') {
        fs.readFile('img/leon.png', function(err, data) {
          res.write(data);
          res.end();
        });
      }else{
    figlet('404!!', function(err, data) {//if there is a request for something that doesn't exist, returns 404 error.
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }

})
server.listen(1000);
