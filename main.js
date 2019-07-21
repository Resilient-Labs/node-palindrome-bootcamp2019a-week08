const http = require('http'),
fs = require('fs');

http.createServer(function (req, res) {
  const url = req.url;

  switch (url) {
    case "":
    case "/":
    case "/index.html":
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
    break;

    case "/style.css":
    fs.readFile('style.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });

    default:
    fs.readFile('error.txt', function(err, data) {
      console.error(data.toString());
      res.end();
    });
    break;
  }

}).listen(8000);
