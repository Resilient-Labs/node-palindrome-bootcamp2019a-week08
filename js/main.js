document.querySelector('.submit').addEventListener('click',palindrome);


function palindrome(str) {
  var word = document.querySelector('.input').value;
  var palin = word.split('').reverse().join('');
  if ( word === palin ){
    //if it is a palindrome
    document.querySelector('.answer').textContent = "It's a Palindrome";
  }else{
    //if its not a palindrom it will write
    document.querySelector('.answer').textContent = "No its not a Palindrome";
  };
};
