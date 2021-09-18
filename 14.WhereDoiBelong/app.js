/* Return the lowest index at which a value (second argument) 
should be inserted into an array (first argument) once it has been sorted. The returned value should be a number. */

/* 
|Understanding the Problem| : We have two inputs, an array, and a number.
Our goal is to return the index of our input number after it is sorted into the input array.

|Data Structure| : Since we’re ultimately returning an index, sticking with arrays is going to work for us.

|Algorithm| :

1.Insert num into arr.

2.Sort arr from least to greatest.

3.Return the index of num.

*/

// |Code| :

function getIndexToIns(arr, num) {

    let newArray = arr.concat(num)

    newArray.sort((a,b) => a - b)

    return newArray.indexOf(num);
}

console.log(getIndexToIns([40, 60, 70, 50 ], 30))
