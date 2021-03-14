const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const palindrome = function(str){
   let newWord = str.split('').reverse().join('')
   return(str === newWord)
  
}
const server = http.createServer(function(req, res){
    const page = url.parse(req.url).pathname;
   
    if(page == '/'){
         fs.readFile('index.html', function(err,data){
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.write(data)
        res.end()
    })
    }
    else if(page =="/palindrome"){
         const params = querystring.parse(url.parse(req.url).query)
         
         res.writeHead(200,{'Content-Type': 'application/json'})
         res.write(String(palindrome(params.str)))
         res.end()
    }
    else if(page == '/style.css'){
        fs.readFile('style.css', function(err,data){
            res.write(data)
            res.end()
        })
    }
     else if(page == '/main.js'){
        fs.readFile('main.js', function(err,data){
       res.writeHead(200,{'Content-Type': 'text/javascript'})
       res.write(data)
       res.end()
   })
   }
    else{
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
   
    
})


server.listen(8000)


    
