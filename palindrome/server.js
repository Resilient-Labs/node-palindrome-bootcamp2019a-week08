const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);

if(page == '/'){
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  })
}  else if (page == '/api') {
    if('word' in params){
      if(params['word'].trim().toLowerCase() == params['word'].trim().toLowerCase().split('').reverse().join('')){
        res.writeHead(200, {'Content-Type': 'application/json'});
          let object = {
            prop: "true"
          }
        res.end(JSON.stringify(object));
      }
      else if(params['word'].trim().toLowerCase() !== params['word'].trim().toLowerCase().split('').reverse().join('')){
        res.writeHead(200, {'Content-Type': 'application/json'});
        object = {
          prop: "false",
        }
        res.end(JSON.stringify(object));
      }
    }
  }
else if (page == '/style.css'){
  fs.readFile('style.css', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/css'});
    res.write(data);
    res.end();
  });
}else if (page == '/index.js'){
  fs.readFile('index.js', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/javascript'});
    res.write(data);
    res.end();
  });
}
})
server.listen(8080);
