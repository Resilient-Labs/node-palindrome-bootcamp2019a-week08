// let entry = document.querySelector('input').value
// let reversedentry = reverseEntry(entry)
// reverseEntry(entry)
// if(entry === reversedentry){
//   document.querySelector('#result').innerHTML = 'Yeah, this is a palindrome'
// }else{
//   document.querySelector('#result').innerHTML = 'Nah, this aint no palindrome'
// }
// })
//
// function reverseEntry(string) {
//     let reversed = string.split("").reverse().join("");
//     return reversed
// }

const http = require('http'); //server needs internet and disk access.
const fs = require('fs') //<-- What does this mean?
const url = require('url'); //<-- What does this mean?
const querystring = require('querystring'); //core module. anything that you hever seen with the params. anything that comes after question mark after api.
const figlet = require('figlet')

const server = http.createServer(function(req, res) { //any fucntion set equal to a variable is a function experesion vs function declaration.  Function experession does not hoist. functions are varialbe values.
  const page = url.parse(req.url).pathname; //allows us to take the URL in the browswer and parse it.
  const params = querystring.parse(url.parse(req.url).query); //like api, this is pullout the query parameters that are in a url.
  //all of these are just conditional statements --> figlet means none of these. if we buld server from scratch, we have to do everything.
  console.log(page); // not going to browser, the console.log will go to the terminal. Anything you want to load, you cae.
  if (page == '/') {
    fs.readFile('index.html', function(err, data) { // every single thing that is requested has to have a reference inside of the server js.
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  // }else if (page == '/otherpage') { // on the server, you have would need to show every single picture. That is why sprites are very good. Every single fphoto is an indivdiual request. You would need to code this out. If you had a sprite,  then you are making just one.
  //   fs.readFile('otherpage.html', function(err, data) {
  //     res.writeHead(200, {'Content-Type': 'text/html'});
  //     res.write(data);
  //     res.end();
  //   });
  // }
  // else if (page == '/otherotherpage') { //if
  //   fs.readFile('otherotherpage.html', function(err, data) {
  //     res.writeHead(200, {'Content-Type': 'text/html'});
  //     res.write(data);
  //     res.end();
  //   });
  }
  else if (page == '/api') {
    if('textEntry' in params){
      if( params['textEntry'].toLowerCase() == params['textEntry'].toLowerCase().split('').reverse().join('')){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          status: "'Yes, this is a palindrome'",
        }
        res.end(JSON.stringify(objToJson));
      // }//student = leon
      // else if(params['student'] != 'leon'){ //you have a server side way of building your applications. If you game is all rendering server side. All your logic would be servier side. Every time they enter something , they basicallically it is a fethc.. express makes all the routing
        //easy. If the user can see and interact with it, client side, everything else server side.  Make your palidrome chcker, render server cside.
}else{
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          status: "No, this is not a palindrome",
        }
        res.end(JSON.stringify(objToJson));
      }
    }
  }
      else if (page == '/style.css'){
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
  }else{
    figlet('404!!', function(err, data) { //if we do not recognize any of the request then we do this, and pass back that 404 error. The client side will go with our views, and server side code goes .  res.end - ends the network request
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end(); // this ends the request.
    });
  }
});

server.listen(8000);


//What is in the terminal:
// if( params['textentry'].toLowerCase() == params ['textentry'].toLowerCase().split('').reverse().join('')) ){
//in order to get this page to load, you have to enter in the following into the URL address bar in the browser, localhost: 8000
