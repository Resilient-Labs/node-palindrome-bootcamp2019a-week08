
import http from 'http';
import fs from 'fs';
import { isAPalindrome } from './palindrome.js'

// we create a server, which listens for HTTP request on port 8000
// accessed at localhost:8000
http.createServer(function (request, response) {
    console.log(`Request received for ${request.url}`)

    // if homepage is requested, send the coin toss index HTML
    if (request.url === "/") {
        sendIndexHTML(response)
    } else if (request.url.includes("/palindrome_check")) {
        // if palindrome check is requested,
        // grab the string
        const string = decodeURI(request.url).replace('/palindrome_check?q=', '')
        // check if palindrome using our function
        const boolean = isAPalindrome(string)
        // write "true" or "false"
        // we can only send back strings, so we send a boolean in a string back
        response.writeHead(200)
        response.write(`${boolean}`)
        response.end()
    }
    else {
        // input: "/css/styles.css"
        // we want: "css/styles.css"
        const filename = request.url.slice(1, request.url.length)
        sendOtherPage(filename, response)
    }
}).listen(7000);

function sendOtherPage(whichPage, response) {
    fs.readFile(whichPage, (err, file) => {
        try {
            response.writeHead(200);
            response.write(file);
            console.log(`Rendering ${whichPage}`)
            response.end()
        } catch {
            console.error(`ERROR! Can't render ${whichPage}`)
            response.end()
        }
    });
}

function sendIndexHTML(response) {
    fs.readFile('palindrome.html', (err, file) => {
        // 200 status code header for success
        response.writeHead(200);
        response.write(file);
        response.end()
    });
}

console.log("Listening on port 7000!")

