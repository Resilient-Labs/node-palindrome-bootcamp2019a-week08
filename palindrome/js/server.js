const http = require('http');
const fs = require('fs');

fs.appendFile('index.html', 'Hello World!', function(err) {
  if(err) throw err;
  console.log('Saved!')
});

http.createServer(function(req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'txt/html'});
  res.write(data);
  res.end()
})
}).listen(8000);
