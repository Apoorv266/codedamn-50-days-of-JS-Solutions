
let int = 0
let x = window.prompt("find number of grains on square no : ")
 
if(x <= 64){
for (let i = 0; i <= x; i++) {
    if (int === 0) {
     int = 1
    } 
    else {
        int = int + int
    }
}
console.log(`Grain on ${x} board is`,int)
console.log(BigInt(int))
}

else{
alert("Number should be less than equal to 64")
}

//---------------------------Codedamn's solution---------------------------------------

console.log("--------------------------------")

const totalGrains = () => {
    let result = 1;
    for (let i = 1; i <= 64; i++) {
        result *= 2
    }

    return BigInt(result)
}

const grainsOn = (input) => {
    let result = 1;
    for (let i = 1; i <= input; i++) {
        result *= 2
    }

    return BigInt(result)
}

console.log(`Grains on 5th square: ${grainsOn(5)}`)
console.log(`Total grains on the Chess Board: ${totalGrains()}`)