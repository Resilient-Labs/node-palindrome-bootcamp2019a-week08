const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer( (req, res) => {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    switch(page) {
        case "/":
            fs.readFile("index.html", (err, data) => {
                res.writeHead(200, {"Content-Type": "text/html"});
                res.write(data);
                res.end();
            });
            break;
        case "/api":
            if("word" in params) {
                let object = {};
                const word = params["word"].toLowerCase();
                if(word.split('').reverse().join('') === word) {
                    object.res = "is a palindrome";
                } else {
                    object.res = "is not a palindrome";
                }
                res.writeHead(200, {"Content-Type": "application/json"});
                res.write(JSON.stringify(object));
                res.end();
            }
            break;
        case "/css/style.css":
            fs.readFile("css/style.css", (err, data) => {
                res.writeHead(200, {"Content-Type": "text/css"});
                res.write(data);
                res.end();
            });
            break;
        case "/js/script.js":
            fs.readFile("js/script.js", (err, data) => {
                res.writeHead(200, {"Content-Type": "text/javascript"});
                res.write(data);
                res.end();
            });
            break;
        default:
            break;
    }
});

server.listen(3000);
