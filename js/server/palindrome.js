function reverseString(string) {
    return string.split('').reverse().join('')
}

function removeSpaces(string) {
    return string.split(' ').join('')
}

function isAPalindrome(string) {
    // string with no spaces
    // borroworrob
    const noSpaceString = removeSpaces(string)
  
    // reverse the string
    // borroworrob
    const newStr = reverseString(noSpaceString)

    // check if equal
    return newStr === noSpaceString
}

export { isAPalindrome }