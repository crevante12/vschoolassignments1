var head = document.getElementById("header")
head.textContent = "javascript made this!!"
head.style.fontSize = "50px"
head.style.textAlign="center"
head.style.fontWeight="bold"

var newP = document.createElement("p")
newP.textContent = "Crevante "
newP.style.fontSize= "25px"
newP.style.color = "orange"
head.append(newP)

var span = document.createElement("span")
span.textContent = "wrote the JavaScript"
span.style.color = "black"
newP.append(span)

var response = document.getElementsByClassName("messages")[0].children
// you are calling the children elements within the class to respond
var newWords = ["Hello welcome to my lovely life!","I am pleased to be here!","I love ice cream","i love ice cream too"]
// you created a new string of words to replace the previous
console.log(response)
// this is showing you the reponses
for(var i= 0; i < response.length; i++){
console.log(response[i].innerText)
response[i].innerText= newWords[i]
// you replaced the previous string with you new string of elements.
}
// at this point your using the current for loop to access the array and replacing it with your own custom.

let btnClear = document.getElementById('clear-button')
//console.log(btnClear)
let inputs = document.getElementsByClassName("messages")[0].children
console.log(inputs)

function clearmessages(){
    document.querySelectorAll(".message").forEach( function (clear){
        clear.textContent = ""
    })
//  your calling all elements under id tag message and running a function for each array to use function to clear text box 
}
btnClear.addEventListener('click', clearmessages)
// on click of button you are clearing each message running the function previously created.
const dropDown  = document.getElementById("theme-drop-down")
// in order to change the color of the buble you have to call the drop down button
function changecolor (){
    if (dropDown.value === "theme-one") {
    document.querySelectorAll('.left').forEach( function(change1){
        change1.style.backgroundColor = "burlywood" 
    })
    document.querySelectorAll('.right').forEach(function(change2){
        change2.style.backgroundColor = "blue"
    })
    // to make all this action you incorporated a function that allowed the them setting to change when selected.

    } else if (dropDown.value === "theme-two") {
        document.querySelectorAll('.left').forEach(function(change){
            change.style.backgroundColor ="red"
        })
        document.querySelectorAll('.right').forEach(function(change3){
            change3.style.backgroundColor="black";
            change3.style.color ="white"
        })
// you created a else if statement to make the function run for theme-two when clicked for each array
    }
}
dropDown.addEventListener('change', changecolor )
