/* Challenge 1: The Calculator (Operators & Functions)
Create a function called calculate that takes three arguments: num1, num2, and operator.

If the operator is "+", return the sum.

If the operator is "-", return the difference.

If the operator is "*" or "/", return the product or quotient.

Use a switch statement inside the function to handle the operators. */

function Calculator(num1, num2, operator){
    switch (operator){
        case '+' : 
            console.log("The sum is : "+ (num1+num2));
            break;
        case '-' : 
            console.log("The diff is : "+ (num1-num2));
            break;
        case '*' : 
            console.log("The product is : "+ (num1*num2));
            break;
        case '/' : 
            console.log((num2 === 0)? ("Syntax Error") : ("The quotient is :" + num1/num2));
            break; 
        default:
            console.log("Please enter a valid operator.");
    }
}

let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
let operator = prompt("Enter operator:");

Calculator(num1, num2, operator);