/*Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
*/

/*
|Understanding The Problem| : 

+ The function takes in one argument, arr being an array containing two strings in every case.
+ We need to compare the two strings in the array. We need to check if every letter in the second string is in the first string.
+ We have to return a boolean value, true or false.

|Data Structure| : we have a array that contains two string at first and at the end we should have a boolean value.

|Algorithm| :

1. We need to lower case the two array

2.We loop the second array

3.We setup a variable who take the number giving by the method indexOf()

4.If we got -1 than mean we don't have the letter both side
*/

// |Code|: 

function mutation(arr) {
    let item1 = arr[0].toLowerCase()
    let item2 = arr[1].toLowerCase()

    for(let i= 0; i < item2.length; i++) {
        var match = item1.indexOf(item2[i]);

        if (match === -1) {
            return false;
        }
    }
    return true;
   
}

console.log(mutation(["hello", "He"]))