function startFunction() {
    var readline = require("readline-sync");
var name = readline.question("What is your name?: ")
var action = readline.question("What action would you like to perform?: ")
var num1 = readline.questionInt("what is your first number: ")
var num2 = readline.questionInt("what is your second number: ")

function  add (num1,num2){
    result = (num1) + (num2);
    returningString = 'Hi ' + name+ ' your result is: ' + result
    return returningString
}
function  multiply (num1,num2){
    result = (num1) * (num2);
    returningString = 'Hi ' + name+ ' your result is: ' + result
    return returningString
}
function  divide (num1,num2){
    result = (num1) / (num2);
    returningString = 'Hi ' + name+ ' your result is: ' + result
    return returningString
}
function  subtract (num1,num2){
    result = (num1) - (num2);
    returningString = 'Hi ' + name+ ' your result is: ' + result
    return returningString
}

if(action === 'add') {
console.log(add(num1,num2))
} else if ( action === 'multiply') {
console.log(multiply(num1,num2))
} else if( action === "divide") {
console.log(divide(num1,num2))
} else if (action === "subtract"){
console.log(subtract(num1,num2))
}

else {
    console.log("That is not add or multiply ")
    
}}

startFunction()
