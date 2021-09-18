// Check if a value is classified as a boolean primitive. Return true or false.

/* 
|Understanding the Problem| : We have one input, and it seems like it could be just about anything: a boolean, an array, an object, a number, a string, etc. 
Our output is a boolean, either true or false. Ultimately, we want to determine if our input is a “boolean primitive,” as simply true or false.

|Data Structure|: We are not going to have to worry about data structures here. We are just checking if the input is a boolean primitive or not.

|Algorithm|: 

1.Check to see if the input is a boolean primitive.

2.If it is, return true.

3.If it’s not, return false.
*/

// function booWho (bool) {
//     if (bool === true || bool === false) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(booWho(null))


// Solution #2 

function booWho(bool) {
    return typeof(bool) === "boolean"
  }
  
  console.log(booWho(false));