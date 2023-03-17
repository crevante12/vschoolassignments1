// capilizeAndLowercase("HelLo") // => "HELLOhello"


function capilizeAndLowercase (string){
    var upper = string.toUpperCase()
    var lower = string.toLowerCase()
    return upper.concat(lower)
    }
    console.log(capilizeAndLowercase("hello"))



function middleIndex(string){
var findmiddleIndex = Math.floor(string.length/2)

return findmiddleIndex

}
console.log(middleIndex("hello"))
console.log(middleIndex("Hello World"))

function returnFirstHalf(string){
    var findMiddleIndex = middleIndex(string)
    var returnFirstHalf = string.slice(0,findMiddleIndex)
    return returnFirstHalf
}
console.log(returnFirstHalf("hello"))
console.log(returnFirstHalf("Hello World"))

function splitCap(string){
var findMiddleIndex = middleIndex(string)
var returnFirstHalf= string.slice(0,findMiddleIndex).toUpperCase()
var returnSecondHalf= string.slice(findMiddleIndex).toLowerCase()
return returnFirstHalf.concat(returnSecondHalf)
}
console.log(splitCap("HELLO"))
console.log(splitCap("Hello World"))
