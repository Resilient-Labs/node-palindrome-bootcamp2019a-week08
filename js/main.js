document.querySelector("#clickMe").addEventListener("click", makeReq);

function makeReq() {
	const word = document.querySelector("#word").value;

	fetch(`/api?word=${word}`)
		.then((response) => response.json())
		.then((data) => {
			if (data.palindrome === true) {
				document.querySelector("#answer").innerHTML = "Yes a Palindrome";
			} else {
				document.querySelector("#answer").innerHTML = "Not a Palindrome";
			}
		});
}
