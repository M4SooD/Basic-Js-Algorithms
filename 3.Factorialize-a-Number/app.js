/*Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of
all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n! 

Only integers greater than or equal to zero will be supplied to the function.*/

/* 
|Understanding the Problem|: Our input here is an integer — a whole number. Our output is also going to be a number;
 it’s the factorial of the input number. 
 So basically we just need to multiply together all the numbers greater than zero and less than or equal to the input number.

|Data Structure|: Your mind might jump to an array because we’re dealing with a series of numbers, but I think we can do this simpler! 
A loop looks like it’s going to work just fine.

|Algorithm| : 
1.Create a variable total, and set it equal to 1.

2.Create a for loop with i equal to 1, running as long as i is less than or equal to num, and incrementing i by 1 each time the loop runs.

3.Within the loop, multiply total by i, and save the product to the variable total.

4.Return total as the answer.

*/
function factorialize(num) {
   let total = 1;
   for (let i = 1; i <= num; i++) {
       total *= i;
   }
   return total;
}

console.log(factorialize(6))