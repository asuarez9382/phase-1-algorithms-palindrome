function isPalindrome(word) {
  // Write your algorithm here
  let forwardArr = []
  for(letter of word) {
    forwardArr.push(letter)
  }
  let backwardArr = []
  for(letter of word){
    backwardArr.unshift(letter)
  }
  const combinedArr = forwardArr.map(function(e, i) {
    return [e, backwardArr[i]];
  });
  
  for(element of combinedArr) {
    if(element[0] !== element[1]){
      return false
    }
  }
  return true
}


/* 
  Add your pseudocode here
  make an array of the letters in the word
  make an array of the letters of the word but reversed
  check if each letter of each array equal each other

  const forwardArr = []
  for letter in word{
    forwardArr.append(letter)
  }

  const backwardArr = []
  for(let i=word.length(); i=< word.length(); --i){
    backwardArr.append(word[i])
  }

  if forwardArr === backwardArr {
    return true
  }
  else {
    return false
  }
*/


/*
  Write a function that detects whether a word is a pallindrome
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
