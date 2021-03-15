const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer(function(req, res) {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    console.log(page);
    if(page == '/') {
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data);
            res.end();
        });
    }
    else if(page == '/palindrome') {
        if('word' in params){
            const objToJson = {
                result: 'IT\'S A PALINDROME!'
            };
            let verifier = '';
            const str = params['word'].toLowerCase();
            console.log(str);
            for(i = str.length-1; i >= 0; i--)
                verifier += str[i];
            if (verifier !== str)
                objToJson.result = 'IT\'S NOT A PALINDROME!';
            res.writeHead(200, {'Content-Type' : 'application/json'});
            res.end(JSON.stringify(objToJson));
        }
    }
    else if(page == '/assets/css/style.css') {
        fs.readFile('assets/css/style.css', function(err, data) {
            res.write(data);
            res.end();
        });
    }
    else if(page == '/assets/js/main.js') {
        fs.readFile('assets/js/main.js', function(err, data) {
            res.writeHead(200, {'Content-Type':'text/javascript'});
            res.write(data);
            res.end();
        });
    }
});

server.listen(8000);