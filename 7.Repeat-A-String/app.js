/* Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. */

/* 
|Understanding the Problem| : We have two inputs here:

1. str: a string. a series of letters or a character like the asterisk.
2. num: a number

Our output is going to be a string. Ultimately, we want our output to be str repeated the same number of times as num.
The only edge case we’re advised about is if num is not a positive number, return an empty string.

|Data Structure| : We are given strings and expected to return a string. 
Concatenating (adding together) strings doesn’t require us to change our data type or structure, so let’s just stick with strings.

|Algorithm| : 

1. If num is zero, return an empty string.

2. If num is not zero, repeat str the same number of times as num.

3. Return the repeated string.

*/

function repeatStringNumTimes (str, num) {
    if (num <= 0) {
        return ''
    }
    let repeatedString = '';
    for (let i= 0; i <num; i++) {
        repeatedString += str
  // i = 0  ''             += 'abc'
  // i = 1  'abc'          += 'abc'
  // i = 2  'abcabc'       += 'abc'
  // i = 3  'abcabcabc'
    }
    return repeatedString;
}

console.log(repeatStringNumTimes("abc", 6));