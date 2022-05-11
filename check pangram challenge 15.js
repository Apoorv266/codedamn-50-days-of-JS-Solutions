


let input = "abcdefghijklmnopqrstuvwxyz"
let input2 = input.toLowerCase()
let input3 = input2.split("")

const isPangram = (input3) => {
    let arr = []
    for (let i = 0; i < input3.length; i++) {
        if (input3[i] != " ") {
            arr.push(input3[i])
            bool = true
        }
    }
    let uniqueChars = [...new Set(arr)]; // removing duplicate from the array so that only 26 alphabets are left
    if(uniqueChars.length === 26){
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