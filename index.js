function isPalindrome(word) {
  // iterate from the first letter to the middle
  for (let i = 0; i < word.length / 2; i++) {
    // iterate from the lat letter to the middle
    const j = word.length - 1 - i;
    // return false if a letter at the start does not match a letter at the end towards the middle
    if (word[i] !== word[j]) return false;
  }

  // return true
  return true;
}


/* 
  Add your pseudocode here
  that means if the word is the same as the word in reverse, I should return true.
  
  reverse the input string
  if the input is the same as the reversed input
    return true
  else
    return false
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

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));
}

module.exports = isPalindrome;
