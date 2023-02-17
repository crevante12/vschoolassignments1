//Data Types - Create variable for each data type below using the example provided for a string 


//String - denoted/represented by " " ' ' - they are great for words, language

var firstName = "Crevante"


////////


//Number - anything of numerical value - just a number
var age = 25
var rating = 100
////////



//Boolean - true or false 

/////////
var isalive= true




//Array - are denoted/represented by [] - are great for holding multiple pieces of data
//use bracket notation [] here with the array you created 
var numbers  = [1,2,3,4,5,6,7,8,9,10]
numbers[4]
console.log(numbers[4])



/////////




//Object - denoted/represented by {} - great for describing something in detail - like a billing address
// use dot notation . here with the object you created .

var person = {
                name:"crevante",
                age:25,
                isalive:true,
                   
}



//////////




//Create an object - use each datatype as a property
//Use dot and bracket notation to display your knowledge
//////////
var person = {
    name:"crevante",
    age:25, 
    isalive:true ,
    rating:100

}
console.log(person.name)
console.log(person.isalive)
console.log(person.age)
console.log(person.rating)



//Conditional Statement
//if (this is true){ execute this code }
//  else if (this is true) {do this code instead!}
//  else {for anything else do this here!}
//using the variable provided below create a conditional statement

//Using below example below to create your own conditional statement.
// var color = "red"

// if (color === "red") {
//     console.log("I am blue!")
// } else if (color === 'blue') {
//     console.log("I am red!")
// } else {
//     console.log(" i am something else!")
// }



var sport = 'football'

if(sport === "football"){
console.log("the sport is football!")
} else if (sport==="basketball"){
    console.log("the sport is basketball")

}else{
    console.log("i am neither sport")
}

// /////////



//For Loops - At their most elementary form they are just creating an number line for us; starting at a number and ending at a number - these number are represented by a single variable, named i

//for (#1Step start point; #2Step end point; #4Step howtogetthere){
//    #3Step what to do 
//} 

//i = i + 1 same i++


//Create 1 for loop

// for (var i = 0; i < 13; i++) {
//     console.log(i)
// }

// // for(var i = 25; i<50; i++){
// //     console.log(i)
// }





//Data Types - Create variable for each data type below using the example provided for a string 


//String - denoted/represented by " " ' ' - they are great for words, language
var firstName = "Andrew"
console.log(firstName)

////////


//Number - anything of numerical value - just a number


////////



//Boolean - true or false 

/////////



//Array - are denoted/represented by [] - are great for holding multiple pieces of data
//use bracket notation [] here with the array you created 


/////////




//Object - denoted/represented by {} - great for describing something in detail - like a billing address
// use dot notation . here with the object you created .

//////////




//Create an object - use each datatype as a property
//Use dot and bracket notation to display your knowledge
//////////



//Conditional Statement
//if (this is true){ execute this code }
//  else if (this is true) {do this code instead!}
//  else {for anything else do this here!}
//using the variable provided below create a conditional statement

//Using below example below to create your own conditional statement.
var color = "red"

if (color === "red") {
    console.log("I am blue!")
} else if (color === 'blue') {
    console.log("I am red!")
} else {
    console.log(" i am something else!")
}



var sport = 'football'


// /////////



//For Loops - At their most elementary form they are just creating an number line for us; starting at a number and ending at a number - these number are represented by a single variable, named i

//for (#1Step start point; #2Step end point; #4Step howtogetthere){
//    #3Step what to do 
//} 

//i = i + 1 same i++


//Create 1 for loop

for (var i = 0; i < 13; i++) {
    console.log(i)
}

var welcome= document.getElementById("welcome")
console.log(welcome)
console.dir(welcome)

var button = document.getElementById("button")

function greeting() {
    alert("Welcome to my Page")
}

button.addEventListener("click", greeting)



//////////////////
//level 0 curriculum last 5 videos cover this material "DOM"

//1. Create button with an ID on it in HTML
//2. Call Button into JS using document and getting element by its ID
//3. Set that button equal to a variable
//4. with that variable use dot notation to access the addeventlistener method






