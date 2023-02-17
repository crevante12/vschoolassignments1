const div = document.querySelector("#box")

div.style.backgroundColor = "tan";
div.style.width = "200px"
div.style.height = "200px"

div.addEventListener("mouseover", e => {

  div.style.backgroundColor = "blue";  
})
div.addEventListener("mousedown", e =>{
    div.style.backgroundColor = "red"
})
div.addEventListener("mouseup", e => {
    div.style.backgroundColor = "yellow"
})
div.addEventListener("dblclick", e => {
    div.style.backgroundColor = "green"
})
div.addEventListener("mousewheel", e => {
    div.style.backgroundColor = "orange"
})
document.addEventListener("keydown", e => {
    console.log(e.key)
    if (e.key === "r"){
        div.style.backgroundColor = "red"
    }
    if(e.key === "b"){
        div.style.backgroundColor="blue"
    }
    if(e.key === "o"){
        div.style.backgroundColor="orange"
    }
    if(e.key === "y"){
        div.style.backgroundColor="yellow"
    }
    if(e.key === "g"){
        div.style.backgroundColor="green"
    }
})