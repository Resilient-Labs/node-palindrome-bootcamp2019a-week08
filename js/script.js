const palindromeCheckInput = document.querySelector("#palindromeCheckInput");
const checkPalindromeButton = document.querySelector("#checkPalindromeButton");
const resultField = document.querySelector("#resultField");

function checkPalindrome() {
    if(palindromeCheckInput.value !== "") {
        fetch(`/api?word=${encodeURIComponent(palindromeCheckInput.value)}`)
            .then(res => res.json())
            .then(response => {
                console.table(response);
                resultField.textContent = `${palindromeCheckInput.value} ${response.res}`;
            })
            .catch(err => console.log(err));
    } else {
        alert("You need to input a value.")
    }
}

palindromeCheckInput.addEventListener("keyup", event => {
    if(event.key === "Enter") {
        checkPalindrome();
    }
})
checkPalindromeButton.addEventListener("click", checkPalindrome);
