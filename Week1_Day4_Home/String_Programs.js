let originalWord = "Hello World"
let characters = originalWord.split(" ");
let reverseWord = ""


function reverseString() {
      for (let i = characters.length-1; i >=0 ; i--){
      reverseWord+=characters[i]
}
console.log(reverseWord)
}

let Word="the actors in the movie played the roles of the heroes who saved the day for the people in the city"
let countWord = "the"
let WordSplit = Word.split(" ")
let count = 0;
function numberOfOccurences() {
      for (let i = WordSplit.length - 1; i >= 0; i--) {
            if (countWord === WordSplit[i]) {
                  count++
            }
      }
      console.log(count)
      
}
reverseString();
numberOfOccurences();