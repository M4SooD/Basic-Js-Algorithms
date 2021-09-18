// Remove all falsy values from an array. Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

/* 
|Understanding the Problem| : We have one input, an array. Our goal is to remove all the falsy values from the array then return the array.

|Data Structure| : We are going to stick with arrays here till the end.

|Algorithm| : 

1.Determine which values in arr are falsy.

2.Remove all falsy values.

3.Return the new array that contains only truthy values.
*/

// |Code| :

function bouncer(arr) {

    return arr.filter(element => Boolean(element) === true)
}

console.log(bouncer([7, "ate", "", false, 9]) )