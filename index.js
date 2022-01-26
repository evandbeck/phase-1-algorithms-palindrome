function isPalindrome(word) {
  if (word[0] = word.length - 1) {
    return true
  } else (word)
} return false

/* 
  function (string)
  if string is palindrome, return true
  if string is not palindrome, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
