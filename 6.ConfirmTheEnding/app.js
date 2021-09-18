/* Check if a string (first argument, str) ends with the given target string (second argument, target). */

/* 
|Understanding the Problem| : We have two inputs here: 

1. str: a string. This could be a word or a sentence
2. target: a string. Our algorithm is checking if target is at the end of str. target could be a word or just some letters.
Our output is going to be true or false. We need to return true if target is at the end of str,
and false if str ends with anything other than exactly target.

|Data Structure| : We are given strings and expected to return a boolean.

|Algorithm| : 

1. Determine the length of target.

2. Pluck the same number of letters off the end of str.

3. Return true if those letters match target, and false if they don’t.
*/

function confirmEnding(str, target) {
    let ending = str.slice(str.length - target.length)
    //           str.slice(Masood.length - d.length)
    //           str.slice(6              - 1)
    //           str.slice(5)
    //           "d"
    return ending === target;
}

console.log(confirmEnding("masood","ood"));