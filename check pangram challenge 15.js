


let input = "The quick brown fox jumps over the lazy dog"
let input2 = input.toLowerCase()
let input3 = input2.split("")

const isPangram = (input3) => {

    let arr = []
    let regex = /([a-z])(?!.*\1)/gi
    let bool = false

    for (let i = 0; i < input3.length; i++) {
        if (input3[i] != " ") {
            arr.push(input3[i])
            bool = true
        }
    }
   

    // console.table(arr)
    return arr2
}

console.log(isPangram(input3))

// const isPangram = (input) => {
//     const inputLowered = input.toLowerCase()
//     return [..."abcdefghijklmnopqrstuvwxyz"].every(c => inputLowered.includes(c))
// };