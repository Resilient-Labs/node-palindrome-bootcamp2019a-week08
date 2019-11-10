const http = require('http')
const fs = require('fs')
const url = require('url')
const figlet = require('figlet')
const querystring = require('querystring');

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);

  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.write(data);
      res.end();
    });

  } else if (page == '/api') {
    if ('word' in params) {
      console.log(params)
      if (params['word'].split('').reverse().join('') == params['word']) {

        res.writeHead(200, {
          'Content-Type': 'application/json'
        });
        const obj = {
          res: "this is a palindrome"
        }

        res.end(JSON.stringify(obj));

      } else {
        res.writeHead(200, {
          'Content-Type': 'application/json'
        });
        const obj = {
          res: "this is not palindrome"
        }
        res.end(JSON.stringify(obj));
      }
    }
  } else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {
        'Content-Type': 'text/javascript'
      });
      res.write(data);
      res.end();
    });
  } else {
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
server.listen(3000);
