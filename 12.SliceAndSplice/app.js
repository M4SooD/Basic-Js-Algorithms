/* You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
*/

/*
|Understanding the Problem| : we have two input in the form arrays and an index. we need to Insert all the elements of arr1 into arr2 beginning at the index
specified by n .and in the end should we have the combined arrays.


|Data Structure|: We are going to manipulate our arrays using Slice() and Splice(). in the end we should have our arrays combined with each other.

|Algorithm|: 

1.Create a copy of arr2.

2. Insert all the elements of arr1 into arr2 starting at the index in arr2 specified by n.

3.Return the combined arrays.

*/

// |Code|:

function frankenSplice (arr1, arr2, n) {
    let combinedArrays = arr2.slice()
    combinedArrays.splice(n,0, ...arr1)
    
    return combinedArrays;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 2))