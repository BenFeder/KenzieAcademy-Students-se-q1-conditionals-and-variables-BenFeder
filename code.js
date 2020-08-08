/*
  Conditionals and Variables Practice

  Complete the exercises. Follow the instructions and steps for each exercise.
*/

/*
---------------------------------------------------------------------------
Exercise One
Is it larger than 10?

Steps: 
 1. Create an if statement checking if the number is greater than 10.
 If it is, then log "It is bigger than 10!" using console.log().
 

 2. Change the number variable to something larger than 10, run your code and
 make sure it works.
*/

let number = 11;
if (number > 10) {
  console.log("It is bigger than 10!");
} else {
  console.log("It is NOT bigger than 10!");
}
// Your Code Here

/*
---------------------------------------------------------------------------
Exercise Two
Determining a color

Steps:
 1. Pick either "blue", "red", or "green" and assign it to the color variable.
 

 2. Create an if statement, if the color is "blue", then log "The sky is blue." using console.log

 3. Create an else if statement, and if the color is "red" then log "The flower is red."

 4. create another else if statement where if the color is "green" then log "The Leaf is green."

 5. Finally, create an else statement and log "It is a different color".

 6. Test your code! Change the value of the color variable to different colors and run your code.
 The correct message should log to the console.
*/

let color = "orange";

if (color === "blue") {
  console.log("The sky is blue.");
} else if (color == "red") {
  console.log("The flower is red.");
} else if (color == "green") {
  console.log("The Leaf is green.");
} else {
  console.log("It is a different color.");
}

// Your Code Here

/*
---------------------------------------------------------------------------
Exercise Three
Computing a lifetime supply of your favorite snack!

You just won a lifetime supply of your favorite snack. 
You are going to write a piece of code which will determine how much you
will actually need to last the rest of your life.

Follow the instructions to get the amount.  
Remember to use descriptive variable names!

Steps
 1. Store your current age into a variable.
 Hint: let age = ...;

 2. Store a maximum age into a variable. (The longest you expect to live, or at least how long you will want to eat the snack until)

 3. Store an estimated amount per day (as a number).
 For example 1, for 1 bag of chips per day.

 4. Calculate how many you would eat total for the rest of your life.
 Store the result in a variable.
 Hint: There are 365 days in a year, multiply that by the number of years and the amount of that snack per day...

 5. Create a variable called "message" describing your result.
 "You will need NN to last you until the ripe old age of X".

 6. console.log() your message.
*/

// Your Code Here

let age = 29;
let maxAge = 1000000000000;
let perDay = 1;

let lifeTimeSupply = (maxAge - age) * 365 * perDay;

let message =
  "You will need " +
  lifeTimeSupply +
  " to last you until the ripe old age of " +
  maxAge;

console.log(message);

/*
---------------------------------------------------------------------------
Exercise Four
Temperature Converter

Build some code which can convert from Fahrenheit to Celcius, and also from Celcius to Fahrenheit.
Based upon the method described here: https://www.mathsisfun.com/temperature-conversion.html

Celcius to Fahrenheit:  Divide by 5, then multiply by 9, then add 32
For example: (0°C * 9/5) + 32 = 32°F

Fahrenheit to Celcius:  Deduct 32, then multiply by 5, then divide by 9
For example: (32°F − 32) * 5/9 = 0°C

Hint: Don't actually put the °F or °C part in your variables, 
only put that in the console.log statement at the end.

Steps:
1. Store a celsius temperature into a variable.
   Hint: let tempInCelcius = 30;

2. Convert it to fahrenheit (using the above formula) and store that in a new variable.

3. Output to console.log() in the format "3086".

4. Now store a fahrenheit temperature into a variable.

5. Convert it to celsius (using the above formula) and store that in a new variable.

6. Output to console.log() in the format "86°F is 30°C."
*/

// Your Code Here

let tempInCelcius = 30;
let tempInFahrenheit = tempInCelcius * (9 / 5) + 32;

console.log(tempInCelcius + "°C is " + tempInFahrenheit + "°F.");

let tempInFahrenheit2 = 50;
let tempInCelcius2 = (tempInFahrenheit2 - 32) * (5 / 9);

console.log(tempInFahrenheit2 + "°F is " + tempInCelcius2 + "°C.");
