const readline = require("readline-sync");

function startFunction(){
const name = readline.question(" What is your name?: ");
console.log(' Hi '+  name + ' Welcome to the room!!! ');


let startGame = true

while(startGame === true){
    const question1 = readline.keyInYN(" To escape do you want to open the door? ")
    
    if(question1 === true){
        console.log(name + "You attempted to open the door, Its locked")

    } 
    
    const question2 = readline.keyInYN(" do you wish to put hand in mysterious hole to exit the room? ")
    if(question2 === true){
        console.log( name + " you have died")
        break
    } else if (question2 === false){
        console.log("You live to see another day.")
    } 
    
    const question3 = readline.keyInYN(name + "Would you like to look for key instead? ")
    if(question3 === true){
        console.log("You found the key and opened the door. You have escaped! ")
        break
    }else if(question3 === false) { 
        console.log(" You decided not to search for the key and died! ")
        break
    }
    }
}

startFunction()