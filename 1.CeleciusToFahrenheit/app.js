/* You are given a variable celsius representing a temperature in Celsius. 
Use the variable fahrenheit already defined and assign it 
the Fahrenheit temperature equivalent to the given Celsius temperature.*/
/*The algorithm to convert from Celsius to 
Fahrenheit is the temperature in Celsius times 9/5, plus 32. */

/* |Understanding the Problem|: Our input here is a Celsius temperature, and our output is a Fahrenheit temperature. 
In other words, the algorithms takes a Celsius temperature and returns a Fahrenheit temperature.

|Examples/Test Cases|: freeCodeCamp has provided us with several test cases that you can see above the tasks (not gonna include examples to next challenges).

|Data Structure|: We aren’t going to have to worry too much about this part of PEDAC for this algorithm. We’re just returning a number.

|Algorithm|: The steps to convert from Celsius to Fahrenheit are as follows:

1. Multiply Celsius value by 9/5
2. Add 32 to Celsius value */

// |Code| :
function convertToF(celsius) {
    let fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
  }
  
  console.log(convertToF(-15));

