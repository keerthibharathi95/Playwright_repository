let originalWord = "madam"
let reverseWord = originalWord.split("");
let checkWord=""
console.log(reverseWord);

for (let i = reverseWord.length-1; i >=0 ; i--){
    // console.log(reverse)
      checkWord+=reverseWord[i]
}
console.log(checkWord)
if (originalWord === checkWord) {
     console.log("It is palindrome") 
}