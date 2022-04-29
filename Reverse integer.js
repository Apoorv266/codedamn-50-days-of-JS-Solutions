//.........................Converting into string first.............................

const num = 3849;

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

const num2 = 3849;
const num3 = num2.toString()

reverseGivenInteger2(num2)

function reverseGivenInteger2(num2) {
 let str = ""
    for (let i = 0; i <= num2.length-1; i++) {
    str += num2[i] * 10
    } 
    console.log(str)
}

console.log(num3 % 10)

console.log(`Reversed integer is: ${reverseGivenInteger2(num2)}`)