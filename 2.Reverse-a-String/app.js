/*Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string. */
// // // // // // // // // // // // // // // // // // // // // // // // //

/* 
|Understanding the Problem|: Our input is a string, and our output is the same string but in reverse order. 
For this solution, first we need to split the input string into an array before reversing it!
We’re going to solve the algorithm scripting challenge with built-in methods!

|Data Structure|: Our input is a string. We will split this string into an array, with each element of the array being a single character of the string.
For example: 'hello' turns into ['h', 'e', 'l', 'l', 'o'] Once we reverse the elements, we’ll join them together into a string for the output.

|Algorithm| :
1. Split the input string into an array of its letters using split(). Be sure to include an empty string in the split method, like so: split('').
This ensures that the split method splits the string by each individual character.

2. Reverse the array of letters by using reverse().

3. Join the array of reversed letters together into a string by using join(). Be sure to include an empty string in the join method, like so: join(''). 
This ensures that the join method joins the letters together with nothing in between them.

*/

// |Code|:

function reverseString (str) {
    return str.split('').reverse().join('')
}
console.log (reverseString('masood'))