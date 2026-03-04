/* Challenge 2: Even or Odd Tracker (Loops & Conditionals)
Write a for loop that counts from 1 to 20.

For every number, check if it is even or odd using the modulo operator (%).

Print the result to the console like this: "7 is Odd" or "10 is Even". */

function evenoddtracker(num){
    if(num % 2 == 0){
        console.log(num + " is Even");
    }
    else{
        console.log(num + " is Odd");
    }
}

let lowerLimit = parseInt(prompt("Enter lower limit for the series:"));
let upperLimit = parseInt(prompt("Enter upper limit for the series:"));

// let lowerLimit = 5
// let upperLimit = 15

for( i = lowerLimit; i <= upperLimit; i++){
    evenoddtracker(i);
}