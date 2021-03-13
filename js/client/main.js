document.querySelector('button').addEventListener('click', checkPalindrome)

async function checkPalindrome() {
    // get input value
    const string = document.querySelector('input').value

    // ask our server if it's a palindrome
    // wait for server to respond
    const result = await fetch(`/palindrome_check?q=${string}`)

    // we don't want it as a string, so we want to parse the output
    // JavaScriptObjectNotation
    // which means that instead of a string, this will be something else
    // for example, an object
    // or in this case, a boolean.
    const isAPalindrome = await result.json()

    // response is either true or false, the server's answer to whether
    //   our string is a palindrome
    if (isAPalindrome) {
        alert(`${string} is a palindrome.`)
    }
    else {
        alert(`Not a palindrome, try again.`)
    }
}

document.querySelector('input').addEventListener("keypress", (e) => {
    if (e.key === "Enter")
        checkPalindrome()
})