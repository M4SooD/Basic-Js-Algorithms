/* Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays. */

/* 
|Understanding the Problem| : Our input here is an array of arrays. Our output is an array.
 Ultimately, we need to pluck the largest number from each group of numbers given to us and return those largest numbers in an array.

|Data Structure|: We are given an array of arrays as our input. 
we can access the element of an array in bracket form like so: array = [2, 5, 7, 9] array[1] = 5.
Another useful piece of information is that we can access whole arrays as elements this way. 
Think about it: if our input is
arr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]
then each array here is a single element of the parent array. Therefore
arr[0] = [4, 5, 1, 3]
This will be a useful way for us to access each group of numbers passed to us.

|Algorithm| : 

1.Go through each group of numbers in the input.

2.Pick out the largest number in each group and store it.

3.Return the group of largest numbers.

*/

function largestOfFour(arr) {
    let answer = [] ;
    for (let i = 0; i < arr.length; i++) {
        answer.push(Math.max(...arr[i]))
    }
    return answer;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))