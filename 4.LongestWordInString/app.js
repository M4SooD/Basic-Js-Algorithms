/* Return the length of the longest word in the provided sentence.

Your response should be a number. */

/* 
|Understanding the Problem| : Our input here is a string and our output is a number. 
Ultimately, we want to return the length of the longest word in the input string.

|Data Structure|: We will likely have to split the string of words into an array of words in order to solve this challenge.

|Algorithm| :

1. Split the string of words into an array of words.

2. Create an array with the length of each word.

3. Return the highest number in that array.
*/

function findLongestWordLength (str) {
    let words = str.split(' ')
    let lengths = words.map(word => word.length)
    return Math.max(...lengths)
}

console.log(findLongestWordLength("If You Know Where You Stand, Then You Know Where to Land and If You Fall It Won't Matter, Cuz You'll Know That You're Right,"))
