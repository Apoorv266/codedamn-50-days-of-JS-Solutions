let input = "abcdefghijklmnopqrstuvwxyz"
let input2 = input.toLowerCase() // all the characters of the input string converted to lowercase
let input3 = input2.split("")  // the input string is converted to an array containing each letter

const isPangram = (input3) => {
    let arr = []
    for (let i = 0; i < input3.length; i++) {
        if (input3[i] != " ") {  // all the spaces from array is removed and remaining character are added to "arr" array
            arr.push(input3[i])
        }
    }
    let uniqueChars = [...new Set(arr)]; // removing duplicate from the array so that only 26 alphabets are left
    if(uniqueChars.length === 26){  //  now since only alphabets are left , we will check the length of array as 26 since there are 26 alphabets
        return true
    }
    else{
        return false
    }
       
}
console.log(isPangram(input3))

// const isPangram = (input) => {
//     const inputLowered = input.toLowerCase()
//     return [..."abcdefghijklmnopqrstuvwxyz"].every(c => inputLowered.includes(c))
// };