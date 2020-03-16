const http = require('http'); //leons code
const fs = require('fs') //leons code
const url = require('url');//leons code
var querystring = require('querystring');//leons code
cont figlet = require('figlet')


const server = http.createServer(function(req, res) { //leons code
  const page = url.parse(req.url).pathname; //leons code
  const params = querystring.parse(url.parse(req.url).query); //leons code
  if (page == '/') { //leons code
    fs.readFile('index.html', function(err, data) { //leons code
      res.writeHead(200, {'Content-Type': 'text/html'}); //leons code
      res.write(data); //leons code
      res.end(); //leons code
    }); //leons code
  } //leons code
  else if (page == '/css/style.css'){ //leons code
      fs.readFile('css/style.css', function(err, data) { //leons code
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(data); //leons code
        res.end(); //leons code
    });
  } else if (page == '/js/main.js'){ //leons code
      fs.readFile('js/main.js', function(err, data) { //leons code
        res.writeHead(200, {'Content-Type': 'text/javascript'}); //leons code
        res.write(data); //leons code
        res.end(); //leons code
    });
        res.end(JSON.stringify(objToJson));
      }//student = leon
server.listen(8000); //leons code
