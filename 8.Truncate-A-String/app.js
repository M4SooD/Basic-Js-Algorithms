/* Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending. */

/*
|Understanding the Problem| : We have two inputs here:

1. str: a string. words, letters, and characters.
2. num: a number.

Our output is going to be a string. Ultimately, we want our output to be str truncated — meaning cut off — after num 
characters with “…” added to the end of the truncated str.

|Data Structure| : We are given strings and expected to return a string. 
Concatenating (adding together) strings doesn’t require us to change our data type or structure, so let’s just stick with strings.

|Algorithm| : 

1. If the length of the string is less than or equal to the given number, just return the string without truncating it.

2. Otherwise, truncate the string. Meaning keep the beginning of the string up until the given number and discard the rest.

3. Add “…” to the end of the truncated string and return it.

*/

function truncateString (str, num) {
    if (str.length <= num) {
        return str
    }
    return str.slice(0, num) + "..."
}

console.log(truncateString("for a minute there i lost myself", 13))