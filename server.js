const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");
const figlet = require("figlet");

function checkP(word) {
	// returns true if Palindrome
	// returns false if not Palindrome
	for (let i = 0; i < word.length; i++) {
		// word[i] first letter
		// word[word.length-1-i] last letter
		// compare first + last
		if (word[i] === word[word.length - 1 - i]) {
			// continue
		} else {
			return false;
		}
	}
	// if loop passed and did not return false
	// all letters must match other side
	return true;
}

const server = http.createServer(function (req, res) {
	const page = url.parse(req.url).pathname;
	const params = querystring.parse(url.parse(req.url).query);
	if (page == "/") {
		fs.readFile("index.html", function (err, data) {
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(data);
			res.end();
		});
	} else if (page == "/api") {
		if ("word" in params) {
			res.writeHead(200, { "Content-Type": "application/json" });

			const word = params.word; // "racecar", "whatever"
			const isAPalindrome = checkP(word); // true or false

			const objToJson = {
				palindrome: isAPalindrome,
			};
			res.end(JSON.stringify(objToJson));
		}
	} else if (page == "/css/style.css") {
		fs.readFile("css/style.css", function (err, data) {
			res.write(data);
			res.end();
		});
	} else if (page == "/js/main.js") {
		fs.readFile("js/main.js", function (err, data) {
			res.writeHead(200, { "Content-Type": "text/javascript" });
			res.write(data);
			res.end();
		});
	} else {
		figlet("404!!", function (err, data) {
			if (err) {
				console.log("Something went wrong...");
				console.dir(err);
				return;
			}
			res.write(data);
			res.end();
		});
	}
});

server.listen(8000);
