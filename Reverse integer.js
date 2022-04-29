//.........................Converting into string first.............................

const num = 1002;

function reverseGivenInteger(num) {
    // write your solution here
    let text = num.toString();
    let str = ""
    for (let i = text.length - 1; i >= 0; i--) {
        str += text[i]
    }
    
    return str
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`)


//.............................By dividing it by 10..........................

// const num = 3849;
// console.log(num / 10)