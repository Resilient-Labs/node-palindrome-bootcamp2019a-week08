const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

  const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
      console.log("hello")
    });
  }
  else if (page == '/palindrome') {
    if ('pal' in params){
      const pal = params ['pal'];
      const palBackwards = pal.split('').reverse().join('');
      let result;
       if(pal === palBackwards){
         result = true;
      } else if (pal !== palBackwards){
        result = false;
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(JSON.stringify(result));
    }
  }
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/app.js'){
    fs.readFile('js/app.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
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



// const http = require('http');
// const fs = require('fs')
// const url = require('url');
// const querystring = require('querystring');
// const figlet = require('figlet')
//
//
// const server = http.createServer(function(req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'})
//   fs.readFile('index.html', function(error, data) {
//     if (error) {
//       res.writeHead(404)
//       res.write('Error: File Not Found')
//     }else {
//       res.write(data)
//     }
//     res.end()
//   })
// })
// server.listen(8000, function(error) {
//   if (error) {
//     console.log('Oops I think you broke something', error)
//   }else {
//     console.log('Shhh Im listening on port 8000')
//   }
// });
