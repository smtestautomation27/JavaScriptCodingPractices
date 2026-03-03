let age = -18;
let b = 2;
let c = 5;

//voting age

if( age > 18){
	console.log("Eligible for voting");
}	
else if( age === 18){
	console.log("you have just become eligible for voting");
}
else if( age < 0){
	console.log("Put a positive number");
}
else{
	console.log("You are not eligible");
}

/*
function
arithmetic 
operators
*/

function add(x, y){
	return (x + y);
}

function subtract(x, y){
	return (x - y);
}

//add two numbers

console.log("The sum is :" + add(b, c));

//diff two numbers 

console.log("The diff is :" + subtract(b, c));