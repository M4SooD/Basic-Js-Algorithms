/* Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array. */

/* 
|Understanding The Problem| : 

+ The function takes two arguments, arr being an array and size being a number.

+ We need to evaluate size and create sub-arrays with a length of size.

+ We need to return a two-dimensional array.

|Data Structure| : Our plan of action will definitely involving a loop of arr. We need to figure out how and when to split into a sub-array.

|Algorithm| : 

1.Setup a empty arr and and var 0

2.Use a while loop who gonna stop when the item size gonna be bigger than the arr size

3.push the slice to the arr and use the item for be the start index inside my slice and sum it with the size.

+ Because of the loop the item size growth with the size args so we can do the loop until nothing left.

*/
// |Code| :
function chunkArrayInGroups(arr, size) {
    let masterArr = []

    let item = 0;

    while(item < arr.length) {
        masterArr.push(arr.slice(item, item += size))
    }
    return masterArr;

}

console.log(chunkArrayInGroups(["a", "b", "c", "d","e","f"], 3))