//Write a function that takes an array of numbers and returns the largest (without using Math.max())
const arr = []  // - created empty array to take in custom values.  

const largestNumber = (values) => {     // created a function that will accept values
    let highest = 0;  // set that any number higher than 0 us it took it into acccount
    for( let i = 0; i<values.length;i++){
        if(values[i]>highest){    // created for loop that will loop through the given array, following if the  value is greater than "highest it will hold that number"
            highest = values[i]; // once highest is recognized highest is now replaced with value found
        }
    }
    return highest    // return the new highest number
}
// test data
console.log(largestNumber([6, 13, 250, 3]))// => 250
console.log(largestNumber([3, 5, 2, 8, 1])) // => 8
console.log(largestNumber([-13, 40, 3, 0, 19, 22])) // => 40





//Write a function that takes an array of words and a character and returns each word that has that character present.


function lettersWithStrings(arr,char){
    const result = [];
    for(let i = 0; i < arr.length; i++){
        let word = arr[i].split("");
    for(let a = 0; a< word.length; a++){
        if( word[a] === char){
            result.push(arr[i])
        }
    }
    }
    return result
}

// test data

console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"))  // => ["C%4!", "Hey!"]
console.log(lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h"))  // => []

//Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

 function isDivisible(num1,num2){
    let output = num1/num2
    if(Number.isInteger(output)){
        return true;
    } else {
        return false;
    }

}
// test data
console.log(isDivisible(4, 2)) // => true
console.log(isDivisible(9, 3)) // => true
console.log(isDivisible(15, 4)) // => false
