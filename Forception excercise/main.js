var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
// var splitAlpha = alphabet.split("")
//console.log(splitAlpha)

function forception(people,alphabet) {
  var newArr = []
    for(var i=0; i < people.length;i++){

        newArr.push(people[i])
        for(var j =0; j < alphabet.split("").length; j++){

            newArr.push(alphabet[j])
        }
    //  console.log(people[i])   
    }
   console.log(newArr)
    return newArr
}
// console.log(forception(people,alphabet))
forception(people,alphabet)