const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function(req, res){
  const page = url.parse(req.url).pathname
  const params = querystring.parse(url.parse(req.url).query);
  if(page == '/'){
    fs.readFile('index.html', function(err, data){
      res.writeHead(200, {'Content-Type' : 'text/html'})
      res.write(data)
      res.end()
    })
  }
  else if (page == '/palindrome'){
    // let newInput = word.split('').reverse().join('')
    if('word' in params){
      res.writeHead(200, {'Content-Type': 'text/html'});
      const word = params['word']
      const wordBackwards = word.split('').reverse('').join('')
      let answer
      console.log(word, wordBackwards)
      if(word === wordBackwards){
        answer = true
      }
      else if(word !== wordBackwards){
        answer = false
      }
      res.end(JSON.stringify(answer));
    }  
  }else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('NOTHING HERE', function(err, data) {
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

server.listen(5000)




