var originalWord = "";
var checkWord = "";

function reverse(givenWord) {
    originalWord = givenWord;
    console.log("Original:", originalWord);
    
    let reverseWord = originalWord.split("");
    checkWord = "";

    for (let i = reverseWord.length - 1; i >= 0; i--) {
        checkWord += reverseWord[i];
    }
    
    console.log("Last line in reverse:", checkWord);
    
    
    checkPalindrome(originalWord, checkWord);
}

function checkPalindrome(originalWord, checkWord) {
    console.log("Check palindrome...");
    if (originalWord === checkWord) {
        console.log("*******");
        console.log(checkWord, "is palindrome");
    } else {
        console.log(originalWord, "is NOT a palindrome");
    }
}



reverse("madam"); 
reverse("hello");