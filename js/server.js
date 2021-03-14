//These variables store the modules that we need to use. 
const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');

var PORT = process.env.PORT || 8000;

//This function takes in a word, pushes it to an array (where it is separated by ""), reverse the elements in the array, and then joins the elements back together in a string format. 

function reverseWord(word) {

    // console.log(word.split("").reverse().join(""))

    return word.split("").reverse().join("") 
    //the reversed string dog -> ["d", "o", "g"] -> ["g", "o", "d"] -> "god"

}

//This function compares the user's input word to the word in reverse. If it is a palindrome, it returns true; if not--false.

function isPalindrome(word) {

    return word === reverseWord(word) //true or false
    
}

//The function expression creates the server. 

const server = http.createServer(function(req, res) {

//The 'page' variable contains the path of the url--the string after the host name and before the query. 

    const page = url.parse(req.url).pathname; 

    //https:localhost8000/ --> page === "/"

    const params = querystring.parse(url.parse(req.url).query); 

    //https:localhost8000/api?word=cat -> {word:cat}

    if(page === "/") {

        fs.readFile('index.html', function(err, data) {

            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });

    } else if (page === '/api') {

        //word=cat
        //{word:cat} params['word'] -> cat
        //arr = [1, 2, 3, 4] -> arr[0]

        isPalindrome(params['word']) //true or false

        const resultToJson = {

            result: isPalindrome(params['word']),

            reversedWord: reverseWord(params['word'])
            
            //{result: false}
        }

        // console.log(reverseWord(params['word']))

        res.writeHead(200, {'Content-Type' : 'application/json'});

        //{result: false}

        res.write(JSON.stringify(resultToJson)); 

        //{"result": "false"}

        

        res.end()

    } else if (page === '/css/style.css') {

        fs.readFile('css/style.css', function(err, data) {

            res.write(data);
            res.end();
        });

    } else if (page === '/css/normalize.css') {

        fs.readFile('css/normalize.css', function(err, data) {

            res.write(data);
            res.end();
        });

    } else if (page === '/pic/bg.png') {

        fs.readFile('pic/bg.png', function(err, data) {

            res.write(data);
            res.end();

        });

    } else if (page === '/js/main.js') {

        fs.readFile('js/main.js', function(err, data) {

            res.writeHead(200, {'Content-Type': 'text/javascript'});
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

server.listen(PORT);



