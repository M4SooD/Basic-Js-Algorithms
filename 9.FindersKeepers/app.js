/* Create a function that looks through an array [arr] and returns the first element in it that passes a 'truth test'. 
This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined. */

/* 
|Understanding the Problem| : We have two inputs here: 

1. arr: an array. These will be arrays full of numbers.
2. func: a function. we will make a functions that checks to see if any number in arr is even.

Our output is going to be a number.

|Data Structure|: We are going to be iterating through an array here.

|Algorithm| : 

1.Run each number in arr through func.

2.If a number through func evaluates to true, return that number.

3.If no number through func evaluates to true, return undefined.
*/

function findElement(arr, func) {
    for (let i= 0; i< arr.length; i++)
    if (func(arr[i])) {
        return arr[i]
    }
}

console.log(findElement([1,2,3,4], num => num % 2 === 0))