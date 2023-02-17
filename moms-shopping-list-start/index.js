const form = document.getElementById("add-todo")
const list = document.getElementById("list")
// console.log(form)
// created a const for the form section i am working with
form.addEventListener("submit", function(event){
    event.preventDefault()
  // add event listener for submit function to not refresh every time it is clicked
const inputItem = form.title.value
// you are grabbing the text entered in the variable
form.title.value = ""
//  in line  9 you are resetting the box to a empty string after hitting tge button
//console.log(inputItem + "")

const li = document.createElement('li')
li.style.textAlign ="center"
list.append(li)
// take list to add to the list items
const div = document.createElement("div")
div.textContent = inputItem + " "
li.append(div)
// document.getElementsByClassName("todos")[0].append(li)
const buttonE = document.createElement("button")
buttonE.textContent = "Edit"
buttonE.style.margin= "5px"
li.append(buttonE)
// you created the button element and append the element to the Li element
const buttonX = document.createElement("button")
buttonX.textContent= "X"
li.append(buttonX)

buttonX.addEventListener("click", function(){
    li.remove()
    console.log("it works")
})
})

// you created the "x" button and created the click event listener to remove the list item i created 