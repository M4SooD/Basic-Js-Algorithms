/* Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case. */

/* 
|Understanding the Problem| : We have one input, a string. Our output is also a string. 
Ultimately, we want to return the input string with the first letter — and only the first letter — of each word capitalized.

|Data Structure|: We are going to have to transform our input string into an array in order to manipulate each word separately.

|Algorithm| : 

1.Turn all the letters in str to lower case letters.

2.Split the lower case str into an array, with each word being a separate element in the array.

3.Capitalize the first letter of each element in the array.

4.Join each element of the array into one string, separating each word by a whitespace.

5.Return the title cased string.

*/

// |Code|:

function titleCase(str) {
    let lowerCaseString = str.toLowerCase()
    let splitString = lowerCaseString.split(' ')
    let titleCaseArray = splitString.map((word) => {

        return word[0].toUpperCase() + word.slice(1)
    })
    let titleCaseSentence = titleCaseArray.join(' ')

    return titleCaseSentence
}

console.log(titleCase('dreaming away your life'))