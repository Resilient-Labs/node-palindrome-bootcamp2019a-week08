//These variable store the modules that we neeed to use.
const http = require('http'); //Acces to server
const fs = require('fs')//Access to disk
const url = require('url');//access to URL
const querystring = require('querystring');//Allow to read what is requested
const figlet = require('figlet')//return error the browser

//This function takes in a word, pushes it to an array where it is separated by '' reverse the elements in the array and then joins the elements back together in a string format.

function reverseWord(word){
  return word.split('').reverse().join('')//the reversed string dog => ['d','o','g']
}

function isPalindrome(word){
  return word === reverseWord(word)
}

const server = http.createServer(function(req, res) {

  const page = url.parse(req.url).pathname;//Tells you the path name of html page and calls it page
  const params = querystring.parse(url.parse(req.url).query);//holds Query Parmemeter fi there is any
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);//writes the data that goes into that while
      res.end();
    });
  }
  else if (page == '/master.css') {
    fs.readFile('master.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/main.js') {
    fs.readFile('main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
isPalindrome(params['word'])
const resultToJson = {
  result: isPalindrome(params['word'])
}

  res.writeHead(200, {'Content-Type' : 'application/json'})
res.write(JSON.stringify(resultToJson));
res.end()
}

          // res.end(JSON.stringify(objToJson));//.stringify makes the JSON a string
      // }//student = leon
  //     else if(params['student'] != 'leon'){
  //       res.writeHead(200, {'Content-Type': 'application/json'});
  //       const objToJson = {
  //         name: "unknown",
  //         status: "unknown",
  //         currentOccupation: "unknown"
  //       }
  //       res.end(JSON.stringify(objToJson));
  //     }//student != leon
  //   }//student if
  // }//else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      // res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else if (page == '/spider.gif'){
    fs.readFile('spider.gif', function(err, data) {
      // res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else if (page == '/palindromeSSi.ttf'){
    fs.readFile('palindromeSSi.ttf', function(err, data) {
      // res.writeHead(200, {'Content-Type': 'text/javascript'});
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
