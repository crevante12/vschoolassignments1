var fruit = ["banana","apple","orange","watermelon"];
var vegetables = ["carrot","tomato","pepper","lettuce"]


vegetables.pop()
//console.log(vegetables)
fruit.shift()
//console.log(fruit)
var orangeIndex = fruit.indexOf("orange")
//console.log(orangeIndex)
fruit.push("1")
//console.log(fruit)
let length = vegetables.length
//console.log(length)
vegetables.push("3")
//console.log(vegetables)
var food = fruit.concat(vegetables)
// console.log(food)
var arrOf = food.splice(4,2)
//console.log(food)
var reverseFood = food.reverse().join()
console.log(reverseFood)
